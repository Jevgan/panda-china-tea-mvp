import Link from "next/link";

export default function LoginLink() {
    return (
        <Link
            href="/login"
            className="btn-primary hidden lg:flex font-semibold"
        >
            Увійти
        </Link>
    )
}
