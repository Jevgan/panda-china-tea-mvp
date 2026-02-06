import { Coffee, Lightbulb, Phone, UsersRound } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export const Underline = ({ className = "" }: { className?: string }) => <span className={`${className} absolute w-full scale-x-0  h-0.5  inset-x-0 mt-1 bottom-0 bg-black dark:bg-white rounded-full group-hover:scale-x-100 peer-focus:scale-x-100 transition-transform duration-300 `} />;

export function NavigationCatalog({ className = "", children }: { className?: string, children?: ReactNode }) {
    return (
        <div className={`${className} group`}>
            <Coffee />
            <div className="relative">
                <Link className="peer outline-none font-semibold" href="/catalog">Каталог</Link>
                {children}
            </div>
        </div>
    )
}

export function NavigationAbout({ className = "", children }: { className?: string, children?: ReactNode }) {
    return (
        <div className={`${className} group`}>
            <UsersRound />
            <div className="relative">
                <Link className="peer outline-none font-semibold" href="/about">Про нас</Link>
                {children}
            </div>
        </div>
    )
}


export function NavigationContacts({ className = "", children }: { className?: string, children?: ReactNode }) {
    return (
        <div className={`${className}  group`}>
            <Phone />
            <div className="relative">
                <Link className="peer outline-none font-semibold" href="/contacts">Контакти</Link>
                {children}
            </div>
        </div>
    )
}
export function NavigationAdvice({ className, children }: { className?: string, children?: ReactNode }) {
    return (
        <div className={`${className}  group`}>
            <Lightbulb />
            <div className="relative">

                <Link className="peer outline-none font-semibold" href="/advice">Що обрати?</Link>
                {children}
            </div>
        </div>
    )
}

export default function Navigation({ display }: { display: string }) {
    return (
        <div className={`gap-1 ${display}`}>
            <NavigationCatalog className="flex items-center gap-1" >
                <Underline />
            </NavigationCatalog >
            <NavigationAbout className="flex items-center gap-1" >
                <Underline />
            </NavigationAbout >
            <NavigationContacts className="flex items-center gap-1" >
                <Underline />
            </NavigationContacts>
            <NavigationAdvice className="flex items-center gap-1" >
                <Underline />
            </NavigationAdvice>
        </div>
    )
}
