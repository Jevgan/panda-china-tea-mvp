import { ReactNode } from "react";

export default function AuthLayout({children}: {children:ReactNode}){
    return(
        <div className="flex w-xl mx-auto  justify-between items-center-safe   border rounded-xl border-gray-700 dark:border-zinc-200 shadow-md shadow- p-6 sm:p-3">
        {children} 
        </div>
    )

}
