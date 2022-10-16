import clsx from "clsx";
import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Button({ children, asChild = false, className, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp className={clsx(
                'py-2 px-3 bg-secundary rounded font-semibold, text-black text-sm w-full transition-colors hover:bg-secundary focus:ring-2 ring-white',
                className
                )}
            {...props}
        >
                {children}
        </Comp>
    )
}