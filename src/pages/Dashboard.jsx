import Sidebar from "../components/layout/Sidebar";
import Profile from "./Profile";
import Reports from "./Reports";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [active, setActive] = useState("profile");
  const { user, initialized } = useAuth(); // ✅ important
  const navigate = useNavigate();

  useEffect(() => {
    // ⛔ wait until auth is ready
    if (!initialized) return;

    // ❌ only redirect after check
    if (!user) {
      navigate("/login");
    }
  }, [user, initialized]);

  return (
    <div className="flex min-h-screen">
      
      {/* SIDEBAR */}
      <Sidebar active={active} setActive={setActive} />

      {/* CONTENT */}
      <div className="flex-1 p-8">
        {active === "profile" && <Profile />}
        {active === "reports" && <Reports />}
      </div>

    </div>
  );
}