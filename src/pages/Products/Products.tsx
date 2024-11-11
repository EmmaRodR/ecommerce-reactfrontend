import { useEffect } from "react";
import Container from "../../components/layout/container/Container";
import { getUserInfoInLocalStorage } from "../../utils/getLocalStorage";
import { mergeGuestCartToUser } from "../../services/guestCartService";
import { initializeGuestSession } from "../../utils/InitializeGuestSession";

const Products: React.FC = () => {

  useEffect(() => {
    const initializeAndMergeCart = async () => {
      try {
        await initializeGuestSession();
  
        const userId = getUserInfoInLocalStorage()?.id;
        const sessionId = sessionStorage.getItem("sessionId");
  
        if (userId && sessionId) {
          await mergeGuestCartToUser(sessionId, userId);
          sessionStorage.removeItem("sessionId");
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    initializeAndMergeCart();
  }, []);

  return (
    <div className="container-page">
      <Container />
    </div>
  );
};

export default Products;
