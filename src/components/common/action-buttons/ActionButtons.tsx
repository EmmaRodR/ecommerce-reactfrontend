import React from 'react'
import { FaRegEdit } from 'react-icons/fa';
import DeleteConfirmation from '../delete-confirmation/DeleteConfirmation';
import { Product } from '../../../types/productType';
import { Category  } from '../../../types/categoryType';
import ProductViewModal from '../../products-page-components/view-product-modal/ProductViewModal';

interface ActionButtonsProps {
    data:  Product | Category;
    handleDelete: () => void;
    handleEdit: () => void;
}

const isProduct = (data: Product | Category): data is Product => {
  return (data as Product).price !== undefined;
};


const ActionButtons: React.FC<ActionButtonsProps> = ({data,handleDelete,handleEdit}) => {

  return (
    <>
      <div>
        {isProduct(data) ? (
          <ProductViewModal data={data} />
        ) : (
          <></>
        )}
      </div>
      <div>
        <button onClick={handleEdit} className="edit-button">
          <FaRegEdit />
        </button>
      </div>
      <div>
        <DeleteConfirmation itemName={data.name} onDelete={handleDelete} />
      </div>
    </>
  );
};

export default ActionButtons