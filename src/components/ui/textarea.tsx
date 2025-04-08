import * as React from "react";
import { z } from "zod";

import { cn } from "@/lib/utils";

export interface TextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string; // Label text for the textarea
    schema?: z.ZodType<any>; // Optional Zod schema for validation
    error?: string; // External error message
    icon?: React.ReactNode
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ label, className, schema, error, icon, ...props }, ref) => {
        const [internalError, setInternalError] = React.useState<string | null>(null);

        const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
            if (schema) {
                try {
                    schema.parse(e.target.value); // Validate value using Zod schema
                    setInternalError(null); // Clear error if valid
                } catch (err: any) {
                    setInternalError(err.errors[0]?.message || "Invalid input"); // Set validation error
                }
            }

            // Call any additional onBlur passed via props
            if (props.onBlur) {
                props.onBlur(e);
            }
        };

        return (
            <div className="w-full mb-6 relative">
                {label && <label className="block text-sm font-medium text-[#B0B2B2] uppercase mb-1">{label}</label>}
                <textarea
                    className={cn(
                        "w-full border-b text-[#10242C] border-[#EBEEEF] bg-transparent pr-2 py-1 text-sm placeholder:text-muted-foreground focus:border-b-[#1C2A3A] focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
                        internalError || error ? "border-red-500" : "",
                        className
                    )}
                    ref={ref}
                    onBlur={handleBlur}
                    {...props}
                />
                {(internalError || error) && (
                    <p className="mt-1 text-sm text-red-500">
                        {internalError || error}
                    </p>
                )}
                <span className="absolute right-0 bottom-4">{icon}</span>
            </div>
        );
    }
);
TextArea.displayName = "TextArea";

export { TextArea };
