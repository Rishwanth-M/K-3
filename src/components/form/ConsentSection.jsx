import { useState } from "react";
import FormSection from "./FormSection";
import FormTextarea from "./FormTextarea";
import { useEnrollStore } from "../../store/useEnrollStore";
import ConsentModal from "./ConsentModal";

export default function ConsentSection() {
  const { formData, setFormData } = useEnrollStore();
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <FormSection title="Consent & Medical Information">

      {/* Existing Line */}
      <div className="col-span-2 text-gray-400 text-sm">
        I authorize Kreedentials™ coaches to provide first aid and seek medical assistance if required. I accept responsibility for related expenses. Please mention below if any special care or assistance is required for the child (ex: Asthma, Allergies, Heart condition, Bone/Joint injuries etc.,)
      </div>

      {/* KEEP THIS SAME */}
      <FormTextarea
        label="Special Medical Care Required"
        name="specialMedical"
        value={formData.specialMedical || ""}
        onChange={handleChange}
      />

      {/* ✅ NEW CONSENT CHECKBOX */}
      <div className="col-span-2 mt-4">
        <label className="flex items-start gap-3 text-sm text-gray-300 cursor-pointer">
          <input
            type="checkbox"
            name="consentAccepted"
            checked={formData.consentAccepted || false}
            onChange={handleChange}
            required
            className="mt-1 accent-green-400"
          />

          <span>
            I agree to all consent terms{" "}
            <button
              type="button"
              onClick={() => setOpenModal(true)}
              className="text-cyan-400 underline hover:text-cyan-300 ml-1"
            >
              View Consents
            </button>
          </span>
        </label>
      </div>

      {/* Modal */}
      <ConsentModal open={openModal} onClose={() => setOpenModal(false)} />

    </FormSection>
  );
}