import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setLoading(false);
      return alert(error.message);
    }

    // ✅ Direct redirect (AuthContext will handle session)
    navigate("/enroll");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">

      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-gray-300 hover:text-white text-sm"
      >
        ← Home
      </button>

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8">

        <div className="flex justify-center mb-6">
          <img src={logo} alt="logo" className="w-20 h-20 object-contain opacity-90"/>
        </div>

        <h2 className="text-2xl text-white text-center mb-6">Signup</h2>

        <input
          className="w-full mb-4 p-3 rounded-lg bg-white/10 text-white"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-5 p-3 rounded-lg bg-white/10 text-white"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          disabled={loading}
          className="w-full bg-green-500 p-3 rounded-lg text-white"
        >
          {loading ? "Creating..." : "Signup"}
        </button>

        <p
          onClick={() => navigate("/login")}
          className="mt-5 text-center text-gray-400 cursor-pointer"
        >
          Already have an account?
        </p>
      </div>
    </div>
  );
}