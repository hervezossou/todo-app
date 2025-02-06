import { Link } from "react-router";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function Register() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-neutral-800 p-6">
            <h2 className="mb-8 text-2xl font-semibold text-neutral-50 md:text-3xl lg:text-4xl">Create an account</h2>
            <form className="flex flex-col gap-6 w-full max-w-sm">
              <InputField type="email" label="Email" placeholder="Email" />
              <InputField type="password" label="Password" placeholder="Password" />
              <InputField type="password" label="Confirm Password" placeholder="Confirm Password" />
              <Button label="Sign up" />
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