import { useNavigate } from "react-router-dom";
import { useOrder } from "../../hooks/order/useOrder";
import { useEffect } from "react";
import OrderItem from "../../components/orders/OrderItem";
import './Order.css'
import { useAlert } from "../../context/AlertContext";

const Order = () => {

  const { data,removeOrderHook,getOrderHook } = useOrder();

  const navigate = useNavigate();
  const {createToast} = useAlert();

  useEffect(() => {

    getOrderHook();  
  
  }, [data?.totalAmount]);

  const handleRemoveOrder = () => {
    removeOrderHook();
    getOrderHook();  
    navigate("/products");
  };


  const handleCheckoutOrder = () => {
    createToast({variant:"warning",text:"Feature in Progress!"})
  }

  return (
    <div className="main-order">
      <h2>Order Details ID: #{data?.id}</h2>
      <span>Items ({data?.products.length})</span>
      <div className="orderitem-list">
        <OrderItem data={data?.products && data.products.length > 0 ? data.products : []} />
      </div>
      <div className="footer-order">
        <h2>Order Total Amount: ${data?.totalAmount}</h2>
        <div className="order-buttons">
          <button onClick={handleRemoveOrder}>Cancel Order</button>
          <button onClick={handleCheckoutOrder}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
