import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { user, isAuth } = useAuth();

  if (!isAuth) return <Navigate to="/login" />;

  return <Outlet />;
};
