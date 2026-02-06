import SearchInput from './SearchInput.client';
import { NavigationCatalog } from "./Navigation.client";

import ThemeToggle from '../ui/ThemeToggle.client';
import Hamburger from "../ui/Hamburger.client";
import ShoppingCartLink from "../ui/ShoppingCartLink.client";
import ProfileLink from "../ui/ProfileLink.server";
import LoginLink from "../ui/LoginButton.server";
import MainLogo from "../ui/MainLogo";

export default function Header() {
    return (
        <header className="fixed top-0 right-0 left-0 z-10 bg-white/10 dark:bg-black/10 backdrop-blur-md shadow-[0px_5px_20px_3px_rgba(0,0,0,0.1)] dark:shadow-[0px_5px_20px_3px_rgba(255,255,255,0.1)] ">
            <nav className="max-w-7xl h-16 gap-x-2 lg:gap-x-4  mx-auto px-4 flex items-center justify-between ">

                <MainLogo className='' textVisibleOnMobile={true}/>
                <NavigationCatalog className="btn-primary hidden lg:flex"/>
                <SearchInput />
                <ShoppingCartLink className='hidden lg:flex' orderItemsCount={0}/>
                <ProfileLink className="hidden lg:flex"/>

                <ThemeToggle />
                <LoginLink />
                <Hamburger />
            </nav>

        </header>
    )
}
