import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("polytalk-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("-theme", theme);
    set({ theme });
  },
}));
