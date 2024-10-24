import { ApiError, LoginResponse, RegisterResponse } from "./../types/authTypes";
import { LoginData, RegisterData } from "../types/authTypes";
import { LOGIN_ENDPOINT_URL, REGISTER_ENDPOINT_URL } from "../utils/api-consts";
import { authHeader } from "./authHeader";


export const registerUser = async (data: RegisterData): Promise<RegisterResponse> => {
  try {
    const response = await fetch(REGISTER_ENDPOINT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader(),
      },
      body: JSON.stringify(data),
    });

    console.log(response);

    if (!response.ok) {
      const apiError: ApiError = await response.json();
      const status = apiError.statusCode;

      console.log(apiError);
      console.log(status);

      if (status === "CONFLICT") {
        throw new Error("Usuario ya existe");
      } else {
        throw new Error("Error en el servidor");
      }
    }

    const responseData = await response.json();
    return responseData;

  } catch (err) {
    console.error(err);
    throw err;
  }

};
      

export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  try {
    const response = await fetch(LOGIN_ENDPOINT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader(),
      },
      body: JSON.stringify(data),
    });


    if (!response.ok) {
      const apiError: ApiError = await response.json();
      const status = apiError.statusCode;

      if (status === "NOT_FOUND") {
        throw new Error("Usuario no encontrado");
      }  
      if (apiError.msg === "Bad credentials") {
          throw new Error("Credenciales Incorrectas");
      }  else {
        throw new Error("Error en el servidor");
      }
    }

    const responseData = await response.json();

    if (responseData?.jwt) {
      const user = responseData;
      localStorage.setItem("user", JSON.stringify(user));
    }

    return responseData;

  } catch (err) {
    console.error(err);
    throw err;
  }
};

