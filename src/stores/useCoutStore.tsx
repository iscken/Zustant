import { create } from "zustand";

interface ICountStore {
  count: number;
  increment: () => void;
  decriment: () => void;
}

export const useCountStore = create<ICountStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decriment: () =>
    set((state) => ({
      count: state.count > 0 ? state.count - 1 : state.count,
    })),
}));
