import FormSection from "./FormSection";
import FormInput from "./FormInput";
import { useEnrollStore } from "../../store/useEnrollStore";

export default function Declaration() {
  const { formData, setFormData } = useEnrollStore();

  const handleChange = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };

  return (
    <FormSection title="Declaration & Signature">

      <div className="col-span-2 text-gray-400 text-sm">
        I confirm that I have read and understood all sections including
        participation consent, liability waiver, and code of conduct.
      </div>

      <FormInput
        label="Parent/Guardian Name"
        name="declarationName"
        value={formData.declarationName || ""}
        onChange={handleChange}
      />

      <FormInput
        label="Date"
        name="declarationDate"
        type="date"
        value={formData.declarationDate || ""}
        onChange={handleChange}
      />

    </FormSection>
  );
}