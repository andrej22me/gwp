import * as React from "react";
import { z } from "zod";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string; // Label text for the input field
    schema?: z.ZodType<any>; // Optional Zod schema for validation
    error?: string; // External error message
    icon?: React.ReactNode; // Optional icon to display inside the input field
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, className, type, schema, error, icon, ...props }, ref) => {
        const [internalError, setInternalError] = React.useState<string | null>(null);

        // Validate input value with Zod schema
        const validate = (value: string) => {
            if (schema) {
                try {
                    schema.parse(value); // Validate value using Zod schema
                    setInternalError(null); // Clear error if valid
                } catch (err: any) {
                    setInternalError(err.errors[0]?.message || "Invalid input"); // Set validation error
                }
            }
        };

        // Handle input change and validation on every keystroke (optional)
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            validate(e.target.value); // Validate the input value

            // Call any additional onChange passed via props
            if (props.onChange) {
                props.onChange(e);
            }
        };

        // Handle blur event for validation
        const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
            validate(e.target.value); // Validate when the input loses focus

            // Call any additional onBlur passed via props
            if (props.onBlur) {
                props.onBlur(e);
            }
        };

        return (
            <div className="w-full mb-6 relative">
                {label && <label className="block text-sm font-medium text-[#B0B2B2] uppercase mb-1">{label}</label>}
                <input
                    type={type}
                    className={cn(
                        "w-full border-b border-[#EBEEEF] h-10 bg-transparent text-[#10242C] pr-2 py-2 text-sm placeholder:text-muted-foreground focus:border-b-[#1C2A3A] focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
                        internalError || error ? "border-red-500" : "", // Add red border on error
                        className
                    )}
                    ref={ref}
                    onChange={handleChange}  // Validate on change
                    onBlur={handleBlur}      // Validate on blur
                    {...props}
                />
                {(internalError || error) && (
                    <p className="mt-1 text-sm text-red-500">
                        {internalError || error}
                    </p>
                )}
                <span className="absolute right-0 bottom-2">{icon}</span>
            </div>
        );
    }
);

Input.displayName = "Input";

export { Input };
