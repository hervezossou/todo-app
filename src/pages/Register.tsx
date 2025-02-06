import { Link } from "react-router";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { validateEmail } from "../utils/validateEmail";
import { useState } from "react";

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    /*const userData = {
        "email": email,
        "password": password,
        "confirmedPassword": confirmPassword,
    }

    console.log("User: ", JSON.stringify(userData))*/

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-neutral-800 p-6">
            <h2 className="mb-8 text-2xl font-semibold text-neutral-50 md:text-3xl lg:text-4xl">Create an account</h2>
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
              <InputField 
                type="password" 
                label="Confirm Password"
                placeholder="Confirm your password"
                value={confirmPassword} 
                onChange={setConfirmPassword}
                validate={(value) => value !== password ? "Passwords do not match" : ""} 
              />
              <Button label="Sign up" ariaLabel="Create your account" />
          </form>
          <p className="mt-6 text-sm text-neutral-50 md:text-base">
            Already have an account?<span> </span>
            <Link 
                to="/login" 
                className="text-sm text-left text-blue-500 hover:underline md:text-base"
            >
                    Sign in
            </Link>
        </p>
        </section>
    );
};