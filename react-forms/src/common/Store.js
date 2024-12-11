// npm install zustand -> Store.js
import { create } from 'zustand'

export const themeStore = create((set) => ({
  theme: "light",
  toggle: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),

}))
