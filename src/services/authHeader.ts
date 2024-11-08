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

    if (isTokenExpired(user.jwt)) {
      return "Token is expired";
    } else {
      return `Bearer ${user.jwt}`;
    }
  } else {
    return "The authheader fails";
  }
}
