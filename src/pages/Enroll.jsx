import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ChildDetails from "../components/form/ChildDetails";
import ConsentSection from "../components/form/ConsentSection";

import Declaration from "../components/form/Declaration";

import { validateEnroll } from "../utils/validateEnroll";
import { useEnrollStore } from "../store/useEnrollStore";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase";

export default function Enroll() {
  const navigate = useNavigate();

  const { formData, setErrors, errors } = useEnrollStore();
  const { user } = useAuth();

  useEffect(() => {
  const checkEnrollment = async () => {
    if (!user) return;

    const { data } = await supabase
      .from("enrollments")
      .select("id")
      .eq("user_id", user.id)
      .maybeSingle();

    // ✅ already filled → go dashboard
    if (data) {
      navigate("/dashboard");
    }
  };

  checkEnrollment();
}, [user]);



  const handlePreview = () => {
    if (!user) {
      alert("Please login");
      navigate("/login");
      return;
    }

    const validationErrors = validateEnroll(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    navigate("/preview"); // ✅ go to preview
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl p-8 rounded-2xl">
        
        <h2 className="text-2xl font-bold mb-2">
          Enrollment Form
        </h2>

        <p className="text-gray-400 text-sm mb-6">
          Fill the form and preview before submitting.
        </p>

        <ChildDetails />
        <ConsentSection />
        
        <Declaration />

        {Object.keys(errors).length > 0 && (
          <p className="text-red-400 text-sm mb-4">
            Fill in the required details.
          </p>
        )}

        <div className="flex gap-4 mt-6">
          <button
            onClick={handlePreview}
            className="bg-green-500 px-6 py-3 rounded-xl font-semibold"
          >
            Preview
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 px-6 py-3 rounded-xl font-semibold"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}