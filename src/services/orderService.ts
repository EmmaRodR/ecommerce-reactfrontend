import { OrderResponse } from "../types/orderTypes";
import { LOCAL_BASE_URL } from "../utils/api-consts";


export const fetchOrders = async (userId: number): Promise<OrderResponse> => {
  try {
    const url = new URL(`${LOCAL_BASE_URL}/api/v1/orders/${userId}`);
    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: OrderResponse = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const createOrder = async (userId: number): Promise<OrderResponse> => {
  try {
    const url = new URL(`${LOCAL_BASE_URL}/api/v1/orders/${userId}`);

    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (response.status === 409) {
        throw new Error("Conflict: The resource already exists");
      }
      throw new Error(`HTTP Error: ${response.status}`);
    } 

    const data = response.json();
    return data;
      
  } catch (err) {
      console.error(err);
      throw err;
    }
};

export const deleteOrder = async (userId: number): Promise<void> => {
  try {
    const url = new URL(`${LOCAL_BASE_URL}/api/v1/orders/${userId}`);

    const response = await fetch(url.toString(), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

