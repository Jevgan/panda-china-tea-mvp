import Image from "next/image";
import { ReactNode } from "react";
import Panda from "@/public/panda_photo.webp";
import BGBamboo from "@/public/auth_background.svg";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative z-1 flex flex-col lg:flex-row m-10 lg:m-30 min-h-50  justify-between items-center    rounded-xl   shadow-md shadow-gray-500 dark:shadow-none bg-zinc-50 dark:bg-black    overflow-hidden">
            <Image 
                src={Panda}
                alt="Logo panda image"
                placeholder="blur"
                loading="lazy"
                className="w-full h-full z-1 relative rounded-[inherit] hidden lg:block"
            />
            <Image 
                src={BGBamboo}
                alt="Login form background"
                loading="lazy"
                className="w-full h-full -z-1  absolute  left-5 right-0 opacity-5 dark:opacity-20 dark:invert-50"
            />
                {children} 
        </div>
    )

}
