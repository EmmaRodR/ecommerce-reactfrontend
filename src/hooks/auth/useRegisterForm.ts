// src/components/RegisterForm/RegisterForm.tsx
import React, { FocusEvent, useState } from "react";
import { RegisterData } from "../../types/authTypes";
import { registerUser } from "../../services/authService";
import { KeyValue } from "../../types/keyValue";
import { hasErrors } from "../../utils/validator/validations";
import { fieldValidations } from "../../utils/validator/fieldValidations";
import { useAlert } from "../../context/AlertContext";

export const useRegisterForm = () => {
  const [formData, setFormData] = useState<RegisterData>({
    username: "",
    email: "",
    password: "",
    passwordVerify: "",
  });

  const [isRegistered, setIsRegistered] = useState(false);
  const [errors, setErrors] = useState<KeyValue>({});
  const [serverErrors, setServerErrors] = useState("");

  const {createToast} = useAlert();

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
      const response = await registerUser(formData);

      console.log(response);

      if (response.status == "201 CREATED") {
        setIsRegistered(true);
        createToast({variant:"success",text: "Register Succesful"});
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err.message)
      if (err.message === "Failed to fetch") {
        setServerErrors("Server error");
      } else {
        setServerErrors(err.message);
      }
      }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let errorMessage = "";

    if (value.trim() === "") {
      errorMessage = "";
    } else if (name === "passwordVerify" && value !== formData.password) {
      errorMessage = "Passwords dont match";
    } else {
      errorMessage = fieldValidations(name, value);
    }

    console.log(formData.password);
    console.log(formData.passwordVerify);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    handleBlur,
    isRegistered,
    errors,
    serverErrors,
  };
};
