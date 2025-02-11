interface ButtonProps {
    label: string;
    ariaLabel: string;
    disabled: boolean
}

export default function Button({ label, ariaLabel, disabled }: ButtonProps) {
    return (
        <button 
            className={`w-full p-3 text-white font-semibold rounded-md ${disabled ? "bg-blue-400" : "bg-blue-600"} hover:bg-blue-700`}
            aria-label={ariaLabel}
            disabled={disabled}
        >
            {label}
        </button>
    )
}