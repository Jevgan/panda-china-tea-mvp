import GoogleForm from "@/_components/Auth/GoogleForm";
import LoginForm from "@/_components/Auth/LoginForm";

export default async function LoginPage() {

    return (
        <div className="flex flex-col px-6 lg:px-12 w-full h-full">
            <LoginForm />
            <p className="text-gray-500 text-sm mx-auto mb-2">Інші способи входу</p>
            <GoogleForm />
        </div>
    )
}
