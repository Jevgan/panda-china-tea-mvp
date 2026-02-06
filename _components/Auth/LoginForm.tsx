import login from "@/_actions/login";

export default function LoginForm() {
    return (
        <form 
            action={login}
            className="border-b border-gray-500"
            
        >
            <label htmlFor="email">Email</label>
            <input
                className=""
                type="email" 
                name="email" 
                id="email" 
                placeholder="user@gmail.com" 
                aria-placeholder="Email"
            />

        </form>
    )

}
