import { create } from "zustand";

interface locationStoreProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

export const useLocationStore = create<locationStoreProps>((set) => ({
  visible: false,
  setVisible: (value: boolean) => set(() => ({ visible: value })),
}));
