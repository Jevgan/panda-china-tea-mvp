'use client';
import Link from "next/link";

export default function Navigation({display}:{display: string}) {
    return (
        <div className={`align-middle gap-x-6 hidden lg:flex items-center  ${display}`}>
            {/* <div className="relative group"> */}
            {/*     <Link className="peer outline-none" href="/">Головна</Link> */}
            {/*     <span className="absolute w-full scale-x-0 h-0.5 inset-x-0 bottom-0  bg-black dark:bg-white rounded-full group-hover:scale-x-100 peer-focus:scale-x-100 transition-transform duration-300 "></span> */}
            {/* </div> */}
            {/**/}
            <div className="relative group">
                <Link className="peer outline-none" href="/catalog">Каталог</Link>
                <span className="absolute w-full scale-x-0 h-0.5 inset-x-0 bottom-0  bg-black dark:bg-white rounded-full group-hover:scale-x-100 peer-focus:scale-x-100 transition-transform duration-300 "></span>
            </div>

            <div className="relative group">
                <Link className="peer outline-none" href="/about">Про нас</Link>
                <span className="absolute w-full scale-x-0 h-0.5 inset-x-0 bottom-0  bg-black dark:bg-white rounded-full group-hover:scale-x-100 peer-focus:scale-x-100 transition-transform duration-300 "></span>
            </div>

            <div className="relative group">
                <Link className="peer outline-none" href="/contacts">Контакти</Link>
                <span className="absolute w-full scale-x-0 h-0.5 inset-x-0 bottom-0  bg-black dark:bg-white rounded-full group-hover:scale-x-100 peer-focus:scale-x-100 transition-transform duration-300 "></span>
            </div>

            <div className="relative group">
                <Link className="peer outline-none" href="/advice">Що обрати?</Link>
                <span className="absolute w-full scale-x-0 h-0.5 inset-x-0 bottom-0  bg-black dark:bg-white rounded-full group-hover:scale-x-100 peer-focus:scale-x-100 transition-transform duration-300 "></span>
            </div>

        </div>
    )
}
