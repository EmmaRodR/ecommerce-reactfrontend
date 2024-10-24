import { AuthUser } from "../context/UserContext";

export function getUserInfoInLocalStorage () {

        const userStr = localStorage.getItem("user");
        let user: AuthUser | null = null;
      
        if (userStr) {
          try {
            user = JSON.parse(userStr) as AuthUser;
          } catch (error) {
            console.error("Error parsing user from localStorage", error);
          }
        } 

        return user
    }
