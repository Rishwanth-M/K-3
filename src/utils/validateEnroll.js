export function validateEnroll(formData) {
  const errors = {};

  const trim = (val) => val?.toString().trim();

  if (!trim(formData.childName)) {
    errors.childName = "Child name is required";
  }

  if (!formData.gender) {
    errors.gender = "Gender is required";
  }

  if (!formData.dob) {
    errors.dob = "DOB is required";
  }

  if (!formData.age || isNaN(formData.age)) {
    errors.age = "Valid age is required";
  }

  if (!trim(formData.parentName)) {
    errors.parentName = "Parent name is required";
  }

  if (!trim(formData.email)) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Invalid email";
  }

  if (!formData.mobile) {
    errors.mobile = "Mobile is required";
  } else if (!/^\d{10}$/.test(formData.mobile)) {
    errors.mobile = "Mobile must be 10 digits";
  }

  if (!formData.emergencyPhone) {
    errors.emergencyPhone = "Emergency contact required";
  } else if (!/^\d{10}$/.test(formData.emergencyPhone)) {
    errors.emergencyPhone = "Invalid emergency number";
  }

  if (!trim(formData.declarationName)) {
    errors.declarationName = "Declaration name required";
  }

  if (!formData.township) errors.township = "Select township";

  return errors;
}