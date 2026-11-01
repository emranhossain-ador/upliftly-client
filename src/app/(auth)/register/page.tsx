"use client"

import RegisterForm from "@/components/auth/RegisterForm";
import Image from "next/image";
import Link from "next/link";


const RegisterPage = () => {




    return (
        <div className="grid min-h-screen bg-background lg:grid-cols-2">
            <div className="order-2 flex items-center justify-center px-4 py-2 sm:p-7 lg:order-1">
                <div className="w-full max-w-md rounded-2xl border bg-card p-4 md:p-7 shadow-soft">

                    <div className="text-center">
                        <h1 className="font-display text-2xl font-semibold">Create Account</h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Fill in your information to get started
                        </p>
                    </div>

                    <RegisterForm />

                    <p className="mt-6 text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/login" className="font-medium text-primary hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>

            <div className="relative order-1 hidden flex-col items-center justify-center gap-6 overflow-hidden bg-secondary p-10 lg:order-2 lg:flex">
                <Image
                    src="/images/register-illustration.png"
                    alt="A volunteer planting a seedling"
                    width={1024}
                    height={1024}
                    className="max-w-md rounded-2xl"
                />
                <h2 className="text-center font-display text-3xl font-bold text-secondary-foreground">
                    Join Our Community
                </h2>
                <p className="max-w-sm text-center text-sm text-muted-foreground">
                    Create your account and be part of something bigger.
                </p>
            </div>
        </div>
    );
}


export default RegisterPage;