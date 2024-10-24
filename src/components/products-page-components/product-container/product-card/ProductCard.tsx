import './ProductCard.css'
import { Product } from '../../../../types/productType';
import { useCart } from '../../../../context/CartContext';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({product}) => {

 const {id,name,categoryName,price,imgUrl} = product;

 const {addItemToCart} = useCart();
 
  
  return (
    <div key={id} className="card">
        <div className="image-container">
        <img src={imgUrl ? imgUrl : ""} alt={name} className="image" />
        </div>
        <div className="content">
            <h3 className="title">{name}</h3>
            <p className="category">{categoryName}</p>
            <p className="price">${price.toFixed(2)}</p>
        </div>
        <button onClick={() => addItemToCart(product.id)} className='add-button'>Add To Cart</button>
    </div>

  )
}

export default ProductCard