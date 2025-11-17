import { createContext, useContext, useState } from "react";

const AdminAuthContext = createContext();

export function AdminAuthProvider({ children }) {
  // Load auth from localStorage on startup
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("admin_auth") === "true",
  );

  const login = (phone, password) => {
    const envPhone = process.env.REACT_APP_ADMIN_PHONE;
    const envPass = process.env.REACT_APP_ADMIN_PASSWORD;

    if (phone === envPhone && password === envPass) {
      setIsAuthenticated(true);
      localStorage.setItem("admin_auth", "true"); // 🔥 save login state
      return true;
    }

    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("admin_auth");
  };

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  return useContext(AdminAuthContext);
}
