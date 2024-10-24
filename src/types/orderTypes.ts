

export interface OrderResponse {
    id: number,
    userName: string,
    products: ProductOrderInfo[],
    totalAmount: string,
    status: string,
}

export interface ProductOrderInfo {
    productName: string,
    quantity: number,
    totalAmount: number
}