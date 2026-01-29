'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import PandaLogo from '@/public/icon.svg';
import SearchInput from './SearchInput.client';
import ThemeToggle from './ThemeToggle.client';
import HamburgerMenu from "./HamburgerMenu.client";
import Navigation from "./Navigation.client";
import ShoppingCart from "./ShoppingCart.client";
import Profile from "./Profile.client";
import LoginButton from "./LoginButton.client";
import SideMenu from "./SideMenu.client";

export default function Header() {
    return (
        <header className="w-full sticky top-0 z-10 bg-white/10 dark:bg-black/10 backdrop-blur-md shadow-[0px_5px_20px_3px_rgba(0,0,0,0.1)] dark:shadow-[0px_5px_20px_3px_rgba(255,255,255,0.1)] ">
            <nav className="container max-w-7xl h-16 gap-x-4 mx-auto px-4 flex items-center justify-between ">
                <Link href="/" className="flex items-center font-bold  text-xl" >
                    <Image
                        src={PandaLogo}
                        alt="Main logotype"
                        width={50}
                        height={50}
                    />
                    <div className="flex flex-col  leading-none">
                        <span className="text-lg font-bold text-yellow-900 leading-5  uppercase tracking-tighter">Panda</span>
                        <span className="ml-0.5 text-[12px] font-medium tracking-widest uppercase">China Tea</span>
                    </div>
                </Link>

                <SearchInput />
                <Navigation display="flex-row"/>
                <ShoppingCart />
                <Profile />

                <ThemeToggle />
                <LoginButton />
                <HamburgerMenu />
            </nav>

        </header>
    )
}
