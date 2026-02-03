import Link from "next/link";
import Image from "next/image";
import PandaLogo from "@/public/icon.svg";

export default function MainLogo({ className = "", textVisibleOnMobile }: { className?: string, textVisibleOnMobile: boolean }) {

    return (
        <Link href="/" className={`${className} flex items-center font-bold text-xl`} >
            <Image
                src={PandaLogo}
                alt="Main logotype"
                width={50}
                height={50}
            />
            <div className={`${textVisibleOnMobile ? "flex" : "hidden"} lg:flex flex-col leading-none`}>
                <span className="text-lg font-bold text-yellow-900 leading-5  uppercase tracking-tighter">Panda</span>
                <span className="ml-0.5 text-[12px] font-medium tracking-widest uppercase">China Tea</span>
            </div>
        </Link>
    )
}
