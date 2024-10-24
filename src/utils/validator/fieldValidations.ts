import {
  validatePassword,
  validateProductPrice,
  validateTextField,
} from "./validations";

export const fieldValidations = (name: string, value: string) => {
  switch (name) {
    case "username":
      return validateTextField(value,name);
    case "password":
      return validatePassword(value);
    default:
      return "";
  }
};

export const addProductFormValidations = (name: string, value: string) => {
  switch (name) {
    case "name":
      return validateTextField(value,name);
    case "price":
      return validateProductPrice(value);
    default:
      return "";
  }
};
