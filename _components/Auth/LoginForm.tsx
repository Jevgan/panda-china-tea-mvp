'use client';
import login from "@/_actions/login";
import { CircleAlert, Eye, EyeClosed } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import Loading from "../ui/Loading.client";

const initialState = {
    message: '',
}

export default function LoginForm() {
    const [state, formAction] = useActionState(login, initialState);
    const [passwordVisible, setPasswordVisible] = useState(false);
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form
            action={formAction}
            className="flex flex-col  border-b pb-4 mb-2 border-gray-500"


        >
            <h3 className="text-3xl font-bold mx-auto mb-2">Вхід</h3>
            <div>
                <label className="text-[14px]  inline-block ml-2 " htmlFor="email">Email</label>
                <div className="relative flex h-12  mb-4 items-center  border border-gray-500 outline-none rounded-xl p-2 ">
                    <input
                        className="h-full w-full outline-none font-medium "
                        type="email"
                        name="email"
                        id="email"
                        placeholder="user@gmail.com"
                        aria-placeholder="Email"
                    />
                </div>
            </div>
            <div>
                <label className="text-[14px] inline-block ml-2" htmlFor="password">Пароль</label>
                <div className="relative flex items-center h-12  mb-2  border border-gray-500 outline-none rounded-xl p-2">
                    <input
                        className={`${(passwordVisible || !password) ? "font-medium" : "font-black"} w-full h-full outline-none `}
                        type={`${passwordVisible ? "text" : "password"}`}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        name="password"
                        id="password"
                        placeholder="Введіть пароль"
                    />
                    <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className={`${password ? "visible" : "hidden"} ml-1 relative right-0 h-6 w-6`}>

                        <Eye className={`${passwordVisible ? "opacity-100" : "opacity-0 "} transition-opacity duration-300 absolute left-0 top-0`} />
                        <EyeClosed className={`${passwordVisible ? "opacity-0 " : "opacity-100"} transition-opacity absolute left-0 top-0 `} />

                    </button>
                </div>
                <div className="ml-2 text-red-400 inline-flex items-center gap-x-1">
                    <CircleAlert size={16}/>
                    <small className="text-[10px] lg:text-sm">Error</small>
                </div>

            </div>
            <button className=" flex self-end text-gray-500 hover:text-black dark:hover:text-white transition-colors" type="button">Забули пароль?</button>
            <button className="btn-primary my-2 font-semibold" type="submit">Ввійти</button>

        </form>
    )

}
