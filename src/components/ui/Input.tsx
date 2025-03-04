import { forwardRef, ReactElement } from "react";

interface InputProps {
    type: string;
    placeholder: string;
    startIcon?: ReactElement;
    className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type, placeholder, startIcon, className }, ref) => {
        return (
            <div className={`bg-slate-200 flex items-center w-full py-3 px-4 gap-3 rounded-3xl ${className}`}>
                {startIcon && <div className="text-gray-600">{startIcon}</div>}
                <input
                    ref={ref}
                    className="w-full bg-transparent text-black font-bold outline-none placeholder-gray-500"
                    type={type}
                    placeholder={placeholder}
                />
            </div>
        );
    }
);

Input.displayName = "Input";
