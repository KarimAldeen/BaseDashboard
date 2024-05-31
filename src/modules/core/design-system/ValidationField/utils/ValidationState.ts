import { create } from 'zustand';

interface ValidationState {
  Validation: any[];
  setValidation: (value: any[]) => void;
}

export const useValidationState = create<ValidationState>((set) => ({
  Validation: [],
  setValidation: (value) =>
    set((state) => ({ Validation: value })),
}));
