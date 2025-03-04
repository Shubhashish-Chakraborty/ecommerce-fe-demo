import { ReactElement } from "react";

const variantStyle = {
    primary: "bg-black text-white font-bold hover:bg-gray-700 rounded-full",
    secondary: "bg-custom-3 border border-blue-500 text-purple-200 font-bold",
    other: "bg-red-700 border border-black text-white font-bold",
    notAllowed: "bg-red-500 border border-black text-white font-bold cursor-not-allowed",
    admin: "bg-purple-700 border border-black text-white font-bold cursor-grabbing"
};

const defaultStyles = "flex items-center justify-center px-6 py-3 transition-all duration-500 hover:-translate-y-1 cursor-pointer w-full md:w-auto";

export const Button = ({ variant, text, startIcon, endIcon, onClick, className }: {
    variant: "primary" | "secondary" | "other" | "notAllowed" | "admin";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    className?: string;
}) => {
    return (
        <button
            onClick={onClick}
            className={`${variantStyle[variant]} ${defaultStyles} ${className}`}
        >
            {startIcon && <div className="mr-2">{startIcon}</div>}
            {text}
            {endIcon && <div className="ml-2">{endIcon}</div>}
        </button>
    );
};
