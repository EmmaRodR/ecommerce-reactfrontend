export const hasErrors = (errors: { [key: string]: string }): boolean => {
  return Object.values(errors).some((value) => value.trim() !== "");
};

export const validateTextField = (value: string,name: string): string => {
  if (value.length < 3) {
    return `${name} must contain at least 3 characters`;
  }
  if (value.length > 30) {
    return `${name} cannot contain more than 15 characters.`;
  }
  return "";
};

export const validatePassword = (value: string): string => {
  const pass: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const isValid = pass.test(value);

  if (!isValid) {
    return "The password must contain and uppercase and a number";
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
    return "Passwords dont match";
  }

  return "";
};

export const validateProductPrice = (price: string): string => {
  const priceNumber = parseFloat(price);

  if (priceNumber < 0 || priceNumber > 9999) {
    return "The price must be between USD 0 and USD 10.000";
  }

  return "";
};
