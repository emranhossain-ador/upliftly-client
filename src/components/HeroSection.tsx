import Image from "next/image";
import Link from "next/link";
import {
    CalendarDays,
    MapPinned,
    Users,
    Building2,
    ArrowRight,
    HeartPlus,
} from "lucide-react"


const HeroSection = () => {

    const stats = [
        { icon: CalendarDays, value: "12", label: "Upcoming Events" },
        { icon: Users, value: "1.2K", label: "Active Volunteers" },
        { icon: MapPinned, value: "8", label: "Communities" },
        { icon: Building2, value: "5", label: "Cities" },
    ];

    return (
        <div>
            <section className="relative isolate min-h-[60vh] overflow-hidden">
                <Image
                    src="/images/hero-light.jpg"
                    alt="Hero"
                    width={1920}
                    height={800}
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-r from-hero-scrim/90 via-hero-scrim/60 to-hero-scrim/10" />
                <div className="section-container py-16 sm:py-24">
                    <div className="max-w-xl text-white">
                        <h1 className="font-header text-4xl font-bold leading-tight sm:text-5xl">
                            Small Actions
                            <br />
                            Create Big Changes
                        </h1>
                        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
                            Join our community and be part of social development initiatives that build a cleaner,
                            healthier and brighter future for everyone.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <button className="px-6 py-3 text-sm font-semibold rounded-md bg-primary text-white tracking-wider cursor-pointer transition-all hover:scale-105">
                                <Link href="/events" className="inline-flex items-center gap-1.5">Explore Events <ArrowRight className="w-4 h-4" strokeWidth={2} /></Link>
                            </button>
                            <Link href="/events" className=" px-6 py-3 text-sm font-semibold tracking-wide rounded-md bg-white/10 text-white hover:bg-white/20 hover:text-white border border-white/50 dark:border-white/20 inline-flex items-center gap-1.5"><HeartPlus className="w-4 h-4" /> Create an Event</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section-container -mt-10 relative z-10">
                <div className="grid grid-cols-2 gap-3 rounded-2xl border bg-card p-4 shadow-soft sm:gap-6 sm:p-6 lg:grid-cols-4">
                    {stats.map(({ icon: Icon, value, label }) => (
                        <div key={label} className="flex items-center gap-3 sm:gap-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12">
                                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                            </span>
                            <div>
                                <p className="font-display text-xl font-bold sm:text-2xl">{value}</p>
                                <p className="text-xs text-muted-foreground sm:text-sm">{label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default HeroSection;