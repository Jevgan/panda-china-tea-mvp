'use client';
import { useMenuContext } from "@/context/MenuContext";
import { useEffect, useState } from "react";

export default function HamburgerMenu() {
    const [mounted, setMounted] = useState(false);
    const {isMenuOpen, toggle} = useMenuContext();

    useEffect(() => setMounted(true), []);

    if(!mounted) return <div/>;

    const genericHamLine = `h-1 w-6 bg-black dark:bg-white rounded-full bg-black transition ease  duration-300 transform`;
    return (
        <button
            className="flex flex-col gap-1 h-12 w-12 border-white justify-center items-center group "
            onClick={toggle}>
            <div className={`${genericHamLine} ${isMenuOpen
                ? "rotate-45 translate-y-2 opacity-100 group-hover:opacity-100"
                : "opacity-50"
                }`} />
            <div className={`${genericHamLine} ${isMenuOpen
                ? "opacity-0" : "opacity-50"
                }`} />
            <div className={`${genericHamLine} ${isMenuOpen
                ? "-rotate-45 -translate-y-2 opacity-100 group-hover:opacity-100"
                : "opacity-50"
                }`} />
        </button>
    );
}
