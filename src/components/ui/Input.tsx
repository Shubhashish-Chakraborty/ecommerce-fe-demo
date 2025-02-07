import { forwardRef, ReactElement } from "react";

interface InputProps {
    type: string;
    placeholder: string;
    startIcon: ReactElement;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type, placeholder, startIcon }, ref) => {
        return (
            <div className="bg-custom2 flex py-3 px-6 gap-3 min-w-96 max-w-md rounded-3xl">
                <div className="">
                    {startIcon}
                </div>
                <input
                    ref={ref}
                    className="w-full px-1 placeholder-text text-black outline-none"
                    type={type}
                    placeholder={placeholder}
                />
            </div>
        );
    }
);

Input.displayName = "Input"; // For React DevTools