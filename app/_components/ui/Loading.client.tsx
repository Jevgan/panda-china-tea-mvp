'use client';

import { useEffect, useState } from "react";

const placeholders = [
    "Зачекайте, каталог настоюється...",
    "Скоро буде готовим...",
    "Зате у Вас є час обміркувати покупку...",
    "Ось зараз, вже скоро...",
    "Каталог соромиться, прошу зачекати...",
    "А Вам цікаво чому Да Хун Пао називають 'Великий червоний халат'?...",
]


export const LoadingCircle = () => <span className="rounded-full border-t-4 animate-spin h-10 w-10" />;

export default function Loading() {
    const [mounted, setMounted] = useState(false);
    const [placeholderInd, setPlaceholderInd] = useState(0);

    useEffect(() => {
        setMounted(true);
        const intervalId = setInterval(() => {
            setPlaceholderInd(prev => (prev + 1) % placeholders.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    if (!mounted) return <LoadingCircle />;

    return (
        <div className="w-full h-full grid place-items-center gap-y-2 animate-pulse">
            <p className="font-bold text-lg">{placeholders[placeholderInd]}</p>
            <LoadingCircle />
        </div>
    )
}
