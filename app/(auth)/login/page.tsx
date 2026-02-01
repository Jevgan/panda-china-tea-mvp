export default function LoginPage() {
    return (
        <div className=" w-full h-full">
            <form>
                <label htmlFor="username" className="w-min h-12 rounded-xl border-amber-200 relative group bg-zinc-200 dark:bg-gray-800">

                    <p className="absolute top-0 left-1">Ім'я</p>
                    <input type="text" id="username" name="username" autoComplete="name"
                        className="outline-none "
                    />
                </label>
                <input type="password" name="password" autoComplete="current-password"
                    className="h-full"
                />
                <button type="submit">Увійти</button>
            </form>
        </div>
    )
}
