import { useState } from "react";
import { useAuth } from "../../context/UserContext";
import {
  createOrder,
  deleteOrder,
  fetchOrders,
} from "../../services/orderService";
import { OrderResponse } from "../../types/orderTypes";
import { useAlert } from "../../context/AlertContext";

export function useOrder() {

  const { user } = useAuth();
  const {createToast} = useAlert();

  const [data, setData] = useState<OrderResponse | null>(null);


  const createOrderHook = async () => {
    try {
      if (user) {
        const response = await createOrder(user.id);
        return response;
      }
    } catch (err) {
      console.log(err);
      createToast({variant:"danger", text: "Already exists a order waiting"})
      throw err;
    }
  };

  const getOrderHook = async () => {
    try {
      if (user) {
        const response = await fetchOrders(user?.id);
        const orderData = response;
        setData(orderData);
      }
    } catch (error: unknown) {
      console.log(error);
      setData(null);
      throw error;
    }
  };

  const removeOrderHook = async () => {
    try {
      if (user) {
        const response = await deleteOrder(user.id);
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }

  };


  return { createOrderHook, getOrderHook, removeOrderHook,data, user, };

}

