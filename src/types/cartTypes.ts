
export interface CartResponse {
    userName: string;
    items: CartItem[];
    totalAmount: number;
  }

export interface AddToCartRequest {
  productId: number;
  quantity: number;
}

export interface UpdateToCartRequest {
  productId: number;
  quantity: number;
}

export interface DeleteItemCartRequest {
  productId: number;
}

export interface CartItem {
  product: {
    id: number;
    name: string;
    imgUrl: string | null;
  };
  quantity: number;
  totalAmount: number;
}
