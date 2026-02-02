import { create } from "zustand";

type MenuContext = {
    isMenuOpen: boolean,
    setOpen: () => void,
    setClosed: () => void,
    toggle: () => void,
}

export const useMenuContext = create<MenuContext>((set) => ({
    isMenuOpen: false,
    setOpen: () => set({ isMenuOpen: true }),
    setClosed: () => set({ isMenuOpen: false }),
    toggle: () => set((state) => ({ isMenuOpen: !state.isMenuOpen }))
}))
