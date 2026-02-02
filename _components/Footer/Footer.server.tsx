import { ReactNode } from "react";
import Navigation from "../Header/Navigation.client";
import MainLogo from "../ui/MainLogo";
import WorkingHours from "../ui/WorkingHours.server";
import Contacts from "./Contacts.server";

export default function Footer({ children }: { children?: ReactNode }) {
    return (
        <footer className="flex flex-col mb-10 mt-auto ">
            <section className="grid grid-cols-1 md:grid-cols-4 p-10 gap-8 border-gray-300 border-t border-b ">
                <div className="flex flex-col space-y-2">
                    <MainLogo textVisible={true} />
                    <div>
                        <h4 className="font-semibold my-4 text-lg uppercase">Опис</h4>
                        <p className="text-sm pb-6 border-b border-gray-200 dark:border-zinc-800 ">Вітаємо на cайті👋
                            Ми онлайн магазин китайського чаю🍵
                            У нас найкраща якість товару!
                            100% оригінал! Чай, який щоденно пʼємо самі🤝
                            Приємні ціни та великий асортимент.
                            🫖Також у нас можна придбати посуд для церемоній, аксесуари та подарункові набори🎁 </p>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold my-4 text-lg uppercase">Посилання</h4>
                    <Navigation display="flex flex-col gap-x-8 lg:gap-x-16 pb-6  border-b border-gray-200 dark:border-zinc-800" />
                </div>
                <Contacts />
                <WorkingHours />
            </section>
            <section className="flex flex-col gap-8 p-10 lg:flex-row items-center lg:justify-between justify-center w-full">
                <div className="text-gray-500">
                    <p className="text-xs"> &copy; 2026 Panda China Tea. All rights reserved.</p>
                    <p>
                        А Ви хочете такий сайт? Звертайтесь
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/Jevgan"
                            className="text-amber-900 font-semibold"
                        > &lt;Jevgan /&gt; </a>
                    </p>
                </div>
                <div className="self-end  p-3 h-12 rounded-full bg-linear-to-br from-gray-700 to-gray-500 via-gray-400">
                    Payment services Placeholder
                </div>
            </section>
        </footer>
    )

}
