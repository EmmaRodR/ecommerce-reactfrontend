import { useState } from "react";
import { KeyValue } from "../../types/keyValue";
import { BaseResponse, ProductRequest } from "../../types/productType";
import { hasErrors } from "../../utils/validator/validations";
import { addProduct } from "../../services/productService";
import { addProductFormValidations } from "../../utils/validator/fieldValidations";
import { useAlert } from "../../context/AlertContext";

export function useAddProducts() {
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState<KeyValue>({});
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<ProductRequest>({
    name: "",
    price: 0,
    categoryName: "",
  });

  const {createToast} = useAlert();


  const resetForm = () => {
    setFormData({
      name: "",
      price: 0,
      categoryName: "",
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
      const response: BaseResponse = await addProduct(formData);

      console.log(response.status);
      console.log(formData);

      if (response.status == "CREATED") {
        setSuccess(true);
        createToast({variant:"success",text:"Product added successfully"})
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
