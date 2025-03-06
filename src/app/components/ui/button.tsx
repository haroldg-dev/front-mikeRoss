import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
}

export function Button({ children, disabled, ...props }: ButtonProps) {
    return (
      <button
        className={`w-full p-2 rounded-md ${
          disabled ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        } text-white`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
  