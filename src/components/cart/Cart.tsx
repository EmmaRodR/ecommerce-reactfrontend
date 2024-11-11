import "./Cart.css";
import { useCart } from "../../context/CartContext";
import CartItemCard from "./CartItemCard/CartItemCard";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/UserContext";
import { useOrder } from "../../hooks/order/useOrder";
import CartHeader from "./CartHeader/CartHeader";
import CartTotal from "./CartTotal/CartTotal";
import CartPurcharseBtn from "./CartPurchaseBtn/CartPurcharseBtn";

const Cart = () => {
  const {
    isOpen,
    toogleCart,
    cartItems,
    deleteCartItem,
    updateItemToCart,
    totalAmount,
  } = useCart();

  const { createOrderHook } = useOrder();

  const { user } = useAuth();

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (user) {
      createOrderHook();
      navigate("/order");
      toogleCart();
    } else {
      navigate("/orderauth");
      toogleCart();

    }
  };

  const cartLength = () => {
    if (cartItems && cartItems.length > 0) {
      return cartItems.length;
    } else {
      return 0;
    }
  };

  return (
    <div className={`shopping-cart ${isOpen ? "open" : ""}`}>
      <CartHeader toogleCart={toogleCart} />

      <ul className="cart-ul-list">
        <div className="cart-items-container">
          {cartLength() > 0 ? (
            <CartItemCard
              cartItems={cartItems}
              deleteItem={deleteCartItem}
              updateItem={updateItemToCart}
            />
          ) : (
            <span>No products added.</span>
          )}
        </div>
      </ul>
        
      <CartTotal totalAmount={totalAmount} />
      <CartPurcharseBtn
        onClick={handleCheckout}
        isDisabled={cartLength() >= 0}
      />
    </div>
  );
};

export default Cart;
