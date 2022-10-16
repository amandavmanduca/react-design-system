import clsx from "clsx";

export interface TextProps {
    size?: 'sm' | 'md' | 'lg',
    children: React.ReactNode;
    className?: string;
}

export function Text({ size = 'md', children, className }: TextProps) {
    return (
        <span className="bg-dark-background-color">
            <p className={clsx(
                'text-text-primary font-sans',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                },
                className
            )}>
                {children}
            </p>
        </span>
    )
}