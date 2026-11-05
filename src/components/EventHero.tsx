import { EventsType } from "@/type/EventsType";
import { CalendarDays, Heart, MapPin, Users } from "lucide-react";
import Image from "next/image";
import FormatDate from "./ui/formatData";


const AfricaWatermark = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 120 140" fill="currentColor" aria-hidden="true" className={className}>
        <path d="M22 18C34 9 66 6 82 14c10 5 12 14 8 20-3 5-10 6-11 12-2 7 7 10 9 17 3 10-6 14-11 22-6 10-11 22-16 32-3 6-8 8-11 2-5-9-9-22-13-35-4-13-10-24-14-34-3-8-4-22 9-32Z" />
        <ellipse cx="99" cy="97" rx="4.5" ry="10" transform="rotate(20 99 97)" />
    </svg>
);


const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const EventHero = async ({ event }: { event: EventsType }) => {

    const eventId = event._id;

    const res = await fetch(`${apiUrl}/events/${eventId}/join-count`);

    const totalAttent = await res.json();

    return (
        <section className="relative isolate overflow-hidden rounded-3xl bg-[linear-gradient(115deg,#062a68_0%,#0b47a3_48%,#083a8d_100%)] shadow-soft">
            {/* Soft glow + continent watermark */}
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(80%_120%_at_18%_20%,rgba(29,110,224,0.45),transparent_60%)]" />
            <AfricaWatermark className="absolute -top-10 left-[36%] hidden h-[135%] w-auto text-white/6 lg:block" />

            <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
                {/* Cover image — stacked on mobile, right side on desktop */}
                <div className="relative order-first h-56 sm:h-72 lg:order-last lg:h-auto lg:min-h-104">
                    {/* Decorative arcs along the curved image edge */}
                    <div aria-hidden className="absolute inset-0 hidden lg:block">
                        <div className="absolute inset-y-0 -left-7 w-full bg-[#4d9bff]/25 [clip-path:ellipse(130%_110%_at_100%_55%)]" />
                        <div className="absolute inset-y-0 -left-2 w-full bg-[#7cc0ff]/80 [clip-path:ellipse(130%_110%_at_100%_55%)]" />
                    </div>
                    <Image
                        src={event.imageUrl}
                        alt={event.eventTitle}
                        fill
                        priority
                        sizes="(min-width:1024px) 46vw, 100vw"
                        className="object-cover lg:[clip-path:ellipse(130%_110%_at_100%_55%)]"
                    />
                </div>

                {/* Hero content */}
                <div className="relative z-10 p-6 sm:p-10 lg:p-12 xl:p-14">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                            <Heart className="h-3.5 w-3.5" />
                        </span>
                        {event.eventType}
                    </span>

                    <h1 className="mt-5 font-header text-xl md:text-4xl font-bold tracking-tight text-white">
                        {event.eventTitle}
                    </h1>

                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-white">
                        <span className="flex items-center gap-2.5">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1668d4] ring-1 ring-white/15">
                                <MapPin className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-semibold sm:text-base">{event.location}</span>
                        </span>
                        <span className="h-5 w-px bg-white/25" aria-hidden />
                        <span className="flex items-center gap-2.5">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1668d4] ring-1 ring-white/15">
                                <CalendarDays className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-semibold sm:text-base">{FormatDate(event.eventDate)}</span>
                        </span>
                    </div>

                    <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
                        Join us to our communities.
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1668d4] ring-1 ring-white/15 text-white">
                            <Users className="h-4 w-4" />
                        </span>
                        <p className="text-sm font-medium text-white/90">{totalAttent} people are joining</p>
                    </div>
                </div>
            </div>
        </section>
    )
};


export default EventHero;