interface ButtonProps {
    label: string;
}

export default function Button({ label }: ButtonProps) {
    return (
        <button className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
            {label}
        </button>
    )
}