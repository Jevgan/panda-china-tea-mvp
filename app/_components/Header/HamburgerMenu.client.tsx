'use client';
import { useState } from "react";

export default function HamburgerMenu() {
    const [isHamOpen, setIsHamOpen] = useState(false);

    const genericHamLine = `h-1 w-6 bg-black dark:bg-white rounded-full bg-black transition ease  duration-300 transform`;

    return (
        <button
            className="lg:hidden flex flex-col gap-1 h-12 w-12 border-white justify-center items-center group "
            onClick={() => setIsHamOpen(!isHamOpen)}>
            <div className={`${genericHamLine} ${isHamOpen
                ? "rotate-45 translate-y-2 opacity-100 group-hover:opacity-100"
                : "opacity-50"
                }`} />
            <div className={`${genericHamLine} ${isHamOpen
                ? "opacity-0" : "opacity-50"
                }`} />
            <div className={`${genericHamLine} ${isHamOpen
                ? "-rotate-45 -translate-y-2 opacity-100 group-hover:opacity-100"
                : "opacity-50"
                }`} />
        </button>
    );
}
