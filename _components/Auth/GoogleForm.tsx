import signInWithGoogle from "@/_actions/signInWithGoogle";
import { GoogleIcon } from "../ui/SVG/Google";

export default function GoogleForm() {
    return (
        <form action={signInWithGoogle}>
            <button type="submit"
                className="flex items-center justify-center mx-auto font-bold cursor-pointer btn-primary shadow-md "
                aria-label="Login with google service"
            >
                <GoogleIcon />
                <p>Увійти</p>
            </button>
        </form>
    )
}
