import { create } from "zustand";
import { devtools } from "zustand/middleware";
export const useStore = create(
  devtools((set) => ({
    plates: 0,
    cars: 1,
    increasePlates: () => set((state) => ({ plates: state.plates + 1 })),
    removeAllPlates: () => set({ plates: 0 }),
    updatePlate: (newValue) => set({ plates: newValue }),
  }))
);
