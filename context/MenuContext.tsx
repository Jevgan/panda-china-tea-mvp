'use client'

import { create } from 'zustand';
interface MenuContext {
    isMenuOpen: boolean;
    toggle: () => void;
}

export const useMenuContext = create<MenuContext>((set) => ({
    isMenuOpen: false,
    toggle:() => set((state) => ({ isMenuOpen: !state.isMenuOpen }))
}))

















// import { createContext, ReactNode, useContext, useState } from "react";
//
// interface MenuDispatchContextType {
//     setOpen: () => void;
//     setClosed: () => void;
// }
//
// const MenuStateContext = createContext<boolean | undefined>(undefined);
// const MenuDispatchContext = createContext<MenuDispatchContextType | undefined>(undefined);
//
// export function MenuProvider({ children }: { children: ReactNode }) {
//     const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
//
//     const setOpen = () => setIsSideMenuOpen(true);
//     const setClosed = () => setIsSideMenuOpen(false);
//     return (
//         <MenuStateContext.Provider value={isSideMenuOpen}>
//             <MenuDispatchContext.Provider value={{ setOpen, setClosed }}>
//                 {children}
//             </MenuDispatchContext.Provider>
//         </MenuStateContext.Provider>
//     )
// }
//
// export function useMenuStateContext() {
//     const context = useContext(MenuStateContext);
//     if (context === undefined)
//         throw new Error("useMenuStateContext must be used inside MenuProvider")
//     return context;
// }
//
// export function useMenuDispatchContext() {
//     const context = useContext(MenuDispatchContext);
//     if (context === undefined)
//         throw new Error("useMenuDispatchContext must be used inside MenuProvider")
//     return context;
// }
