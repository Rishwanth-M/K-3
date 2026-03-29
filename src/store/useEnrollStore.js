import { create } from "zustand";

export const useEnrollStore = create((set) => ({
  formData: {},
  errors: {},

  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),

  setErrors: (errors) => set({ errors }),

  resetForm: () =>
    set({
      formData: {},
      errors: {},
    }),
}));