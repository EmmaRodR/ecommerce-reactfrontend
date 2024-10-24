import React from "react";

interface CartHeaderProps {
  toogleCart: () => void;
}

const CartHeader: React.FC<CartHeaderProps> = ({ toogleCart }) => {
  return (
    <div className="cart-header">
      <h2>My Cart</h2>
      <a onClick={toogleCart}>
        <span>X</span>
      </a>
    </div>
  );
};

export default CartHeader;
