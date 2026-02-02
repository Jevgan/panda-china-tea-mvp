'use client';
import { useMenuContext } from "@/_hooks/useMenuContext";
import { useEffect, useState } from "react";

export default function Hamburger() {
    const [mounted, setMounted] = useState(false);

    const isMenuOpen = useMenuContext((state) => state.isMenuOpen);
    const toggle = useMenuContext((state) => state.toggle);
     
    useEffect(() => setMounted(true), []);

    if(!mounted) return <div />;

    const genericHamLine = `h-1 w-6 bg-black dark:bg-white rounded-full`;
    return (
        <button
            className="flex flex-col gap-1 h-12 w-12 border-zinc-400 justify-center items-center hover:border-2 transition-all duration-75 rounded  group "
            onClick={toggle}>
            <span className={`${genericHamLine} opacity-75 group-hover:opacity-100`}/>
            <span className={`${genericHamLine} opacity-75 group-hover:opacity-100`}/>
            <span className={`${genericHamLine} opacity-75 group-hover:opacity-100`}/>
            {/* <div className={`${genericHamLine} ${isMenuOpen */}
            {/*     ? "rotate-45 translate-y-2 opacity-100" */}
            {/*     : "opacity-50" */}
            {/*     }`} /> */}
            {/* <div className={`${genericHamLine} ${isMenuOpen */}
            {/*     ? "opacity-0" : "opacity-50" */}
            {/*     }`} /> */}
            {/* <div className={`${genericHamLine} ${isMenuOpen */}
            {/*     ? "-rotate-45 -translate-y-2 opacity-100" */}
            {/*     : "opacity-50" */}
            {/*     }`} /> */}
        </button>
    );
}
