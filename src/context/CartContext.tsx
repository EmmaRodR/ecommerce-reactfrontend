import { createContext, useContext, useEffect, useState } from "react";
import {
  AddToCartRequest,
  CartItem,
  DeleteItemCartRequest,
} from "../types/cartTypes";
import {
  addProductToCart, 
  deleteProductToCart,
  fetchCart,
  updateProductInCart,
} from "../services/cartService";
import { getUserInfoInLocalStorage } from "../utils/getLocalStorage";
import { addProductToGuestCart, deleteGuestProductToCart, fetchgGuestCart, updateProductInGuestCart } from "../services/guestCartService";
import { useOrder } from "../hooks/order/useOrder";
import { useAlert } from "./AlertContext";

export type UpdateActions = {
  actionType: "ADD" | "REMOVE";
};

interface CartContextProps {
  cartItems: CartItem[];
  totalAmount: number;
  fetchCartItems: () => void;
  addItemToCart: (productId: number) => Promise<void>;
  deleteCartItem: (productId: number) => Promise<void>;
  updateItemToCart: (productId: number, action: UpdateActions) => Promise<void>;
  closeCart: () => void;
  isLoading: boolean;
  isOpen: boolean;
  toogleCart: () => void;
  error: string | null;
}

interface CartProviderProps {
  children: React.ReactNode;
}

//Context
const CartContext = createContext<CartContextProps | undefined>(undefined);

//Context Provider
export const CartContextProvider: React.FC<CartProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);


  const {removeOrderHook} = useOrder();
  const {createToast} = useAlert();

  const toogleCart = () => {
    setIsOpen(!isOpen);
  };

  const fetchCartItems = async () => {
    
    setIsLoading(true);

    try {
      const userId = getUserInfoInLocalStorage()?.id;
      const sessionId = sessionStorage.getItem("sessionId");
      let cartData;
       
      //Logica si es usuario logueado.
      if (userId) {
        cartData = await fetchCart(userId);
      //Logica si es usuario invitado (usuario no logueado)
    } else if (sessionId) {
        cartData = await fetchgGuestCart(sessionId);
      }

      if (cartData) {
        setCartItems(cartData.items);
        setTotalAmount(cartData.totalAmount);

        return cartData.items;
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Failed to fetch cart items");
    } finally {
      setIsLoading(false);
    }
  };

  const addItemToCart = async (productId: number) => {
   
    if (isAdding) return Promise.reject("Request already in progress");

    const userId = getUserInfoInLocalStorage()?.id;
    const sessionId = sessionStorage.getItem("sessionId");

    setIsAdding(true); // Marcar como solicitud en curso

    try {
      const formData: AddToCartRequest = {
        productId: productId,
        quantity: 1,
      };

      //Logica si es usuario logueado.
      if (userId) {
        await addProductToCart(userId, formData);
        setError(null);
      //Logica si es usuario invitado (usuario no logueado)
      } else if (sessionId) {
        await addProductToGuestCart(sessionId, formData);
      }

      await fetchCartItems();
      createToast({variant:"success", text: "Product added succesfully!"})
      setIsOpen(true);
    } catch (err) {
      console.log(err);
      setError("Elemento ya existente");
      createToast({variant:"danger", text: "Element already exist in cart!"})
      setIsOpen(true);
    } finally {
      setIsAdding(false);
    }
  };

  const deleteCartItem = async (productId: number) => {
    try {
      const userId = getUserInfoInLocalStorage()?.id;
      const sessionId = sessionStorage.getItem("sessionId");

      const formData: DeleteItemCartRequest = {
        productId: productId,
      };

      //Logica si es usuario logueado.
      if (userId) {
        await deleteProductToCart(userId, formData);
      //Logica si es usuario invitado (usuario no logueado)
      } else if (sessionId) {
        await deleteGuestProductToCart(sessionId, formData);
      }

      await fetchCartItems();
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to delete item cart");
    }
  };

  const updateItemToCart = async (productId: number, action: UpdateActions) => {
   
    try {

      const userId = getUserInfoInLocalStorage()?.id;
      const sessionId = sessionStorage.getItem("sessionId");
      
      //Logica si es usuario logueado.
      if (userId) {
        const items = await fetchCartItems();
        //Verifica si existe item, luego podemos obtener la cantidad.
        const existingItem = items?.find(
          (item: CartItem) => item.product.id === productId
        );

        //Si la accion que se le pasa a la funcion contiene ADD agrega +1 a la cantidad ya existente, sino -1.
        const newQuantity =
          (existingItem?.quantity || 0) +
          (action.actionType === "ADD" ? 1 : -1);

        if (newQuantity <= 0) {
          await deleteCartItem(productId);
        } else {
          const formData: AddToCartRequest = {
            productId: productId,
            quantity: newQuantity,
          };

          await updateProductInCart(userId, formData);
        }
      }

      //Logica si es usuario invitado (usuario no logueado)
      else if (sessionId) {
    
          const items = await fetchCartItems();
          const existingItem = items?.find(
            (item: CartItem) => item.product.id === productId
          );
  
          const newQuantity =
            (existingItem?.quantity || 0) +
            (action.actionType === "ADD" ? 1 : -1);
  
          if (newQuantity <= 0) {
            await deleteCartItem(productId);
          } else {
            const formData: AddToCartRequest = {
              productId: productId,
              quantity: newQuantity,
            };
  
            await updateProductInGuestCart(sessionId, formData);
          }
        
      }

      await fetchCartItems();
    } catch (err) {
      console.log(err);
      setError("Elemento ya existente");
    }
  };

  const closeCart = () => {

        setTotalAmount(0);
        setCartItems([]);
        removeOrderHook();
        setIsOpen(false);

      }

  useEffect(() => {
    fetchCartItems();
  }, [isOpen,totalAmount]);
  

  return (
    <CartContext.Provider
      value={{
        isOpen,
        toogleCart,
        addItemToCart,
        deleteCartItem,
        updateItemToCart,
        totalAmount,
        cartItems,
        isLoading,
        error,
        fetchCartItems,
        closeCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
