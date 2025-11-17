// src/pages/admin/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../../context/AdminAuthContext";
import "./AdminLogin.css";

export default function AdminLogin() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAdminAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ok = login(phone, password);
    if (ok) {
      navigate("/admin/dashboard");
    } else {
      alert("Invalid phone or password");
    }
  };

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <div className="admin-auth-page">
      <div className="admin-auth-card">
        <div className="admin-auth-brand">
          <div className="admin-auth-logo">SC</div>
          <div>
            <h1 className="admin-auth-title">ShafaCode Admin</h1>
            <p className="admin-auth-subtitle">
              Sign in to manage your website content.
            </p>
          </div>
        </div>

        <form className="admin-auth-form" onSubmit={handleSubmit}>
          <div className="admin-form-group">
            <label htmlFor="phone" className="admin-form-label">
              Phone
            </label>
            <input
              id="phone"
              className="admin-form-input"
              placeholder="Enter admin phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="password" className="admin-form-label">
              Password
            </label>
            <input
              id="password"
              className="admin-form-input"
              placeholder="Enter admin password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="admin-auth-button" type="submit">
            Login
          </button>
        </form>

        <p className="admin-auth-footer">
          © {new Date().getFullYear()} ShafaCode • Internal access only
        </p>

        <button
          className="admin-auth-button"
          type="button"
          onClick={handleGoToHome}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
