interface ButtonProps {
    label: string;
    ariaLabel: string;
}

export default function Button({ label, ariaLabel }: ButtonProps) {
    return (
        <button 
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
            aria-label={ariaLabel}
        >
            {label}
        </button>
    )
}