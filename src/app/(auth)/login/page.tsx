
import {
    Heart,
    ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";

function GoogleIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47a5.57 5.57 0 0 1-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82Z" />
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24Z" />
            <path fill="#FBBC05" d="M5.27 14.29A7.2 7.2 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.62H1.29a11.97 11.97 0 0 0 0 10.76l3.98-3.09Z" />
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42A11.46 11.46 0 0 0 12 0 11.99 11.99 0 0 0 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75Z" />
        </svg>
    );
}

export default function LoginPage() {

    return (
        <main className="grid min-h-screen bg-background lg:grid-cols-2">

            {/* Left Side - Illustration */}
            <section className="relative hidden min-h-screen flex-col justify-between overflow-hidden bg-secondary p-10 lg:flex xl:p-14">

                {/* Back Home */}
                <Link
                    href="/"
                    className="mx-auto absolute top-10 left-4 flex w-fit items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                </Link>

                {/* Background Decorations */}
                <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

                {/* Main Illustration */}
                <div className="relative z-10 mx-auto w-full max-w-lg">

                    <div className="absolute -left-5 top-10 h-20 w-20 rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-sm" />
                    <div className="absolute -right-5 bottom-20 h-24 w-24 rounded-full border border-primary/10 bg-primary/5" />

                    <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/50 p-4 shadow-2xl shadow-primary/10 backdrop-blur-md">
                        <Image
                            src="/images/login-illustration.png"
                            alt="People working together to build a better community"
                            width={1024}
                            height={1024}
                            priority
                            className="max-w-md rounded-[1.5rem] object-contain"
                        />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-2xl border border-border bg-card px-5 py-3 shadow-xl">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Heart className="h-5 w-5 fill-current" />
                        </div>
                        <div>
                            <p className="text-sm font-bold">Make a Difference</p>
                            <p className="text-xs text-muted-foreground">One action at a time.</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 mx-auto max-w-md text-center">
                    <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-secondary-foreground">
                        Upliftly Communities.
                        <br />
                        <span className="text-primary">Stronger Together.</span>
                    </h2>
                </div>
            </section>

            {/* Right Side - Login Form */}
            <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-3 py-0 sm:px-10">

                <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

                <div className="relative w-full max-w-md">

                    {/* Login Card */}
                    <div className="rounded-3xl border border-border bg-card p-4 shadow-soft sm:p-7">

                        {/* Heading */}
                        <div className="mb-8">

                            <h1 className="font-header text-3xl font-bold tracking-tight">
                                Welcome Back!
                            </h1>

                            <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                Sign in to your account and continue making
                                a positive impact.
                            </p>
                        </div>

                        {/* Form */}
                        <LoginForm />

                        {/* Divider */}
                        <div className="my-7 flex items-center gap-4">
                            <span className="h-px flex-1 bg-border" />
                            <span className="text-xs font-medium text-muted-foreground">
                                OR CONTINUE WITH
                            </span>
                            <span className="h-px flex-1 bg-border" />
                        </div>

                        {/* Google Login */}
                        <button
                            type="button"
                            className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-border bg-background text-sm font-semibold transition-all hover:border-primary/40 hover:bg-primary/5"
                        >
                            <GoogleIcon />
                            Continue with Google
                        </button>

                        {/* Register */}
                        <p className="mt-8 text-center text-sm text-muted-foreground">
                            Don't have an account?{" "}
                            <Link
                                href="/register"
                                className="font-bold text-primary transition-colors hover:underline"
                            >
                                Create an account
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
