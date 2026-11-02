interface InputProps {
    type: string;
    placeholder?: string;
    name: string;
    id?: string;
    autoComplete?: string;
    isRequired?: boolean;
    className?: string;
}

const Input = ({
    type,
    placeholder,
    name,
    id,
    autoComplete,
    isRequired = false,
    className = "",
}: InputProps) => {
    return (
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            required={isRequired}
            className={`h-12 w-full rounded-xl border border-input bg-background pl-11 pr-4 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10 ${className}`}
        />
    );
};

export default Input;