import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    // ✅ ALWAYS go to dashboard
    // check enrollment after login
const { data } = await supabase
  .from("enrollments")
  .select("id")
  .eq("user_id", (await supabase.auth.getUser()).data.user.id)
  .maybeSingle();

if (data) {
  navigate("/dashboard");
} else {
  navigate("/enroll");
}
  };

  const handleForgotPassword = async () => {
    if (!email) return alert("Enter email first");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://kreedentialsk-3.vercel.app//reset-password",
    });

    if (error) return alert(error.message);

    alert("Password reset email sent");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">

      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-gray-300 hover:text-white text-sm"
      >
        ← Home
      </button>

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl p-8">

        <div className="flex justify-center mb-6">
          <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
        </div>

        <h2 className="text-2xl text-white text-center mb-6">
          Login
        </h2>

        <input
          className="w-full mb-4 p-3 rounded-lg bg-white/10 text-white"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-3 p-3 rounded-lg bg-white/10 text-white"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <p
          onClick={handleForgotPassword}
          className="text-sm text-gray-400 cursor-pointer mb-4"
        >
          Forgot Password?
        </p>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-green-500 p-3 rounded-lg text-white"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p
          onClick={() => navigate("/signup")}
          className="mt-5 text-center text-gray-400 cursor-pointer"
        >
          Create Account
        </p>
      </div>
    </div>
  );
}
