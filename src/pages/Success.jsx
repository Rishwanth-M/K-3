import { useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

export default function Success() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const token = state?.token;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 text-center">

        {/* ICON */}
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100">
          <span className="text-2xl">✓</span>
        </div>

        {/* TITLE */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Enrollment Successful
        </h2>

        <p className="text-sm text-gray-500 mb-6">
          Your registration has been submitted successfully.
        </p>

        {/* DETAILS CARD */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-left space-y-3">

          <div className="flex justify-between">
            <span className="text-gray-500 text-sm">Athlete ID</span>
            <span className="font-semibold text-gray-800">{token}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500 text-sm">Batch</span>
            <span className="font-medium text-black">—</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500 text-sm">Fee</span>
            <span className="font-medium text-black">—</span>
          </div>

        </div>

        {/* ACTIONS */}
        <div className="mt-6 flex flex-col gap-3">

          <button
            onClick={() => navigate("/Dashboard")}
            className="w-full bg-black text-white py-2.5 rounded-lg text-sm hover:opacity-90 transition"
          >
            Go to Dashboard
          </button>

        </div>

      </div>
    </div>
  );
}