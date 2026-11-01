"use client";

import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import Label from "../ui/Label";
import IconInput from "../ui/IconInput";
import { useState } from "react";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);
    return (
        <form className="space-y-5">

            {/* Email */}
            <div className="space-y-2">
                <Label labelText="Email" isRequired={true} />

                <IconInput Icon={Mail} type="email" placeholder="you@example.com" name="email" autoComplete="email" isRequired={true} />
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
                        required
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
            <button
                type="submit"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25 active:translate-y-0"
            >
                Sign In
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
        </form>
    )
}

export default LoginForm;