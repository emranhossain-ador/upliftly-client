
"use client";

import { useState } from "react";
import Link from "next/link";
import {
    UserRound,
    Mail,
    Pencil,
    CalendarCheck,
    ClipboardList,
    Plus,
    Heart,
    MapPin,
    CalendarDays,
    ShieldCheck,
    ArrowRight,
    Users,
    Lightbulb,
    BadgeCheck,
    Sparkles,
} from "lucide-react";
import Image from "next/image";

const quickActions = [
    {
        title: "My Joined Events",
        description: "Every event you have signed up for.",
        href: "/joined-events",
        count: 5,
        icon: CalendarCheck,
        color: "bg-blue-500/10 text-blue-600",
    },
    {
        title: "Manage My Events",
        description: "Edit or remove events you organize.",
        href: "/manage-events",
        count: 6,
        icon: ClipboardList,
        color: "bg-violet-500/10 text-violet-600",
    },
    {
        title: "Create New Event",
        description: "Organize an event for your community.",
        href: "/create-event",
        count: null,
        icon: Plus,
        color: "bg-emerald-500/10 text-emerald-600",
    },
];




export default function ProfilePage() {

    const [profile, setProfile] = useState({
        name: "Ersan Hosain",
        email: "ersan@example.com",
        photoURL: "",
        location: "Dhaka, Bangladesh",
        memberSince: "Nov 2, 2026",
    });



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
            <section className="section-container my-14 md:my-18">

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
                                            <Image src={'/images/avatar.jpeg'} alt="avatar" width={100} height={100} className="w-full h-full object-cover rounded-full" />
                                        </div>
                                    </div>

                                    {/* User Details */}
                                    <div className="min-w-0 flex-1 text-center sm:text-left">
                                        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                                            <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                                                {profile.name}
                                            </h2>
                                            <BadgeCheck
                                                size={24}
                                                className="fill-primary text-primary-foreground"
                                            />
                                        </div>

                                        <div className="mt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground sm:justify-start">
                                            <Mail size={17} className="shrink-0 text-primary" />
                                            <span className="break-all">{profile.email}</span>
                                        </div>

                                        <div className="mt-4 flex justify-center sm:justify-start">
                                            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                                                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                                Active Member
                                            </span>
                                        </div>
                                    </div>

                                    {/* Edit Button */}
                                    <button
                                        className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-primary/20 bg-background px-5 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary hover:bg-primary/5"
                                    >
                                        <Pencil size={16} />
                                        Edit Profile
                                    </button>
                                </div>

                                <div className="my-8 border-t border-border" />

                                {/* Statistics */}
                                <div className="grid grid-cols-3 gap-2 sm:gap-4">

                                    <div className="rounded-2xl bg-secondary p-3 text-center sm:p-5">
                                        <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12">
                                            <CalendarCheck size={23} />
                                        </div>
                                        <h3 className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
                                            5
                                        </h3>
                                        <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                                            Joined Events
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-secondary p-3 text-center sm:p-5">
                                        <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12">
                                            <ClipboardList size={23} />
                                        </div>
                                        <h3 className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
                                            6
                                        </h3>
                                        <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                                            Organized Events
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-secondary p-3 text-center sm:p-5">
                                        <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12">
                                            <Heart size={23} />
                                        </div>
                                        <h3 className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
                                            24+
                                        </h3>
                                        <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                                            Community Impact
                                        </p>
                                    </div>
                                </div>
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
                                        {profile.memberSince}
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
                                        {profile.location}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Community Quote */}
                        <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-linear-to-r from-primary/10 via-secondary to-primary/5 p-6 sm:p-8">
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
                    <aside className="lg:col-span-5">

                        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">

                            {/* Header */}
                            <div className="relative overflow-hidden bg-linear-to-r from-[#0b2545] to-[#134074] p-6 text-white sm:p-7">
                                <div className="absolute -right-5 -top-10 h-36 w-36 rounded-full border-18 border-white/5" />
                                <div className="relative flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-300">
                                        <Sparkles size={25} />
                                    </div>
                                    <div>
                                        <h2 className="font-display text-2xl font-bold">
                                            Quick Actions
                                        </h2>
                                        <p className="mt-1 text-sm text-blue-100">
                                            Manage your activities and get involved
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Links */}
                            <div className="space-y-3 p-4 sm:p-5">
                                {quickActions.map((action) => {
                                    const Icon = action.icon;

                                    return (
                                        <Link
                                            key={action.title}
                                            href={action.href}
                                            className="group flex min-h-27 items-center gap-3 rounded-2xl border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:gap-4 sm:p-5"
                                        >
                                            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${action.color} transition-transform group-hover:scale-110`}>
                                                <Icon size={26} strokeWidth={2.2} />
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <h3 className="font-display text-base font-bold transition-colors group-hover:text-primary sm:text-lg">
                                                    {action.title}
                                                </h3>
                                                <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
                                                    {action.description}
                                                </p>
                                            </div>

                                            {action.count !== null && (
                                                <span className="flex h-8 min-w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 px-2 text-sm font-bold text-primary">
                                                    {action.count}
                                                </span>
                                            )}

                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                                                <ArrowRight size={18} />
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Tip Card */}
                        <div className="mt-6 flex gap-4 rounded-3xl border border-primary/10 bg-primary/5 p-5 sm:p-6">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Lightbulb size={24} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold">
                                    Community Tip
                                </h3>
                                <p className="mt-1 text-xs leading-6 text-muted-foreground sm:text-sm">
                                    Events you join from the event details page
                                    automatically appear under My Joined Events.
                                </p>
                            </div>
                        </div>

                        {/* Small Impact Card */}
                        <div className="mt-5 rounded-3xl border border-border bg-card p-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                                    <Users size={23} />
                                </div>
                                <div>
                                    <h3 className="font-display font-bold">
                                        Be a Changemaker
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        Your community needs you.
                                    </p>
                                </div>
                            </div>

                            <Link
                                href="/events"
                                className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-primary-foreground transition hover:opacity-90"
                            >
                                Explore Upcoming Events
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
}
