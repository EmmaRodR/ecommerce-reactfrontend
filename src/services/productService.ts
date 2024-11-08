import {
  BaseResponse,
  Product,
  ProductRequest,
  ProductResponse,
} from "../types/productType";
import { LOCAL_BASE_URL, PRODUCTS_BASE_URL } from "./api-consts";
import { handleResponseErrors } from "../utils/handler-errors/handleResponseErrors";
import { authHeader } from "./authHeader";

const GETPRODUCTSURL = PRODUCTS_BASE_URL;

export const fetchProducts = async (
  page: number,
  size: number
): Promise<ProductResponse> => {
  const url = new URL(GETPRODUCTSURL);
  url.searchParams.append("pageNumber", page.toString());
  url.searchParams.append("pageSize", size.toString());

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: authHeader(),
    },
  });


  const data: ProductResponse = await response.json();
  return data;
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const url = new URL(`${LOCAL_BASE_URL}/api/v1/products/${id}`);

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: authHeader(),
    },
  });

  handleResponseErrors(await response);

  const data: Product = await response.json();
  return data;
};

export const addProduct = async (
  productRequest: ProductRequest
): Promise<BaseResponse> => {
  try {
    const url = new URL(GETPRODUCTSURL);

    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader(),
      },
      body: JSON.stringify(productRequest),
    });

    handleResponseErrors(await response);

    const responseData: BaseResponse = await response.json();
    return responseData;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const updateProduct = async (
  id: number,
  productRequest: ProductRequest
): Promise<BaseResponse> => {
  try {
    const url = new URL(`${LOCAL_BASE_URL}/api/v1/products/${id}`);

    const response = await fetch(url.toString(), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader(),
      },
      body: JSON.stringify(productRequest),
    });

    handleResponseErrors(await response);

    const responseData: BaseResponse = await response.json();
    return responseData;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const deleteProduct = async (id: number): Promise<void> => {
  try {
    const url = new URL(`${LOCAL_BASE_URL}/api/v1/products/${id}`);

    const response = await fetch(url.toString(), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader(),
      },
    });

    handleResponseErrors(await response);

  } catch (err) {
    console.log("Error to delete a product:",err);
    throw err;
  }
};
