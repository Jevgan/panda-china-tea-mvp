'use client';
import { useMenuContext } from "@/app/_hooks/useMenuContext";
import { useEffect, useState } from "react";
import { LoadingCircle } from "../ui/Loading.client";


export default function SideMenu({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    const isMenuOpen = useMenuContext((state) => state.isMenuOpen);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "unset";
        }
        return () => { document.body.style.overflowY = "unset"; }
    }, [isMenuOpen])

    if (!mounted) return <LoadingCircle/>;

    const menuOpenStyle = `translate-x-0 opacity-100`;

    return (
        <div className={`${isMenuOpen ? menuOpenStyle : "opacity-0 translate-x-full z-1"} fixed right-0 top-0 p-2 h-screen z-20 `}>

            <div
                className={` pt-8 px-8 h-full bg-zinc-200 text-black dark:bg-gray-800 dark:text-white   transition-all duration-300  rounded-xl `}
            >
                {children}
            </div >
        </div>
    )
}
