import React from "react";

interface CartPurchaseBtn {
  onClick: () => void;
  isDisabled: boolean;
}

const CartPurcharseBtn: React.FC<CartPurchaseBtn> = ({
  onClick,
  isDisabled,
}) => {
  return (
    <button className={isDisabled ? "disabled" : ""} onClick={onClick}>
      Checkout
    </button>
  );
};

export default CartPurcharseBtn;
