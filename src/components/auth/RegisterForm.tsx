import { Mail, Image, User, EyeOff, Eye, Check, ArrowRight, Lock } from "lucide-react";
import IconInput from "../ui/IconInput";
import Label from "../ui/Label";
import React, { useState } from "react";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import SubmitButton from "../ui/SubmitButton";


type ErrorType = {
    name?: string;
    email?: string;
    password?: string;
}


const RegisterForm = () => {

    const [error, setErrors] = useState<ErrorType>({});
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const checks = [
        { label: "At least 6 characters", ok: password.length >= 6 },
        { label: "One uppercase letter", ok: /[A-Z]/.test(password) },
        { label: "One lowercase letter", ok: /[a-z]/.test(password) },
    ];

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const name = String(formData.get('name') ?? "").trim();
        const email = String(formData.get('email') ?? "").trim();
        const image = String(formData.get('imageUrl') ?? "").trim();
        const password = String(formData.get('password') ?? "").trim();


        //------ Validation check -------
        const newErrors: ErrorType = {};

        if (name.length <= 3) {
            newErrors.name = "Please enter your full name";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email.";
        }

        if (!/[A-Z]/.test(password)) {
            newErrors.password = "Password contain at least one uppercase letter";
        }

        if (!/[a-z]/.test(password)) {
            newErrors.password = "Password contain at least one lowercase letter";
        }

        if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long!";
        }


        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {

            setIsLoading(true);

            try {
                const { error } = await signUp.email({
                    name: name as string,
                    email: email,
                    image: image,
                    password: password
                });

                if (error) {
                    toast.error(error.message);
                } else {
                    form.reset();
                    setPassword('');
                    toast.success("Registration Successful");
                    router.push('/login');
                }
            } catch (err) {
                toast.error("Something went wrong!");
            } finally {
                setIsLoading(false);
            }

        }

    };



    return (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="space-y-1.5">
                <Label labelText="Full name" isRequired={true} />
                <IconInput
                    Icon={User}
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    name="name"
                />

                {
                    error?.name && <p className="mt-1.5 px-1 text-xs text-red-500">{error.name}</p>
                }
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
                {
                    error?.email && <p className="mt-1.5 px-1 text-xs text-red-500">{error.email}</p>
                }
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
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        defaultValue={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="new-password"
                        minLength={6}
                        maxLength={10}
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

                {
                    error?.password && <p className="mt-1.5 px-1 text-xs text-red-500">{error.password}</p>
                }

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


            <SubmitButton isLoading={isLoading} title="Sign Up" />

        </form>

    )
};

export default RegisterForm;