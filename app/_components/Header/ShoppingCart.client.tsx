'use client';
import { ShoppingCart as Cart } from "lucide-react";

export default function ShoppingCart() {
    return (
        <button className="relative w-8 h-8 cursor-pointer group hover:brightness-75">
            <Cart />
            <span className="absolute top-0 right-0 z-10 dark:bg-gray-800 px-1 text-sm bg-zinc-200 rounded-full ">0</span>
        </button>
    );
}
