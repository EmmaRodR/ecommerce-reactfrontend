import { useState } from "react";
import { BaseResponse } from "../../types/productType";
import { KeyValue } from "../../types/keyValue";
import { addProductFormValidations } from "../../utils/validator/fieldValidations";
import { hasErrors } from "../../utils/validator/validations";
import { CategoryRequest } from "../../types/categoryType";
import { createCategory } from "../../services/categoryService";
import { useAlert } from "../../context/AlertContext";

export function useAddCategory() {
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState<KeyValue>({});
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<CategoryRequest>({
    name: "",
  });

  const {createToast} = useAlert();


  const resetForm = () => {
    setFormData({
      name: "",
    });
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
      const response: BaseResponse = await createCategory(formData);

      console.log(response.status);

      if (response.status === "CREATED") {
        setSuccess(true);
        createToast({variant:"success",text:"Category added successfully"})
        setTimeout(() => resetForm(), 1500);
      }
    } catch (err) {
      const typedError = err as Error;

      if (typedError.message === "Failed to fetch") {
        setServerError("Error en el servidor");
      }
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
    handleChange,
    handleSubmit,
    handleBlur,
    serverError,
    setServerError,
    errors,
    setErrors,
  };
}
