'use client';

import { ThemeProvider } from "@/components/features/ThemeProvider";

export function Providers({ children }: { children: React.ReactNode }) {
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    {children}
    </ThemeProvider>


}
