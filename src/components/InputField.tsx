import { useState } from "react";

interface InputFieldProps {
    label: string;
    type: string;
    placeholder: string;
}

export default function InputField({ label, type, placeholder }: InputFieldProps) {
    const [value, setValue] = useState("")

    return (
        <div className="flex flex-col gap-2">
            <label className="text-neutral-100 text-sm font-semibold md:text-base">{label}</label>
            <input 
                type={type}
                name={type}
                value={value}
                placeholder={placeholder}
                className="w-full p-3 bg-neutral-100 rounded-md focus:outline-blue-500" 
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}