import FormSection from "./FormSection";
import { useEnrollStore } from "../../store/useEnrollStore";

export default function MediaConsent() {
  const { formData, setFormData } = useEnrollStore();

  const handleChange = (value) => {
    setFormData({ mediaConsent: value });
  };

  return (
    <FormSection title="Media Consent">

      <div className="col-span-2 text-gray-400 text-sm">
        Do you agree to allow Kreedentials™ to use photos/videos for training and promotions?
      </div>

      <div className="flex gap-6 mt-2 col-span-2">

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="mediaConsent"
            checked={formData.mediaConsent === "agree"}
            onChange={() => handleChange("agree")}
          />
          Agree
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="mediaConsent"
            checked={formData.mediaConsent === "disagree"}
            onChange={() => handleChange("disagree")}
          />
          Disagree
        </label>

      </div>

    </FormSection>
  );
}