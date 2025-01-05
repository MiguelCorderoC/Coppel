import { create } from "zustand";

interface locationStoreProps {
  city: string;
  setCity: (value: string) => void;
  showCities: boolean;
  setShowCities: (value: boolean) => void;
  state: string;
  setState: (value: string) => void;
  showState: boolean;
  setShowState: (value: boolean) => void;
  visible: boolean;
  setVisible: (value: boolean) => void;
  delivery: string;
  setDelivery: (value: string) => void;
}

export const useLocationStore = create<locationStoreProps>((set) => ({
  city: "Selecciona un estado",
  setCity: (value: string) => set(() => ({ city: value })),
  showCities: false,
  setShowCities: (value: boolean) => set(() => ({ showCities: value })),
  state: "Selecciona una ciudad",
  setState: (value: string) => set(() => ({ state: value })),
  showState: false,
  setShowState: (value: boolean) => set(() => ({ showState: value })),
  visible: false,
  setVisible: (value: boolean) => set(() => ({ visible: value })),
  delivery: "",
  setDelivery: (value: string) => set(() => ({ delivery: value })),
}));
