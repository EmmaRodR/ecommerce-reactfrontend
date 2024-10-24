import { CategoryResponse } from "./categoryType";

export interface Product {
    type: 'product';
    id: number;
    name: string;
    price: number;
    categoryName: string;
    imgUrl: string | null;
}

export interface ProductResponse {
    pageNumber: number;
    pageSize: number;
    numberOfElements: number;
    content: Product[];
  }

  export interface ProductRequest {
    name: string,
    price: number,
    categoryName: string,
  }

  export interface BaseResponse {
    timestamp: string,
    status: string,
    data: ProductResponse | CategoryResponse
  }
