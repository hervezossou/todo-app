import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
    label: string;
    ariaLabel: string;
    variant?: "primary" | "secondary" | "danger";
    disabled?: boolean;
    icon?: ReactNode;
    onClick?: () => void;
}

export default function Button({ label, ariaLabel, variant = "primary", disabled = false, icon, onClick }: ButtonProps) {
    const baseStyles = "flex items-center justify-center gap-2 p-3 font-semibold rounded-md focus:outline-none transition";
    const variantStyles = {
        primary: `w-full ${disabled ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:cursor-pointer"} text-white`,
        secondary: `w-32 h-10 ${disabled ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300 hover:cursor-pointer"} text-black`,
        danger: "w-32 h-10 bg-red-300 text-red-600 hover:bg-red-400 hover:text-red-700 hover:cursor-pointer"
    }
    return (
        <button 
            className={clsx(baseStyles, variantStyles[variant])}
            aria-label={ariaLabel}
            disabled={disabled}
            onClick={onClick}
        >
            {icon}{label}
        </button>
    )
}