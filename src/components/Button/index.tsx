import clsx from "clsx";
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps {
    children: React.ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild = false }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp className={clsx(
                'py-2 px-3 bg-secundary rounded font-semibold, text-black text-sm w-full transition-colors hover:bg-secundary focus:ring-2 ring-white'
            )}>
                {children}
        </Comp>
    )
}