import { useMenuContext } from "@/_hooks/useMenuContext";
import { ReactNode, useEffect, useState } from "react";

export default function CrossButton({ children }: { children?: ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const isMenuOpen = useMenuContext((state) => (state.isMenuOpen));
    const toggle = useMenuContext((state) => (state.toggle));

    useEffect(() => setMounted(true), []);

    if (!mounted) return <div />;

    const genericLine = `absolute h-1 w-full bg-black dark:bg-white rounded-full opacity-75 group-hover:opacity-100 `;

    return (
        <button className="flex relative justify-center justify-self-end items-center h-8 w-8  group rounded  border-zinc-400" onClick={toggle}>
            <span className={`${genericLine} rotate-45 `} />
            <span className={`${genericLine} -rotate-45`} />
        </button>
    )
}
