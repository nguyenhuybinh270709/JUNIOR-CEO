import { create } from "zustand";

interface LandingRegisterDialogState {
  isDialogOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

export const useLandingRegisterDialogStore = create<LandingRegisterDialogState>(
  (set) => ({
    isDialogOpen: false,
    openDialog: () => set({ isDialogOpen: true }),
    closeDialog: () => set({ isDialogOpen: false }),
  }),
);
