import { useEffect } from "react";
import Container from "../../components/layout/container/Container";
import { getUserInfoInLocalStorage } from "../../utils/getLocalStorage";
import { mergeGuestCartToUser } from "../../services/guestCartService";

const Products: React.FC = () => {


  const initializeGuestSession = () => {
    let sessionId = sessionStorage.getItem("sessionId");
    const userId = localStorage.getItem("user");

      if (!userId && !sessionId) {
        sessionId = generateSessionId(); // Esta función genera un ID único
        sessionStorage.setItem("sessionId", sessionId);
      }

  };

  const generateSessionId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  useEffect(() => {
    initializeGuestSession();
  }, []);

  useEffect(() => {
    try {
      const userId = getUserInfoInLocalStorage()?.id;
      const sessionId = sessionStorage.getItem("sessionId");

      if (userId && sessionId) {
        mergeGuestCartToUser(sessionId, userId);
        sessionStorage.removeItem("sessionId");
        console.log("Entro");
      }
    } catch (err) {
      console.log(err);
      console.log("No entro");
    }
  }, []);

  return (
    <div className="container-page">
      <Container />
    </div>
  );
};

export default Products;
