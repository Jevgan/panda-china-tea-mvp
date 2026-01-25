'use client';
import { Search } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import useDebouncedCallback from 'use-debounce';

export default function SearchInput() {
    // const handleSearch = useDebouncedCallback((term: string) => {
    //
    // })
    return (
        <div className="relative flex flex-1 shrink-0">
            <input
                placeholder={`"Зелений чай..."`}
                type="text"
                className="peer rounded-full py-1 pl-2 block w-full border border-gray-200 text-sm placeholder:italic placeholder:text-gray-500 shadow-md "
            />
            <div
                className="w-7 h-7 rounded-full transition-opacity duration-300 peer-focus:opacity-0 absolute inset-y-0 right-0 flex items-center justify-center pointer-events-none"
            >
                <Search 
                    className="text-white dark:text-gray-900 bg-gray-900 dark:bg-zinc-50 border-none rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.2)] dark:shadow-[0px_10px_23px_3px_rgba(255,255,255,0.1)]  duration-300" />
            </div>

        </div>
    )
}
