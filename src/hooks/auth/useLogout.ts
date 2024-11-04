import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useCart } from "../../context/CartContext";

export function useLogout() {
  
  const userContext = useContext(UserContext);
  const {closeCart} = useCart();

  const navigate = useNavigate(); 

  const logout = () => {

    if (userContext.user != null) {
      closeCart();
      localStorage.removeItem("user");
      userContext.setUser(null);
      console.log("Cerrando1")
      
    } else {
      navigate("/home", {replace:true});
      localStorage.removeItem("user");
      userContext.setUser(null);
      console.log("Cerrando2")

    }
  };

  return { logout,userContext };
}
