import FormInput from '../../../common/inputs/FormInput'
import SuccesfulAlert from '../../../common/alerts/RedirectionAlert'
import { useAddProducts } from '../../../../hooks/product/useAddProduct'
import { ErrorMessage } from '../../../common/errors/ErrorMessage'
import SelectInput from '../../../common/inputs/SelectInput'
import { useCategorySelector } from '../../../../hooks/useCategorySelector'

const AddProductForm = () => {

    const {success,formData,handleChange,handleSubmit,handleBlur,serverError,errors} = useAddProducts();
    const {selectedOption,handleCategoryChange} = useCategorySelector();

    if (success) {
      return <SuccesfulAlert actionType="addProduct" children/>;
    }

  return (

    <div className="form-container">
      {serverError && <ErrorMessage message={serverError}/>}
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} action="">
        <FormInput
            id='22'
            name='name'
            label='Name'
            value={formData.name}
            type='text'
            required={true}
            placeholder=""
            onChange={handleChange}
            onBlur={handleBlur}
        />
        {errors.name && <ErrorMessage message={errors.name}/>}

            <FormInput
            id='343'
            name='price'
            label='Price'
            value={formData.price}
            type='number'
            required={true}
            placeholder=""
            onChange={handleChange}
            onBlur={handleBlur}
           
        />
        {errors.price && <ErrorMessage message={errors.price}/>}

           <SelectInput label='Category' value={formData.categoryName=selectedOption} onChange={handleCategoryChange}/>

       <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductForm