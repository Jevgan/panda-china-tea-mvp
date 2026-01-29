import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "./_components/Header/Header.client";
import { Providers } from "./providers";
import Navigation from "./_components/Header/Navigation.client";
import SideMenu from "./_components/SidePanel/SideMenu.client";

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
            suppressHydrationWarning={true}
            lang="en">
            <body
                className={`${montserrat.variable} antialiased`}
            >

                <Providers>
                    <Header />
                    <SideMenu>
                        <Navigation display="flex-col"/>
                    </SideMenu>
                    <main className="min-h-screen">
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    );
}
