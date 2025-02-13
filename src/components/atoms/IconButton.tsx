import clsx from "clsx";
import { ReactNode, MouseEventHandler } from "react";

interface IconButtonProps { 
    icon: ReactNode; // icon as React Component
    ariaLabel: string; // for accessibility
    isDisabled?: boolean; 
    variant?: "normal" | "edit" | "delete" | "complete"; // variant for styles
    size?: "small" | "medium" | "large"; // different sizes
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function IconButton({icon, ariaLabel, isDisabled = false, variant = "normal", size = "small", onClick = ()=> {} }: IconButtonProps) {
    const buttonStyles = clsx(
        "flex items-center justify-center rounded-full transition duration-300", // base style
        {
            "bg-neutral-50 text-neutral-800 hover:bg-neutral-200 hover:text-gray-950": variant === "normal" && !isDisabled, // button is normal and not disabled
            "bg-blue-300 text-white hover:bg-blue-400 hover:text-white": variant === "edit" && !isDisabled, // edit button not disabled
            "bg-red-300 text-red-600 hover:bg-red-400 hover:text-red-700": variant === "delete", // delete button
            "bg-green-300 text-green-600 hover:bg-green-400 hover:text-green-700": variant === "complete" && !isDisabled, // mark as complete
            "opacity-50 cursor-not-allowed": isDisabled,
            "hover:cursor-pointer": !isDisabled, 
            "p-3 text-sm": size === "small",
            "p-2 text-base": size === "medium",
            "p-3 text-lg": size === "large",
        }
    )
    return (
        <button 
            className={buttonStyles}
            disabled={isDisabled} 
            onClick={onClick}
            aria-label={ariaLabel}
            role="button"
        >
            {icon}
        </button>
    )
}