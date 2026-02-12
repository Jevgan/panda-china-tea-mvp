import Image from "next/image";
import { ReactNode } from "react";
import Panda from "@/public/panda_photo.webp";
import BGBamboo from "@/public/auth_background.svg";
import GoogleForm from "@/_components/Auth/GoogleForm";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative z-1 flex flex-col lg:flex-row   min-h-50  justify-between items-center    rounded-xl   shadow-md shadow-gray-500 dark:shadow-none bg-zinc-50 dark:bg-black    overflow-hidden">
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
            <div className="flex flex-col px-6 lg:px-12 py-6 w-full h-full">
                {children}
                <p className="text-gray-500 text-sm mx-auto mb-2">або</p>
                <GoogleForm />
            </div>
        </div>
    )

}
