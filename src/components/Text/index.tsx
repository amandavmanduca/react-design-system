import clsx from "clsx";

export interface TextProps {
    size?: 'sm' | 'md' | 'lg',
    children: React.ReactNode;
}

export function Text({ size = 'md', children }: TextProps) {
    return (
        <span className="bg-dark-background-color">
            <p className={clsx(
                'text-text-primary font-sans',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                }
            )}>
                {children}
            </p>
        </span>
    )
}