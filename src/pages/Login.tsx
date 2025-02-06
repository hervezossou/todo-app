import InputField from "../components/InputField"
import Button from "../components/Button"
import { Link } from "react-router"
//import { useAuth } from "../hooks/useAuth"
import { validateEmail } from "../utils/validateEmail"
import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //const { user, login } = useAuth()

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-neutral-800 p-6">
            <h2 className="mb-8 text-xl font-semibold text-neutral-50 md:text-3xl">Sign in to your account</h2>
            <form className="flex flex-col gap-6 w-full max-w-sm">
                <InputField 
                    type="email" 
                    label="Email"
                    placeholder="Enter your email"
                    value={email} 
                    onChange={setEmail}
                    validate={validateEmail}
                />
                <InputField 
                    type="password" 
                    label="Password" 
                    placeholder="Enter your password"
                    value={password}
                    onChange={setPassword}
                    validate={(value) => value.length < 6 ? "Password must be at least 6 characters" : ""}
                />
                <Button label="Sign in" ariaLabel="Log in to your account" />
                <Link 
                    to="/resetpwd" 
                    className="text-sm text-left text-neutral-50 hover:text-blue-500 md:text-base">Forgot your password?
                </Link>
            </form>
            <p className="mt-4 text-sm text-neutral-50 md:text-base">
                Don't have an account?<span> </span>
                <Link 
                    to="/register" 
                    className="text-sm text-left text-blue-500 hover:underline md:text-base"
                >
                    Create one
                </Link>
            </p>
        </section>
    )
};