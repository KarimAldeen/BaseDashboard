import { create } from "zustand";

interface ModalState {
  isOpen: string;
  setIsOpen: (value: string) => void;
}

export const useModalState = create<ModalState>((set) => ({
  isOpen: "",
  setIsOpen: (value: string) => set((state) => ({ isOpen: value })),
}));
