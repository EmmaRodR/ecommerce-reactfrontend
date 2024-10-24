import { useContext, useState } from "react";
import { ShowTableContext } from "../../context/ShowTableContext";
import { Category, CategoryRequest } from "../../types/categoryType";
import { KeyValue } from "../../types/keyValue";
import {
  fetchCategoryById,
  updateCategory,
} from "../../services/categoryService";
import { hasErrors } from "../../utils/validator/validations";
import { BaseResponse } from "../../types/productType";
import { addProductFormValidations } from "../../utils/validator/fieldValidations";
import { useAlert } from "../../context/AlertContext";

export function useEditCategory() {
  const showTableContext = useContext(ShowTableContext);

  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState<KeyValue>({});
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<CategoryRequest>({
    name: "",
  });

  const {createToast} = useAlert();


  const handleFormUpdate = async () => {
    try {
      const id = showTableContext.itemId ? showTableContext.itemId : 0;

      const response: Category = await fetchCategoryById(id);

      if (response) {
        setFormData({
          name: response.name,
        });
      }
    } catch (err) {
      const typedError = err as Error;

      if (typedError.message === "Failed to fetch") {
        setServerError("Error en el servidor");
      }
    }
  };

  const resetForm = () => {
    setSuccess(false);
    setServerError("");
    setErrors({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (hasErrors(errors)) {
      return console.log("Hay errores");
    }

    try {
      const id = showTableContext.itemId ? showTableContext.itemId : 0;

      const response: BaseResponse = await updateCategory(id, formData);

      if (response.status == "OK") {
        console.log("UPDATED");
        setSuccess(true);
        createToast({variant:"success",text:"Category edited successfully"})
        setTimeout(() => resetForm(), 1500);
      }
    } catch (err) {
      const typedError = err as Error;
      setServerError(typedError.message);
      console.log(typedError.message);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let errorMessage = "";

    if (value.trim() === "") {
      errorMessage = "";
    } else {
      errorMessage = addProductFormValidations(name, value);
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  return {
    success,
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    serverError,
    setServerError,
    errors,
    setErrors,
    handleBlur,
    handleFormUpdate,
  };
}
