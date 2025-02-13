import clsx from "clsx";

interface ButtonProps {
    label: string;
    ariaLabel: string;
    variant?: "primary" | "secondary";
    disabled?: boolean;
    onClick?: () => void;
}

export default function Button({ label, ariaLabel, variant = "primary", disabled = false, onClick }: ButtonProps) {
    const baseStyles = "w-full p-3 font-semibold rounded-md focus:outline-none transition";
    const variantStyles = {
        primary: `${disabled ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"} text-white`,
        secondary: `${disabled ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"} text-black`,
    }
    return (
        <button 
            className={clsx(baseStyles, variantStyles[variant])}
            aria-label={ariaLabel}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    )
}