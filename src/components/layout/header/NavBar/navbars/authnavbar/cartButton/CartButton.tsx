import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import "./CartButton.css";
import { useCart } from "../../../../../../../context/CartContext";
import { useTheme } from "../../../../../../../context/ThemeContext";

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
      
      {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}

    </div>
  );
};

export default CartButton;
