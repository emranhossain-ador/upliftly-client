
import Link from "next/link";
import {
    CalendarCheck,
    ClipboardList,
    Plus,
    ArrowRight,
    Users,
    Lightbulb,
    Sparkles,
} from "lucide-react";

const quickActions = [
    {
        title: "My Joined Events",
        description: "Every event you have signed up for.",
        href: "/events/joined",
        count: 5,
        icon: CalendarCheck,
        color: "bg-blue-500/10 text-blue-600",
    },
    {
        title: "Manage My Events",
        description: "Edit or remove events you organize.",
        href: "/events/manage",
        count: 6,
        icon: ClipboardList,
        color: "bg-violet-500/10 text-violet-600",
    },
    {
        title: "Create New Event",
        description: "Organize an event for your community.",
        href: "/events/create",
        count: null,
        icon: Plus,
        color: "bg-emerald-500/10 text-emerald-600",
    },
];

const ProfileQuickAction = ()=>{
    return (
        <aside className="lg:col-span-5">

            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">

                {/* Header */}
                <div className="relative overflow-hidden bg-linear-to-r from-[#0b2545] to-[#134074] p-5 text-white sm:p-7">
                    <div className="absolute -right-5 -top-10 h-36 w-36 rounded-full border-18 border-white/5" />
                    <div className="relative flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-300">
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
                                className="group flex min-h-27 items-center gap-3 rounded-2xl border border-border bg-background px-3 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:gap-4 sm:p-5"
                            >
                                <div className={`flex h-11 w-11 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-2xl ${action.color} transition-transform group-hover:scale-110`}>
                                    <Icon className="w-5 h-5 md:h-7 md:w-7" strokeWidth={2.2} />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <h3 className="font-display text-sm font-bold transition-colors group-hover:text-primary sm:text-lg">
                                        {action.title}
                                    </h3>
                                    <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
                                        {action.description}
                                    </p>
                                </div>

                                {action.count !== null && (
                                    <span className="flex h-6 min-w-6 md:h-8 md:min-w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 px-2 text-sm font-bold text-primary">
                                        {action.count}
                                    </span>
                                )}

                                <div className="flex h-8 w-8 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                                    <ArrowRight className="w-4 h-4 md:h-5 md:w-5" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Tip Card */}
            <div className="mt-6 flex gap-4 rounded-3xl border border-primary/10 bg-primary/5 px-4 py-4.5 md:p-6">
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
            <div className="mt-5 rounded-3xl border border-border bg-card px-4 py-4.5 md:p-6">
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
    )
};


export default ProfileQuickAction;