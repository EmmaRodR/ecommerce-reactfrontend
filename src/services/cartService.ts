import { AddToCartRequest, DeleteItemCartRequest, UpdateToCartRequest } from "./../types/cartTypes";
import { CartResponse } from "../types/cartTypes";
import { authHeader } from "./authHeader";
import { handleResponseErrors } from "../utils/handler-errors/handleResponseErrors";
import { LOCAL_BASE_URL } from "../utils/api-consts";

export const fetchCart = async (userId: number): Promise<CartResponse> => {
  const url = new URL(`${LOCAL_BASE_URL}/api/v1/cart`);
  url.searchParams.append("userId", userId.toString());


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

export const addProductToCart = async (
  userId: number,
  addToCartRequest: AddToCartRequest
): Promise<CartResponse> => {
  try {
    const url = new URL(`${LOCAL_BASE_URL}/api/v1/cart`);
    url.searchParams.append("userId", userId.toString());

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

export const deleteProductToCart = async (
  userId: number,
  deleteItemCartRequest: DeleteItemCartRequest
): Promise<CartResponse> => {
  try {
    const url = new URL(`${LOCAL_BASE_URL}/api/v1/cart`);
    url.searchParams.append("userId", userId.toString());

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


export const updateProductInCart = async (
  userId: number,
  updateToCartRequest: UpdateToCartRequest
): Promise<CartResponse> => {
  try {
    const url = new URL(`${LOCAL_BASE_URL}/api/v1/cart`);
    url.searchParams.append("userId", userId.toString());

    const response = await fetch(url.toString(), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader(),

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

