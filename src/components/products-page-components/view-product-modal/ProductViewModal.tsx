import { useState } from 'react';
import './ProductViewModal.css';  // Podrías agregar un estilo básico en un archivo CSS
import { Product } from '../../../types/productType';
import { IoIosSearch } from "react-icons/io";


interface ProductViewModalProps {
  data: Product;
}

const ProductViewModal: React.FC<ProductViewModalProps> = ({data}) => {

  const [isOpen,setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

    return (
      <div>
        <button className='view-button' onClick={handleOpen}><IoIosSearch/></button>
        {isOpen && (
              <div className="modal-overlay">
              <div className="modal-content">
                  <header className='close-btn-container'>
                  <a onClick={handleClose}>X</a>
                  </header>
                  <section className='info-section'>
                  <h3>{data.name}</h3>
                  <p><span>ID: </span>{data.id}</p>
                  <p><span>CATEGORY: </span> {data.categoryName}</p>
                  <p><span>PRICE: </span> $ {data.price}</p>
                  </section>
                  <div className='container'>
                  <div className='container-img'>
                    <img className='view-img' src={data.imgUrl ? data.imgUrl : ""} alt="" />
                  </div>
                  </div>
              </div>
            </div>            
        )}
    </div>
    )
  }
  
  export default ProductViewModal;

  