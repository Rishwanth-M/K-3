import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Township from "./pages/Township";
import Coaches from "./pages/Coaches";
import ScrollToTop from "./components/ScrollToTop";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Enroll from "./pages/Enroll";
import Success from "./pages/Success";
import ResetPassword from "./pages/ResetPassword";
import Preview from "./pages/Preview";
import Contact from "./pages/Contact";

import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <ScrollToTop />

        <Routes>
          {/* PUBLIC */}
          <Route path="/" element={<Home />} />
          <Route path="/township" element={<Township />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/contact" element={<Contact />} />


          {/* AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* FLOW */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/success" element={<Success />} />
        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}