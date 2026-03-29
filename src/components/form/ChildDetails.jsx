import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import FormSection from "./FormSection";
import { useEnrollStore } from "../../store/useEnrollStore";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function ChildDetails() {
  const { formData, setFormData, errors } = useEnrollStore();
  const { user } = useAuth();

  const [uploading, setUploading] = useState(false);

  // ✅ auto email
  useEffect(() => {
    if (user?.email) {
      setFormData({ email: user.email });
    }
  }, [user]);

  // ✅ handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dob") {
      const birthDate = new Date(value);
      const age = new Date().getFullYear() - birthDate.getFullYear();

      setFormData({
        dob: value,
        age: age > 0 ? age : "",
      });
      return;
    }

    setFormData({ [name]: value });
  };

  // ✅ PHOTO UPLOAD
  const handlePhotoUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  setUploading(true);

  const fileName = `${Date.now()}-${file.name}`;
  const filePath = `photos/${fileName}`;

  const { error } = await supabase.storage
    .from("profiles")
    .upload(filePath, file);

  if (error) {
    console.log(error); // 🔥 debug
    alert("Upload failed");
    setUploading(false);
    return;
  }

  const { data } = supabase.storage
    .from("profiles")
    .getPublicUrl(filePath); // ✅ FIXED

  setFormData({ photo: data.publicUrl });

  setUploading(false);
};

  return (
    <FormSection title="Child Details">

      <FormInput
        label="Child Name"
        name="childName"
        value={formData.childName || ""}
        onChange={handleChange}
        error={errors.childName}
      />

      {/* ✅ Gender Dropdown */}
      <select
  name="gender"
  value={formData.gender || ""}
  onChange={handleChange}
  className="w-full mb-3 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
>
  <option value="" className="bg-gray-800 text-white">Select Gender</option>
  <option value="Male" className="bg-gray-800 text-white">Male</option>
  <option value="Female" className="bg-gray-800 text-white">Female</option>
  <option value="Other" className="bg-gray-800 text-white">Other</option>
</select>
      {errors.gender && <p className="text-red-400 text-sm">{errors.gender}</p>}

      <FormInput
        label="Date of Birth"
        name="dob"
        type="date"
        value={formData.dob || ""}
        onChange={handleChange}
        error={errors.dob}
      />

      {/* ✅ Auto Age (readonly) */}
      <FormInput
        label="Age"
        name="age"
        value={formData.age || ""}
        disabled
        error={errors.age}
      />

      {/* ✅ Mobile validation input */}
      <FormInput
        label="Mobile"
        name="mobile"
        value={formData.mobile || ""}
        onChange={(e) => {
          const val = e.target.value.replace(/\D/g, "");
          if (val.length <= 10) {
            setFormData({ mobile: val });
          }
        }}
        error={errors.mobile}
      />

      <FormInput
        label="Parent Name"
        name="parentName"
        value={formData.parentName || ""}
        onChange={handleChange}
        error={errors.parentName}
      />

      {/* ✅ Email auto-filled + disabled */}
      <FormInput
        label="Email"
        name="email"
        value={formData.email || ""}
        readOnly
        error={errors.email}
      />

      {/* ✅ Address */}
      <FormTextarea
        label="Address"
        name="address"
        value={formData.address || ""}
        onChange={handleChange}
        error={errors.address}
      />

      {/* ✅ Township dropdown */}
      <select
  name="township"
  value={formData.township || ""}
  onChange={handleChange}
  className="w-full mb-3 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
>
  <option value="" className="bg-gray-800 text-white">
    Select Township
  </option>
  <option
    value="Begonia Homes Manikonda"
    className="bg-gray-800 text-white"
  >
    Begonia Homes Manikonda
  </option>
</select>
      {errors.township && <p className="text-red-400 text-sm">{errors.township}</p>}

      <FormInput
        label="School"
        name="school"
        value={formData.school || ""}
        onChange={handleChange}
        error={errors.school}
      />

      <FormTextarea
        label="Medical Conditions"
        name="medical"
        value={formData.medical || ""}
        onChange={handleChange}
        error={errors.medical}
      />

      <FormInput
        label="Emergency Name"
        name="emergencyName"
        value={formData.emergencyName || ""}
        onChange={handleChange}
        error={errors.emergencyName}
      />

      <FormInput
        label="Emergency Phone"
        name="emergencyPhone"
        value={formData.emergencyPhone || ""}
        onChange={(e) => {
          const val = e.target.value.replace(/\D/g, "");
          if (val.length <= 10) {
            setFormData({ emergencyPhone: val });
          }
        }}
        error={errors.emergencyPhone}
      />

      {/* PHOTO */}
      <div className="mb-4">
        <label className="block text-sm mb-2 text-white">Upload Photo</label>

        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          className="w-full text-white"
        />

        {uploading && (
          <p className="text-yellow-400 text-sm">Uploading...</p>
        )}

        {formData.photo && (
          <img
            src={formData.photo}
            alt="preview"
            className="mt-3 w-24 h-24 rounded-lg object-cover"
          />
        )}
      </div>

    </FormSection>
  );
}