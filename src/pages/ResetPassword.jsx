import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = async () => {
    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) return alert(error.message);

    alert("Password updated!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-800">

      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl w-full max-w-md">
        <h2 className="text-white text-xl mb-4">Reset Password</h2>

        <input
          type="password"
          placeholder="New Password"
          className="w-full mb-4 p-3 rounded bg-white/20 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleReset}
          className="w-full bg-green-500 p-3 rounded text-white"
        >
          Update Password
        </button>
      </div>
    </div>
  );
}