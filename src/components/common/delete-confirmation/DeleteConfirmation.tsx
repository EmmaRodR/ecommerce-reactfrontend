import React, { useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";


interface DeleteConfirmationProps {
    itemName: string;
    onDelete: () => void;
}


const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({itemName,onDelete}) => {

    const [isOpen,setIsOpen] = useState(false);
    
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleConfirmDelete = () => {
        onDelete();
        setIsOpen(false);
    }


  return (
    <div>
        <button className='delete-button' onClick={handleOpen}><MdDeleteOutline></MdDeleteOutline></button>

        {isOpen && (
              <div className="popup">
              <div className="popup-content">
                <h3>Are you sure you want to delete {itemName}?</h3>
                <div className="buttons-container">
                <button className='confirm-delete-button' onClick={handleConfirmDelete}>Yes, Delete</button>
                <button className='cancel-delete-button' onClick={handleClose}>Cancel</button>
                </div>
              </div>
            </div>
        )}
    </div>
  )
}

export default DeleteConfirmation