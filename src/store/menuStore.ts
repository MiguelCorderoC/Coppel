import { create } from "zustand";

interface menuStoreProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

export const useMenuStore = create<menuStoreProps>((set) => ({
  visible: false,
  setVisible: (value: boolean) => set(() => ({ visible: value })),
}));
