import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import "./CartButton.css";
import { useTheme } from "../../../../../../../context/ThemeContext";
import { useCart } from "../../../../../../../context/CartContext";

const CartButton = () => {

  const { theme } = useTheme();
  const {cartItems, toogleCart } = useCart();

  return (
    <div className="cart-btn" onClick={toogleCart}>
      {theme === "dark" ? (
        <PiShoppingCartSimpleFill size={20} />
      ) : (
        <PiShoppingCartSimpleLight size={20} />
      )}
      
      {cartItems ? <span className="cart-count">{cartItems.length}</span> : 0}

    </div>
  );
};

export default CartButton;
