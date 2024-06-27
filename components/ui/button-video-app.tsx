import { cn } from '@/libs/utils'
import React from 'react';

interface ButtonVideoAppProps {
    type?: 'button' | 'submit';
    href: string;
    label: string;
    className?: string;
}

const ButtonVideoApp: React.FC<ButtonVideoAppProps> = ({ href, label, className }) => {
    const handleClick = () => {
        window.location.href = href;
    };

    return (
        <button
            type="button"
            className={cn('py-3 px-4 border border-primary text-primary w-full rounded-lg hover:bg-primary/10 transition-colors duration-300 font-medium', className)}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

export default ButtonVideoApp;
