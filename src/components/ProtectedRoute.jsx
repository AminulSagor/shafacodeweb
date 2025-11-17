import { Navigate } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAdminAuth();

  return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
}
