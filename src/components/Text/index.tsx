import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

export interface TextProps {
    size?: 'sm' | 'md' | 'lg',
    children: React.ReactNode;
    className?: string;
    asChild?: boolean;
}

export function Text({ size = 'md', children, className, asChild = false }: TextProps) {
    const Comp = asChild ? Slot : 'span'
    return (
        <Comp className={clsx(
                'text-text-primary font-sans',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                },
                className
            )}>
                {children}
        </Comp>
    )
}