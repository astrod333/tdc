import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function Container({ children, className, ...props }: ContainerProps) {
    return (
        <div className={cn("max-w-2xl mx-auto px-6 lg:px-8", className)} {...props}>
            {children}
        </div>
    );
}
