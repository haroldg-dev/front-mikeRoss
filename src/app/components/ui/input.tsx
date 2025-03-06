interface InputProps {
  type: string;
  placeholder?: string;
  [key: string]: any;
}

export function Input({ type, placeholder, ...props }: InputProps) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    );
  }
  