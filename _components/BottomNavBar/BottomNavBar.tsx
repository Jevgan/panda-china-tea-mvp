import { NavigationCatalog, NavigationAdvice } from "../Header/Navigation.client";
import ShoppingCart from "../ui/ShoppingCartLink.client";
import Profile from "../ui/ProfileLink.server";

export default async function BottomNavBar() {
    return (
        <div className="w-full h-16 block lg:hidden fixed bottom-0 z-10 bg-white dark:bg-gray-900 backdrop-blur-lg shadow-[0px_5px_20px_3px_rgba(0,0,0,0.10)] dark:shadow-[0px_5px_20px_3px_rgba(255,255,255,0.1)] ">

            <nav className="w-full h-full flex justify-around items-center">
                <NavigationCatalog className="flex flex-col justify-center items-center" />
                    
                <NavigationAdvice className="flex flex-col justify-center items-center"/>
                <ShoppingCart  className="flex flex-col justify-center items-center" orderItemsCount={0}>
                    <p className="font-semibold">Корзина</p>
                </ShoppingCart>
                <Profile className="flex flex-col justify-center items-center">
                    <p className="font-semibold">Профіль</p>
                </Profile>
            </nav>
        </div>
    )

}
