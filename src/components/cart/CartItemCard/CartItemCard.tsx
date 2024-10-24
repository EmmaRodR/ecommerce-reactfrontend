import React from 'react'
import { CartItem } from '../../../types/cartTypes'
import { PiTrashSimple } from "react-icons/pi";
import './CartItemCard.css'
import { UpdateActions } from '../../../context/CartContext';


interface CartItemCardProps {
    cartItems: CartItem[];
    deleteItem: (id: number) => void;
    updateItem: (productId: number,action: UpdateActions) => Promise<void>;

}

const CartItemCard: React.FC<CartItemCardProps> = ({cartItems,deleteItem,updateItem}) => {
  return cartItems.map((item) => (
    <div  key={item.product.id} className="cart-item-card">
      <li>
        <p>{item.product.name}</p>
        <div className="counter">
          <button onClick={() => updateItem(item.product.id,{actionType: 'REMOVE'})}>-</button>
          <p>{item.quantity}</p>
          <button onClick={() => updateItem(item.product.id,{actionType: 'ADD'})}>+</button>
        </div>
      </li>
      <div onClick={() => deleteItem(item.product.id)} className="delete-container">
      <PiTrashSimple size={15} />
        <span>${item.totalAmount ? item.totalAmount : 0}</span>
    </div>
    </div>
 
  ));
}

export default CartItemCard