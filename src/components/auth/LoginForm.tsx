"use client";

import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import Label from "../ui/Label";
import IconInput from "../ui/IconInput";
import React, { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import SubmitButton from "../ui/SubmitButton";


type ErrorType = {
    email?: string;
    password?: string;
}

const LoginForm = () => {

    const [error, setErros] = useState<ErrorType>({});
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const email = String(formData.get('email') ?? "").trim();
        const password = String(formData.get('password') ?? "").trim();


        const newErrors: ErrorType = {};

        if (!email) {
            newErrors.email = "Email is required!";
        }

        if (!password) {
            newErrors.password = "Password is required!";
        }

        setErros(newErrors);

        if (Object.keys(newErrors).length === 0) {

            setIsLoading(true);

            try {
                const { error } = await signIn.email({
                    email: email as string,
                    password: password as string
                });

                if (error) {
                    toast.error(error.message);
                } else {
                    form.reset();
                    toast.success("Login Success");
                    router.push('/events');
                }

            } catch (error) {
                toast.error("Login Failed");
            } finally {
                setIsLoading(false);
            }
        }

    }

    return (
        <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div className="space-y-2">
                <Label labelText="Email" isRequired={true} />

                <IconInput Icon={Mail} type="email" placeholder="you@example.com" name="email" autoComplete="email" />
                {
                    error?.email && <p className="mt-1.5 px-1 text-xs text-red-500">{error.email}</p>
                }

            </div>

            {/* Password */}
            <div className="space-y-2">
                <Label labelText="Password" isRequired={true} />
                <div className="group relative">
                    <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />

                    <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        minLength={6}
                        maxLength={10}
                        className="h-12 w-full rounded-xl border border-input bg-background pl-11 pr-12 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(v => !v)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-primary"
                    >
                        {showPassword
                            ? <EyeOff className="h-4 w-4" />
                            : <Eye className="h-4 w-4" />
                        }
                    </button>
                </div>
                {
                    error?.password && <p className="mt-1.5 px-1 text-xs text-red-500">{error.password}</p>
                }

            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground">
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 cursor-pointer rounded border-input accent-primary"
                    />
                    Remember me
                </label>

                <Link
                    href="/forgot-password"
                    className="text-xs font-semibold text-primary transition-colors hover:underline"
                >
                    Forgot password?
                </Link>
            </div>

            {/* Login Button */}
            <SubmitButton isLoading={isLoading} title="Sign In" />
        </form>
    )
}

export default LoginForm;