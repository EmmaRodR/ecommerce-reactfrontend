import { useCategorySelector } from "../../../../hooks/useCategorySelector";
import { useEditProducts } from "../../../../hooks/product/useEditProduct";
import { ErrorMessage } from "../../../common/errors/ErrorMessage";
import FormInput from "../../../common/inputs/FormInput";
import { useEffect } from "react";
import SelectInput from "../../../common/inputs/SelectInput";
import RedirectionAlert from "../../../common/alerts/RedirectionAlert";

const EditProductForm = () => {
  const {
    success,
    formData,
    handleChange,
    handleSubmit,
    handleBlur,
    handleFormUpdate,
    serverError,
    errors,
  } = useEditProducts();

  const { selectedOption, handleCategoryChange } = useCategorySelector();

  useEffect(() => {
    handleFormUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (success) {
    return (
      <RedirectionAlert
        actionType="editProduct"
        children
      />
    );
  }

  return (
    <div className="form-container">
      {serverError && <ErrorMessage message={serverError} />}
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit} action="">
        <FormInput
          id="22"
          name="name"
          label="Name"
          value={formData.name}
          type="text"
          required={true}
          placeholder=""
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && <ErrorMessage message={errors.name} />}

        <FormInput
          id="343"
          name="price"
          label="Price"
          value={formData.price}
          type="number"
          required={true}
          placeholder=""
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.price && <ErrorMessage message={errors.price} />}

        <SelectInput
          value={(formData.categoryName = selectedOption)}
          onChange={handleCategoryChange} label={undefined} className={undefined}        />

        <button type="submit">Edit Product</button>
      </form>
    </div>
  );
};

export default EditProductForm;
