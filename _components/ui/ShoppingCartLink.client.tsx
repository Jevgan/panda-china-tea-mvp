import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default async function ShoppingCartLink({ className, orderItemsCount, children }: { className?: string, orderItemsCount: number, children?: ReactNode }) {
    return (
        <Link href="/cart" className={` ${className}   cursor-pointer group hover:brightness-75`}>
            <div className="relative ">
                <ShoppingCart size={24}/>
                <span className="absolute -top-1 -right-1  dark:bg-gray-800 px-1 text-sm bg-zinc-200 rounded-full ">{orderItemsCount}</span>
            </div>
            {children}
        </Link>
    );
}
