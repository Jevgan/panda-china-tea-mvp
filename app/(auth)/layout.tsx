import Image from "next/image";
import { ReactNode } from "react";
import Panda from "@/public/panda_photo.webp";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col lg:flex-row m-10 bg-bamboo lg:m-30 gap-x-3  min-h-50  justify-between items-center    rounded-xl   shadow-md shadow-gray-500 dark:shadow-gray-800 bg-zinc-50    overflow-hidden">
            <Image 
                src={Panda}
                alt="Logo panda image"
                placeholder="blur"
                loading="lazy"
                className="w-full h-full relative z-1  rounded-[inherit] hidden lg:block"
            />
                {children} 
        </div>
    )

}
