'use client';
import { useMenuContext } from "@/_hooks/useMenuContext";
import { useEffect, useState } from "react";
import { LoadingCircle } from "../ui/Loading.client";
import { usePathname } from "next/navigation";
import CrossButton from "../ui/CrossButton.client";


export default function SideMenu({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const isMenuOpen = useMenuContext((state) => state.isMenuOpen);
    const setClosed = useMenuContext((state) => state.setClosed);
    const pathname = usePathname();

    useEffect(() => setMounted(true), []);

    // Scrollbar hidden
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "unset";
        }
        return () => { document.body.style.overflowY = "unset"; }
    }, [isMenuOpen])

    // Cleanup
    useEffect(() => () => { setClosed() }, [pathname])

    if (!mounted) return <LoadingCircle />;

    const menuOpenStyle = `translate-x-0 opacity-100 z-50 `;
    const menuClosedStyle = `opacity-0 translate-x-full z-0`;

    return (
        <div className={`${isMenuOpen ? menuOpenStyle : menuClosedStyle} fixed right-0 top-0 p-2 h-screen transition-all duration-300  `}>

            <div
                className={`w-3xs pt-4  px-8 h-full bg-zinc-200 text-black dark:bg-gray-800 dark:text-white   rounded-xl `}
            >
                <div className="flex pb-4 mb-4 justify-between items-center font-bold text-3xl border-b border-b-gray-700">
                    <span>Меню</span>
                    <CrossButton />
                </div>
                {children}
            </div >
        </div>
    )
}
