import { Slot } from "@radix-ui/react-slot";
import React, { InputHTMLAttributes } from "react";

export interface TextInputRootProps {
    children: React.ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
    return (
        <div
        className='flex items-center h-12 gap-3 py-2 px-3 bg-primary w-full rounded focus-within:ring-2 ring-secundary'
        >
            {children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
    children: React.ReactNode
}

function TextInputIcon({ children }: TextInputIconProps) {
    return (
        <Slot className="w-6 h-6 text-secundary">
            {children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className="bg-transparent flex-1 outline-none text-text-primary text-xs placeholder:text-secundary"
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}