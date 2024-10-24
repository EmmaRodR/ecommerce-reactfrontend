import { useEffect } from "react";
import SuccesfulAlert from "../../common/alerts/RedirectionAlert";
import FormInput from "../../common/inputs/FormInput";
import { useEditCategory } from "../../../hooks/category/useEditCategory";
import { ErrorMessage } from "../../common/errors/ErrorMessage";

const EditCategoryForm = () => {
  const {
    formData,
    success,
    serverError,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    handleFormUpdate,
  } = useEditCategory();

  useEffect(() => {
    handleFormUpdate();
  }, []);

  if (success) {
    return (
      <SuccesfulAlert
        actionType="editCategory"
        children
      />
    );
  }

  return (
    <div className="form-container">
      {serverError && <ErrorMessage message={serverError} />}
      <h2>Edit Category</h2>
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

        <button type="submit">Edit Category</button>
      </form>
    </div>
  );
};

export default EditCategoryForm;
