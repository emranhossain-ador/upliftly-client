
"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import TopHeader from "./TopHeader";
import Footer from "./Footer";
import { HeartHandshake, Sparkles } from "lucide-react";

const LoadingScreen = () => {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-5">

            {/* Background Glow */}
            <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-sky-400/10 blur-[100px]" />

            <div className="relative flex w-full max-w-sm flex-col items-center text-center">

                <div className="relative mb-7">
                    <div className="absolute inset-0 animate-ping rounded-[28px] bg-primary/20 opacity-30" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-[28px] bg-primary text-primary-foreground shadow-xl shadow-primary/20">
                        <HeartHandshake size={38} strokeWidth={1.8} />
                    </div>

                    <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-4 border-background bg-sky-500 text-white">
                        <Sparkles size={13} />
                    </div>
                </div>

                {/* Brand */}
                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                    Upliftly<span className="text-primary">.</span>
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Bringing communities together for a better tomorrow.
                </p>

                {/* Loading Indicator */}
                <div className="mt-10 w-full space-y-4">
                    <div className="mx-auto flex items-center justify-center gap-2">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary" />
                    </div>

                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div className="h-full w-1/3 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-primary" />
                    </div>

                    <p className="text-xs font-medium tracking-wide text-muted-foreground">
                        Preparing your experience...
                    </p>
                </div>

                {/* Footer */}
                <div className="mt-16 flex items-center gap-2 text-xs text-muted-foreground">
                    <Sparkles size={13} className="text-primary" />
                    Making a difference, together.
                </div>
            </div>

            <style jsx>{`
                @keyframes loading {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(300%); }
                }
            `}</style>
        </div>
    );
};

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    const hideLayout = ["/login", "/register"].includes(pathname);

    return (
        <>
            {!hideLayout && <TopHeader />}

            <main className="flex-1">
                {children}
            </main>

            {!hideLayout && <Footer />}
        </>
    );
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <LayoutContent>{children}</LayoutContent>
        </Suspense>
    );
};

export default MainLayout;
