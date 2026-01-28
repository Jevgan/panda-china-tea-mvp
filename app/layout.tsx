import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "./_components/Header/Header.client";
import { Providers } from "./providers";

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
                    <main>
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    );
}
