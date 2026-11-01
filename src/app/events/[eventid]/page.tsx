
import {
    ArrowRight,
    BadgeCheck,
    CircleCheckBig,
    Mail,
    Rocket,
} from "lucide-react";
import EventHero from "@/components/EventHero";
import Link from "next/link";
import JoinEventBtn from "@/components/JoinEventBtn";


const guidelines = [
    "Please arrive 15 minutes before the scheduled time at the designated location.",
    "Wear comfortable clothing suitable for physical social work and distribution.",
    "Bring any pre-coordinated relief packages or distribution items if requested.",
];


/* ------------------------------------------------------------------ */
/* Decorative SVGs                                                     */
/* ------------------------------------------------------------------ */

const LeafBranch = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 140 230" fill="currentColor" aria-hidden="true" className={className}>
        <path d="M64 230c-4-64-2-124 24-186" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M92 46c-19-13-43-6-46 14 17 11 41 5 46-14Z" />
        <path d="M86 84c-21-9-44 2-44 22 19 8 41-3 44-22Z" />
        <path d="M80 124c-22-6-44 7-41 27 20 5 40-8 41-27Z" />
        <path d="M76 164c-23-4-44 11-39 31 21 3 40-12 39-31Z" />
        <path d="M99 26c-9-20 3-41 23-42 10 20-2 41-23 42Z" />
        <path d="M93 64c-13-18-2-41 18-44 12 18 1 41-18 44Z" />
    </svg>
);

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */



const AboutCard = () => (
    <div className="rounded-3xl border bg-card p-5 shadow-card sm:p-8">

        {/* About copy */}
        <h2 className="mt-7 flex items-center gap-3 font-header text-xl font-bold sm:text-2xl">
            <span className="h-6 w-1.5 rounded-full bg-primary" aria-hidden />
            About this Social Initiative
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-foreground/75 sm:text-[15px]">
            Uganda is a landlocked republic in East Africa, not a word meaning &ldquo;help&rdquo;.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-foreground/75 sm:text-[15px]">
            Our mission is to bring clean water, quality education, and better healthcare to underprivileged
            communities across Uganda.
        </p>

        {/* Volunteer guidelines */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-primary/10 bg-primary/4 p-5 sm:p-6">
            <div className="relative">
                <h3 className="flex items-center gap-2.5 font-header text-base font-bold sm:text-lg">
                    <Rocket className="h-5 w-5 text-primary" />
                    Volunteer Guidelines
                </h3>
                <ul className="mt-4 space-y-3 sm:pr-44 lg:pr-60">
                    {guidelines.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/75">
                            <CircleCheckBig className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

const Sidebar = () => (
    <aside className="space-y-6">
        {/* Join CTA */}
        <JoinEventBtn />

        {/* Organizer */}
        <div className="relative overflow-hidden rounded-2xl border bg-card p-5 shadow-card sm:p-6">
            <LeafBranch className="pointer-events-none absolute -bottom-6 -right-5 h-40 w-auto text-primary/[0.07]" />
            <h2 className="relative font-header text-base font-bold sm:text-lg">Event Organizer</h2>
            <div className="relative mt-4 flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-sky-400 to-blue-700 text-lg font-bold text-white ring-4 ring-primary/10">
                    F
                </span>
                <div className="min-w-0">
                    <p className="flex items-center gap-1.5 font-header text-lg font-bold">
                        Fuad
                        <BadgeCheck className="h-4.5 w-4.5 text-primary" />
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4 shrink-0" />
                        <span className="truncate">fuad12@gm.com</span>
                    </p>
                </div>
            </div>
            <Link href={'/profile'}
                className="relative mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-primary/25 bg-primary/5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
                View Profile
                <ArrowRight className="h-4 w-4" />
            </Link>
        </div>
    </aside>
);

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const EventDetails = () => {
    return (
        <main className="relative isolate overflow-hidden py-6  sm:py-10">

            <div className="section-container mt-3 md:mt-5 relative space-y-6 xl:space-y-8">
                <EventHero />

                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_21rem] xl:gap-8 2xl:grid-cols-[minmax(0,1fr)_23rem]">
                    <AboutCard />
                    <Sidebar />
                </div>
            </div>
        </main>
    );
};

export default EventDetails;
