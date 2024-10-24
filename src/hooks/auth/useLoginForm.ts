// src/components/LoginForm/LoginForm.tsx
import { LoginData, LoginResponse } from "../../types/authTypes";
import { loginUser } from "../../services/authService";
import { useState, FocusEvent, useContext } from "react";
import {
  hasErrors,
} from "../../utils/validator/validations";
import { KeyValue } from "../../types/keyValue";
import { AuthUser, UserContext } from "../../context/UserContext";
import { fieldValidations } from "../../utils/validator/fieldValidations";
import { useCart } from "../../context/CartContext";
import { useAlert } from "../../context/AlertContext";


export const useLoginForm = () => {
  
  const userContext = useContext(UserContext);
  const {fetchCartItems} = useCart();
  const {createToast} = useAlert();


  const [formData, setFormData] = useState<LoginData>({
    username: "",
    password: "",
  });

  const [isLogged, setIsLogged] = useState(false);
  const [errors, setErrors] = useState<KeyValue>({});
  const [serverErrors, setServerErrors] = useState("");


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (hasErrors(errors)) {
      return console.log("Existen errores en el formulario");
    }

    try {
      const response: LoginResponse = await loginUser(formData);

      if (response.status == "200 OK") {
        setIsLogged(true);
        createToast({variant:"success",text: "Login Succesful"});
        fetchCartItems();
        const storedUser = localStorage.getItem("user");
        let user: AuthUser | null = null;

        if (storedUser) {
          try {
            user = JSON.parse(storedUser) as AuthUser;
          } catch (error) {
            console.error("Error parsing form localstorage", error);
          }
        }

        userContext.setUser(user);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setServerErrors(err.message);
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {

    const { name, value } = e.target;

    let errorMessage = "";

    if (value.trim() === "") {
      errors.username = errorMessage = "";
    } else {
      errorMessage = fieldValidations(name, value);
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  return { handleChange, handleSubmit, handleBlur, formData, isLogged, errors,serverErrors };
};
