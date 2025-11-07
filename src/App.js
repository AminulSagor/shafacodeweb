import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page imports
import Home from "./pages/Home";
import About from "./pages/About";
// Admin imports
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import Partner from "./pages/Partner";
import MainLayout from "./Layout/MainLayout";



function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/" element={<MainLayout />}>
          <Route path="partner" element={<Partner />} />
        </Route>
        {/* <Route path="/Partner" element={<Partner/>} /> */}
      

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>


    </Router>
  );
}

export default App;
