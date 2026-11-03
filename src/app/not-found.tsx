
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Compass,
    Home,
    SearchX,
} from "lucide-react";

export default function NotFound() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-5 py-16 text-foreground">

            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
                <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />

                <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:45px_45px]" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-2xl text-center">

                {/* Icon */}
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-primary/20 bg-primary/10 text-primary shadow-lg shadow-primary/5">
                    <SearchX size={38} strokeWidth={1.7} />
                </div>

                {/* 404 */}
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-primary">
                    Error 404
                </p>

                <h1 className="text-6xl font-black tracking-tight sm:text-8xl">
                    4<span className="text-primary">0</span>4
                </h1>

                <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
                    Oops! Page not found
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                    The page you are looking for might have been removed,
                    had its name changed, or is temporarily unavailable.
                </p>

                {/* Buttons */}
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

                    <Link
                        href="/"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
                    >
                        <Home size={17} />
                        Back to Home
                        <ArrowRight size={16} />
                    </Link>

                    <Link
                        href="/events"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-accent sm:w-auto"
                    >
                        <Compass size={17} />
                        Explore Events
                    </Link>

                </div>

                {/* Footer */}
                <div className="mt-16 border-t border-border pt-6">
                    <p className="text-xs text-muted-foreground">
                        Lost your way? Let&apos;s get you back to{" "}
                        <Link
                            href="/"
                            className="font-semibold text-primary transition-colors hover:underline"
                        >
                            Upliftly
                        </Link>
                        .
                    </p>
                </div>

            </div>
        </main>
    );
}
