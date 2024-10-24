import { useContext, useState } from "react";
import { ShowTableContext } from "../../context/ShowTableContext";
import { KeyValue } from "../../types/keyValue";
import { BaseResponse, Product, ProductRequest } from "../../types/productType";
import { fetchProductById, updateProduct } from "../../services/productService";
import { hasErrors } from "../../utils/validator/validations";
import { addProductFormValidations } from "../../utils/validator/fieldValidations";
import { useAlert } from "../../context/AlertContext";

export function useEditProducts() {
  const showTableContext = useContext(ShowTableContext);

  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState<KeyValue>({});
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<ProductRequest>({
    name: "",
    price: 0,
    categoryName: "",
  });

  const {createToast} = useAlert();



  const handleFormUpdate = async () => {
    try {
      const id = showTableContext.itemId ? showTableContext.itemId : 0;

      const response: Product = await fetchProductById(id);

      if (response) {
        setFormData({
          name: response.name,
          price: response.price,
          categoryName: response.categoryName,
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

      const response: BaseResponse = await updateProduct(id, formData);

      if (response.status == "OK") {
        console.log("UPDATED")
        setSuccess(true);
        createToast({variant:"success",text:"Product edited successfully"})
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
    handleFormUpdate
  };
}
