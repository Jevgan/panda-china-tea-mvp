'use client';

import { useMenuContext } from "@/context/MenuContext";
import { useCallback, useEffect, useState } from "react";


export default function SideMenu({ children}: { children: React.ReactNode}) {
    const [mounted, setMounted] = useState(false);
    const { isMenuOpen, toggle } = useMenuContext();

    useEffect(() => { setMounted(true), [] });

    if (!mounted) return <div className="h-full">Loading...</div>

    return (
        <div 
            className={`${isMenuOpen?"block":"hidden"} absolute h-screen  bg-gray-900`} 
        >
            {children}
        </div >
    )
}
