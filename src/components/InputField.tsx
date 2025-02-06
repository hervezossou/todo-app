import { useState } from "react";

interface InputFieldProps {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    validate: (value: string) => boolean | string;
    onChange: (value: string) => void;
}

export default function InputField({ label, type, placeholder, value, validate, onChange }: InputFieldProps) {
    const [error, setError] = useState("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        onChange(newValue)

        // Validate input and set error message
        if (validate) {
            const errorMessage = validate(newValue);
            setError(typeof errorMessage === 'string' ? errorMessage : "");
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <label className="text-neutral-100 text-sm font-semibold md:text-base">{label}</label>
            <input 
                type={type}
                name={type}
                value={value}
                placeholder={placeholder}
                aria-label={label}
                className="w-full p-3 bg-neutral-100 rounded-md focus:outline-blue-500" 
                onChange={handleChange}
            />
            {error && <p className="text-xs italic text-red-400">{error}</p>}
        </div>
    )
}