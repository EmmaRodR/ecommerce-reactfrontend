import { AuthUser } from "../context/UserContext";
import { isTokenExpired } from "../utils/jwt/tokenExpiration";

export function authHeader() {
  const userStr = localStorage.getItem("user");
  let user: AuthUser | null = null;

  if (userStr) {
    try {
      user = JSON.parse(userStr) as AuthUser;
    } catch (error) {
      console.error("Error parsing user from localStorage", error);
    }
  }

  if (user?.jwt) {
    console.log("Se realizo peticion y se utilizo authHeader");

    if (isTokenExpired(user.jwt)) {
      return "Expiro el token";
    } else {
      return `Bearer ${user.jwt}`;
    }
  } else {
    return "Fallo el header de authorizacion";
  }
}
