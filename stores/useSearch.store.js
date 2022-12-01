import create from "zustand";

const useSearch = create((set) => ({
  show: false,
  toggle: () => set((state) => ({ show: !state.show }))
}));

export default useSearch;