'use client';

import { ThemeProvider } from "./_components/features/ThemeProvider.client";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )


}
