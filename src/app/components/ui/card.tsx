import { ReactNode } from 'react';

export function Card({ children, className }: { children: ReactNode, className?: string }) {
    return <div className={`bg-white dark:bg-gray-800 p-6 rounded-md shadow-md ${className}`}>{children}</div>;
  }
  
export function CardHeader({ children }: { children: ReactNode }) {
return <div className="mb-4">{children}</div>;
}

export function CardTitle({ children, className }: { children: ReactNode, className?: string }) {
return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
}

export function CardContent({ children }: { children: ReactNode }) {
return <div>{children}</div>;
}
