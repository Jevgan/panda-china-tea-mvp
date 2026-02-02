'use client';
import { Search } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import useDebouncedCallback from 'use-debounce';

export default function SearchInput() {
    // const handleSearch = useDebouncedCallback((term: string) => {
    //
    // })
    return (
        <div className="relative flex flex-1 shrink">
            <input
                placeholder={`"Зелений чай..."`}
                type="text"
                className="peer rounded-full py-1.5 pl-3 w-full bg-zinc-200 dark:bg-gray-800 outline-none text-sm placeholder:italic placeholder:text-gray-500"
            />
            <div
                className="absolute w-7 h-7 transition-opacity duration-300 peer-focus:opacity-0  inset-y-0 right-1 flex items-center justify-center pointer-events-none"
            >
                <Search 
                    className="text-gray-900 dark:text-white" />
            </div>

        </div>
    )
}
