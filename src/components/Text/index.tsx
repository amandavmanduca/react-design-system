import clsx from "clsx";

export interface TextProps {
    size?: 'sm' | 'md' | 'lg',
    text: string;
}

export function Text({ size = 'md', text }: TextProps) {
    return (
        <span className="bg-dark-background-color">
            <p className={clsx(
                'text-primary-text-color font-sans',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                }
            )}>
                {text}
            </p>
        </span>
    )
}