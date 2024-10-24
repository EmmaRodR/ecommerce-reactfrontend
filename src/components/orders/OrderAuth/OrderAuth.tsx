import "./OrderAuth.css";
import { useNavigate } from "react-router-dom";

const OrderAuth = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="main-orderauth">
      <div className="login-title">
        <span>Already have an account?</span>
        <button onClick={() => handleNavigate("/login")}>Login</button>
      </div>
      <div className="register-title">
        <span>Don't have an account? Register!</span>
        <button onClick={() => handleNavigate("/register")}>Register</button>
      </div>
    </div>
  );
};

export default OrderAuth;
