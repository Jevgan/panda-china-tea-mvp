'use client';
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return <div className="h-10 w-10 p-1" />

    const themeToggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')


    return (
        <div className="hidden lg:block h-10 w-10 p-1 me-4 group bg-zinc-200 overflow-hidden   dark:bg-gray-800  border-transparent  rounded-xl brightness-100 hover:brightness-75">

            <button
                onClick={themeToggle}
                className="relative h-full w-full"
            >
                <Sun strokeWidth={1.5} className={`absolute w-full h-full inset-0  ${theme === 'dark' ? '-translate-y-9' : 'translate-y-0'} outline-none transition-all`} />
                <Moon strokeWidth={1.5} className={`absolute w-full h-full inset-0 ${theme === 'dark' ? 'translate-y-0' : 'translate-y-9'} outline-none  transition-all`} />
            </button>
        </div>
    );
}
