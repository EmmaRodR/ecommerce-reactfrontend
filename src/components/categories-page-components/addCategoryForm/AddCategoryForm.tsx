import { useAddCategory } from "../../../hooks/category/useAddCategory";
import SuccesfulAlert from "../../common/alerts/RedirectionAlert";
import { ErrorMessage } from "../../common/errors/ErrorMessage";
import FormInput from "../../common/inputs/FormInput";

const AddCategoryForm = () => {

  const {formData,success,serverError,errors,handleBlur,handleChange,handleSubmit} = useAddCategory();

  
    if (success) {
      return <SuccesfulAlert actionType="addCategory" children/>;
    }

  return (

    <div className="form-container">
      {serverError && <ErrorMessage message={serverError}/>}
      <h2>Add Category</h2>
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


       <button type="submit">Add Category</button>
      </form>
    </div>
  );
}

export default AddCategoryForm