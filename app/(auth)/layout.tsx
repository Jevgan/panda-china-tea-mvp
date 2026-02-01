import { ReactNode } from "react";

export default function AuthLayout({children}: {children:ReactNode}){
    return(
        <div className="min-h-screen flex justify-between items-center-safe mx-auto  rounded-xl border-gray-700 shadow-md p-6 sm:p-3">
        {children} 
        </div>
    )

}
