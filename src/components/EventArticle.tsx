import { EventsType } from "@/type/EventsType";
import { ArrowRight, CalendarDays, Clock3, MapPin, Users, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FormatDate from "./ui/formatData";

interface EventJoinedProps {
    _id: string;
    eventId: string;
    userId: string;
    status: string;
    createdAt: string;
}

const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const EventArticle = async ({ joinedEvent }: { joinedEvent: EventJoinedProps }) => {
    const res = await fetch(`${apiUrl}/events/${joinedEvent.eventId}`);
    const event: EventsType = await res.json();


    return (
        <article className="group rounded-2xl border border-border bg-background p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

                {/* Image and Main Info */}
                <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-5">

                    <Image src={event.imageUrl} alt='sdf' width={96} height={80} className="h-20 w-24 shrink-0 rounded-xl object-cover sm:h-20 sm:w-36" />

                    <div className="min-w-0 flex-1">
                        <Link
                            href={`/events/${event._id}`}
                            className="line-clamp-1 w-fit font-display text-base font-bold transition-colors group-hover:text-primary sm:text-lg"
                        >
                            {event.eventTitle}
                        </Link>

                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground sm:text-sm">
                            <span className="inline-flex items-center gap-1.5">
                                <MapPin size={15} className="shrink-0 text-primary" />
                                {event.location}
                            </span>

                            <span className="hidden text-border sm:inline">|</span>

                            <span className="inline-flex items-center gap-1.5">
                                <CalendarDays size={15} className="shrink-0 text-primary" />
                                {FormatDate(event.createdAt)}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Category and Joined Date */}
                <div className="flex items-center justify-between border-t border-border pt-3 lg:min-w-47.5 lg:flex-col lg:items-start lg:justify-center lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
                    <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold`}>
                        {event.eventType}
                    </span>

                    <p className="mt-2 hidden items-center gap-1.5 text-xs text-muted-foreground lg:flex">
                        <Users size={13} />
                        Joined: {FormatDate(event.eventDate)}
                    </p>

                    <p className="flex items-center gap-1 text-[11px] text-muted-foreground lg:hidden">
                        <Clock3 size={13} />
                        {FormatDate(event.eventDate)}
                    </p>
                </div>

                {/* Status and Actions */}
                <div className="flex items-center justify-between gap-2 border-t border-border pt-3 sm:justify-end lg:min-w-75 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">

                    <Link href={`/events/${event._id}`}
                        className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-primary/20 bg-primary/5 px-3 text-xs font-bold text-primary transition hover:border-primary hover:bg-primary hover:text-primary-foreground sm:px-4 sm:text-sm"
                    >
                        Details
                        <ArrowRight size={15} />
                    </Link>

                    <button
                        type="button"
                        title="Leave event"
                        className="flex items-center justify-center cursor-pointer rounded-md px-4 py-2 gap-1.5 text-sm font-semibold border border-red-400/50 text-red-500 transition hover:bg-rose-500 hover:text-white"
                    >
                        <X size={16} strokeWidth={3} /> Leave
                    </button>
                </div>
            </div>
        </article>
    )
};


export default EventArticle;