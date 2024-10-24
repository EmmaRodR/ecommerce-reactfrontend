import { AddToCartRequest, CartResponse, DeleteItemCartRequest, UpdateToCartRequest } from "../types/cartTypes";
import { LOCAL_BASE_URL } from "../utils/api-consts";
import { handleResponseErrors } from "../utils/handler-errors/handleResponseErrors";
import { authHeader } from "./authHeader";

export const fetchgGuestCart = async (sessionId: string): Promise<CartResponse> => {
    const url = new URL(`${LOCAL_BASE_URL}/api/v1/cart`);
    url.searchParams.append("sessionId", sessionId.toString());
  
  
    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader(),
      },
    });
    const data: CartResponse = await response.json();
    console.log(data);
    return data;
  };

  export const addProductToGuestCart = async (
    sessionId: string,
    addToCartRequest: AddToCartRequest
  ): Promise<CartResponse> => {
    try {
      const url = new URL(`${LOCAL_BASE_URL}/api/v1/cart`);
      url.searchParams.append("sessionId", sessionId.toString());
  
      const response = await fetch(url.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addToCartRequest),
      });
  
      await handleResponseErrors(response);
  
      const responseData: CartResponse = await response.json();
      return responseData;
      
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  export const deleteGuestProductToCart = async (
    sessionId: string,
    deleteItemCartRequest: DeleteItemCartRequest
  ): Promise<CartResponse> => {
  
    try {
      const url = new URL(`${LOCAL_BASE_URL}/api/v1/cart`);
      url.searchParams.append("sessionId", sessionId);
  
      const response = await fetch(url.toString(), {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader(),
        },
        body: JSON.stringify(deleteItemCartRequest),
      });
  
      handleResponseErrors(await response);
  
      const responseData: CartResponse = await response.json();
      return responseData;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  export const updateProductInGuestCart = async (
    sessionId: string,
    updateToCartRequest: UpdateToCartRequest
  ): Promise<CartResponse> => {
    try {
      const url = new URL(`${LOCAL_BASE_URL}/api/v1/cart`);
      url.searchParams.append("sessionId", sessionId);
  
      const response = await fetch(url.toString(), {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateToCartRequest),
      });
  
      await handleResponseErrors(response);
  
      const responseData: CartResponse = await response.json();
      return responseData;
      
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  export const mergeGuestCartToUser = async (
    sessionId: string,
    userId: number
  ): Promise<CartResponse> => {
    try {
      const url = new URL(
        `${LOCAL_BASE_URL}/api/v1/cart/merge/${userId}/${sessionId}`
      );

      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      await handleResponseErrors(response);

      const responseData: CartResponse = await response.json();
      return responseData;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
