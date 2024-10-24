export const hasErrors = (errors: { [key: string]: string }): boolean => {
  return Object.values(errors).some((value) => value.trim() !== "");
};

export const validateTextField = (value: string,name: string): string => {
  if (value.length < 3) {
    return `El ${name} debe contener al menos 3 caracteres`;
  }
  if (value.length > 30) {
    return `${name} no puede contener mas de 15 caracteres.`;
  }
  return "";
};

export const validatePassword = (value: string): string => {
  const pass: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const isValid = pass.test(value);

  if (!isValid) {
    return "La contraseña debe contener una letra mayuscula y un numero";
  }

  return "";
};

export const validateTwoPasswords = (
  firstValue: string,
  secondValue: string
): string => {
  const isValid = firstValue === secondValue;

  if (!isValid) {
    console.log(isValid);
    return "Las contraseñas no coinciden";
  }

  return "";
};

export const validateProductPrice = (price: string): string => {
  const priceNumber = parseFloat(price);

  if (priceNumber < 0 || priceNumber > 9999) {
    return "El valor del precio debe ser entre USD 0 y USD 10.000";
  }

  return "";
};
