import { create } from "zustand";

interface ITodo {
  title: string;
  description: string;
  id: number;
}

interface ITodoStore {
  data: ITodo[];
  addTodo: (newData: ITodo) => void;
  deleteTodo: (id: number) => void;
  deleteAll: () => void;
}

export const useTodoStore = create<ITodoStore>((set) => ({
  data: [],
  addTodo: (newData) => set((state) => ({ data: [...state.data, newData] })),
  deleteTodo: (id) =>
    set((state) => ({ data: [...state.data.filter((el) => el.id !== id)] })),
  deleteAll: () => set(() => ({ data: [] })),
}));
