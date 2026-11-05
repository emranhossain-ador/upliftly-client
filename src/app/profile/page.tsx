"use client";
import {
    UserRound,
    Mail,
    Pencil,
    Heart,
    MapPin,
    CalendarDays,
    ShieldCheck,
    BadgeCheck,
    Sparkles,
} from "lucide-react";

import Image from "next/image";
import ProfileQuickAction from "@/components/ProfileQuickActions";
import { useSession } from "@/lib/auth-client";
import FormatDate from "@/components/ui/formatData";
import ProfileStatistics from "@/components/ProfileStatistics";
import ProfileEditBtn from "@/components/ProfileEditBtn";


export default function ProfilePage() {

    const session = useSession();
    const user = session?.data?.user;

    return (
        <main className="min-h-screen bg-background">

            {/* ================= HERO SECTION ================= */}
            <section className="relative isolate overflow-hidden border-b border-border bg-secondary">

                <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute right-1/4 top-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

                <div className="relative section-container flex min-h-62.5 items-center px-5 py-12 sm:px-8 lg:min-h-68.75 lg:px-10">

                    <div className="max-w-2xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-background/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur font-header">
                            <UserRound size={17} />
                            Profile Dashboard
                        </div>

                        <h1 className="font-header text-4xl font-extrabold tracking-tight text-secondary-foreground sm:text-5xl lg:text-6xl">
                            My <span className="text-primary">Profile</span>
                        </h1>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                            Your account details, joined events and the events
                            you organize.
                        </p>

                        <div className="mt-5 h-1.5 w-24 rounded-full bg-primary" />
                    </div>
                </div>
            </section>

            {/* ================= MAIN CONTENT ================= */}
            <section className="section-container mt-12 ">

                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">

                    {/* LEFT COLUMN */}
                    <div className="space-y-6 lg:col-span-7">

                        {/* Profile Card */}
                        <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">

                            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

                            <div className="relative p-6 sm:p-9">

                                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

                                    {/* Avatar */}
                                    <div className="relative mx-auto shrink-0 sm:mx-0">
                                        <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-[5px] border-background bg-primary/10 shadow-[0_0_0_3px] shadow-primary/40 sm:h-36 sm:w-36">

                                            {
                                                user?.image ? <Image src={user?.image} alt="avatar" width={100} height={100} className="w-full h-full object-cover rounded-full" />
                                                    :
                                                    <Image src={'/images/avatar.jpeg'} alt="avatar" width={100} height={100} className="w-full h-full object-cover rounded-full" />
                                            }

                                        </div>
                                    </div>

                                    {/* User Details */}
                                    <div className="min-w-0 flex-1 text-center sm:text-left">
                                        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">

                                            <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">{user?.name}</h2>

                                            {user?.emailVerified && <BadgeCheck size={24} className="fill-primary text-primary-foreground" />}

                                        </div>

                                        <div className="mt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground sm:justify-start">
                                            <Mail size={17} className="shrink-0 text-primary" />
                                            <span className="break-all">{user?.email}</span>
                                        </div>

                                        <div className="mt-4 flex justify-center sm:justify-start">
                                            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                                                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                                Active Member
                                            </span>
                                        </div>

                                    </div>

                                    {/* Edit Button */}
                                    <ProfileEditBtn />

                                </div>

                                <div className="my-8 border-t border-border" />

                                {/* Statistics */}
                                <ProfileStatistics userId={user?.id as string} />

                            </div>
                        </div>

                        {/* Member Information */}
                        <div className="grid grid-cols-1 gap-4 rounded-3xl border border-border bg-card p-5 shadow-sm sm:grid-cols-2 sm:p-7">

                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Member Since</p>
                                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                                        <CalendarDays size={14} />
                                        {user ? FormatDate(user?.createdAt) : 'N/A'}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 border-t border-border pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Location</p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Dhaka, Bangladesh
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Community Quote */}
                        <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-linear-to-r from-primary/10 via-secondary to-primary/5 p-5 sm:p-8">
                            <Sparkles className="absolute -right-4 -top-5 h-32 w-32 text-primary/10" />
                            <div className="relative flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <Heart size={25} />
                                </div>
                                <div>
                                    <p className="font-display text-lg font-bold italic">
                                        "Together we can build a stronger community."
                                    </p>
                                    <p className="mt-1 text-xs font-medium text-muted-foreground">
                                        Every small action makes a big difference.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - QUICK ACTIONS */}
                    <ProfileQuickAction />

                </div>
            </section>
        </main>
    );
}
