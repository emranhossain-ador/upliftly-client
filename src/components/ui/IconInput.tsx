import Input from "./Input";
import { LucideIcon } from "lucide-react";

interface IconInputProps {
    Icon: LucideIcon;
    type: string;
    placeholder: string;
    name: string;
    autoComplete: string;
    isRequired: boolean;
}

const IconInput = ({ Icon, type, placeholder, name, autoComplete, isRequired }: IconInputProps) => {
    return (
        <div className="group relative">
            <Icon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <Input
                type={type}
                placeholder={placeholder}
                name={name}
                autoComplete={autoComplete}
                isRequired={isRequired}
            />
        </div>
    )
}

export default IconInput;