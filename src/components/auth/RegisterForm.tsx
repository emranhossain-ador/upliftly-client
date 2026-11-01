import { Mail, Image, User, EyeOff, Eye, Check, ArrowRight, Lock } from "lucide-react";
import IconInput from "../ui/IconInput";
import Label from "../ui/Label";
import { useState } from "react";



const RegisterForm = () => {


    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const checks = [
        { label: "At least 8 characters", ok: password.length >= 8 },
        { label: "One uppercase letter", ok: /[A-Z]/.test(password) },
        { label: "One lowercase letter", ok: /[a-z]/.test(password) },
    ];

    return (
        <form className="mt-6 space-y-4">
            <div className="space-y-1.5">
                <Label labelText="Full name" isRequired={true} />
                <IconInput
                    Icon={User}
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    name="name"
                />
            </div>
            <div className="space-y-1.5">
                <Label labelText="Email" isRequired={true} />
                <IconInput
                    Icon={Mail}
                    type="email"
                    autoComplete="email"
                    placeholder="Your email address..."
                    name="email"
                />
            </div>
            <div className="space-y-1.5">
                <Label labelText="Image Url" />
                <IconInput
                    Icon={Image}
                    type="url"
                    autoComplete="url"
                    placeholder="Your image url..."
                    name="imageUrl"
                />
            </div>
            <div className="space-y-1.5">
                <Label labelText="Password" isRequired={true} />
                <div className="group relative">
                    <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        defaultValue={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="new-password"
                        className="h-12 w-full rounded-xl border border-input bg-background pl-11 pr-4 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                </div>
                <ul className="space-y-1 pt-1">
                    {checks.map(({ label, ok }) => (
                        <li
                            key={label}
                            className={`flex items-center gap-1.5 text-xs ${ok ? "text-clean" : "text-muted-foreground"}`}
                        >
                            <Check className="h-3.5 w-3.5" />
                            {label}
                        </li>
                    ))}
                </ul>
            </div>

            <button type="submit" className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25 active:translate-y-0 cursor-pointer">
                Register
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
        </form>

    )
};

export default RegisterForm;