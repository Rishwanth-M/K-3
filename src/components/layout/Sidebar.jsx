import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ active, setActive }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="w-64 bg-white/5 backdrop-blur-xl p-6 flex flex-col">

      <h2 className="text-xl font-bold mb-8">
        Dashboard
      </h2>

      <button
        onClick={() => setActive("profile")}
        className={`mb-3 ${active === "profile" && "text-green-400"}`}
      >
        Profile
      </button>

      <button
        onClick={() => setActive("reports")}
        className={`mb-3 ${active === "reports" && "text-green-400"}`}
      >
        Reports
      </button>

      <button
        onClick={handleLogout}
        className="mt-auto text-red-400"
      >
        Logout
      </button>

    </div>
  );
}