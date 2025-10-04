import type React from "react";
import useAuthStore from "../store/authStore";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default ProtectedRoute;
