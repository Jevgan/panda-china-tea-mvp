import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header/Header.server";
import { Providers } from "./providers";
import Navigation from "./_components/Header/Navigation.client";
import SideMenu from "./_components/SideMenu/SideMenu.client";
import Wrapper from "./_components/ui/Wrapper";
import BottomNavBar from "./_components/BottomNavBar/BottomNavBar";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Panda China Tea",
    description: "A shop that provides a lot of a splendid tea sorts, feel the relaxation of pouring into a cup🍵.",
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            suppressHydrationWarning
            lang="uk">
            <body
                className={`${montserrat.variable} antialiased overflow-x-hidden relative min-h-screen w-full`}
            >

                <Providers>
                        <Wrapper />
                        <Header />
                        <SideMenu>
                            <Navigation display="flex-col" />
                        </SideMenu>
                        <main className="mt-16">
                            {children}
                        </main>
                        <BottomNavBar />
                </Providers>
            </body>
        </html >
    );
}
