'use client';

import { useMenuContext } from "@/app/_hooks/useMenuContext";

export default function Wrapper() {
    const { isMenuOpen, toggle } = useMenuContext();

    return (
        <div onClick={toggle} className={`${isMenuOpen ? "block" : "hidden"} fixed h-full w-full bg-black/20 z-20`}>
        </div>
    )
}
