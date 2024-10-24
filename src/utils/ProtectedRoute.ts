import { useEffect } from "react";
import { useAuth } from "../context/UserContext";
import { isTokenExpired } from "./jwt/tokenExpiration";
import { useLogout } from "../hooks/auth/useLogout";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = {
    children: React.ReactNode
    isAdmin: boolean
}


export default function ProtectedRouter({
  children,
  isAdmin,
}: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const { handleLogout } = useLogout();
  const navigate = useNavigate();

  useEffect(() => {

    if (!loading) {
      if (isAdmin && user?.role !== "ADMIN") {
        return navigate("/unauthorized", { replace: true });
      }

      if (user) {
        if (isTokenExpired(user?.jwt)) {
          navigate("/login", { replace: true });
          handleLogout();
        }
      }
    }
  }, [navigate, user, handleLogout, isAdmin,loading]);

  return children;
}