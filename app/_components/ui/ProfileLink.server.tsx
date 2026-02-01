import { UserRound } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';
export default function ProfileButton({className,children}: {className?:string, children?: ReactNode}) {
    return (
        <Link
            href="/profile"
            className={`${className} hover:invert-50`}>
            <UserRound />
            {children}
            
        </Link>
    );
}
