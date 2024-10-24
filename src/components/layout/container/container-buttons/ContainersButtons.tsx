import React from 'react'

interface ContainersButtonsProps {
    type: 'Product' | 'Category'
    onAddElement: () => void;
    getBackToProductTable: () => void;

}


export const ContainersButtons: React.FC<ContainersButtonsProps> = ({onAddElement,getBackToProductTable,type}) => {

  return (
    <>
    <button onClick={onAddElement}>Add New {type}</button>
    <button onClick={getBackToProductTable}>Go Back</button>
    </>
)
}

export default ContainersButtons