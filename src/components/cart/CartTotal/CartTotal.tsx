
interface CartTotalProps {
    totalAmount: number
}

const CartTotal: React.FC<CartTotalProps> = ({totalAmount}) => {
  return (
    <div className="totalamount-container">
    <h3>Total: </h3>
    <span>${totalAmount ? totalAmount : 0}</span>
  </div>  )
}

export default CartTotal