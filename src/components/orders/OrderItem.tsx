import React from 'react'
import { ProductOrderInfo } from '../../types/orderTypes'
import './OrderItem.css'


interface OrderItemProps {
    data: ProductOrderInfo[]
}

const OrderItem: React.FC<OrderItemProps> = ({ data }) => {

  if (!data || data.length === 0) {
    // Manejo del caso donde no hay datos
    return <span>No items available</span>;
  }

  return data ? (

    data.map((item) => (
      <ul key={item.productName} className="order-item">
        <li>
          <div className="order-itemquantity">
            <p>{item.productName}</p>
            <span>Quantity: {item.quantity}</span>
          </div>
          <p>$ {item.totalAmount}</p>
        </li>
      </ul>
    ))
  ) : (
    <div></div>
  );
};

export default OrderItem