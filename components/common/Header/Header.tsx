'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";

import PandaLogo from '@/public/icon.svg';
import Search from './Search';
import ThemeToggle from './ThemeToggle';
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="shadow-[0px_10px_23px_3px_rgba(0,0,0,0.1)] dark:shadow-[0px_10px_23px_3px_rgba(255,255,255,0.1)] sticky top-0 z-10 bg-white/10 dark:bg-black/10 backdrop-blur-md">
            <div className="max-w-7xl h-16 mx-auto px-4 flex items-center justify-between ">
                <Link href="/" className="font-bold text-xl" >
                    <Image
                        src={PandaLogo}
                        alt="Main logotype"
                        width={50}
                        height={50}
                    />
                </Link>

                {/* Mobile view */}
                <div className="block lg:hidden">
                    <HamburgerMenu />
                </div>

                {/* Desktop view */}
                <div className="align-middle gap-x-6 hidden lg:flex">
                    <Link className="text-sm font-medium hover:underli gap-ne" href="/">Головна</Link>
                    <Link className="text-sm font-medium hover:underli gap-ne" href="/catalog">Каталог</Link>
                    <Link className="text-sm font-medium hover:underli gap-ne" href="/about">Про нас</Link>
                    <Link className="text-sm font-medium hover:underli gap-ne" href="/contacts">Контакти</Link>
                    <Link className="text-sm font-medium hover:underline" href="/advice">Що обрати?</Link>
                </div>
                <div>
                    <Search />
                </div>
            </div>

        </nav>
    )
}
