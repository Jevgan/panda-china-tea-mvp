export default function LoginButton() {
    return (
        <div className="h-10 px-5 rounded-xl dark:bg-zinc-200 dark:text-black bg-gray-800 text-white hover:brightness-75 hidden lg:block">
            <button
                className="w-full h-full font-semibold "
                type="submit"
            >
                Увійти
            </button>
        </div>
    )
}
