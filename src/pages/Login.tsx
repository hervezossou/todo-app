import InputField from "../components/InputField"
import Button from "../components/Button"
import { Link } from "react-router"

export default function Login() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-neutral-800 p-6">
            <h2 className="mb-8 text-xl font-semibold text-neutral-50 md:text-3xl">Sign in to your account</h2>
            <form className="flex flex-col gap-6 w-full max-w-sm">
                <InputField type="email" label="Email" placeholder="Email" />
                <InputField type="password" label="Password" placeholder="Password" />
                <Button label="Sign in" />
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