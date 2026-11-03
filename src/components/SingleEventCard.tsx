import { EventsType } from "@/type/EventsType";
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FormatDate from "./ui/formatData";

const SingleEventCard = ({ event }: { event: EventsType }) => {
    return (
        <div className="group block h-full outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl">
            <div className="rounded-xl border bg-card text-card-foreground shadow h-full overflow-hidden transition-shadow group-hover:shadow-lg">
                <div className="relative w-full aspect-video overflow-hidden">
                    <Image alt={event.eventTitle} width={500} height={500} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src={event.imageUrl} />

                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

                    <span className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-white text-xs font-semibold">
                        <CalendarDays className="w-4 h-4 text-primary" />
                        {FormatDate(event.eventDate)}
                    </span>
                </div>

                <div className="flex flex-col gap-2 p-3.5 sm:p-5">
                    <div className="flex items-center justify-between gap-2">
                        <div className="rounded-md px-2.5 py-0.5 text-xs bg-primary/5 text-primary font-medium border border-primary/10">{event.eventType}</div>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Users className="w-3.5 h-3.5" />
                            0 joined
                        </span>
                    </div>

                    <Link href={`/events/${event._id}`} className="font-display text-base font-semibold leading-snug hover:text-primary line-clamp-1">
                        {event.eventTitle}
                    </Link>

                    <div className="mt-auto flex flex-col gap-1.5 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="truncate text-sm font-normal">{event.location}</span>
                        </span>
                        <p className="text-[13px] font-normal text-foreground/70 line-clamp-2">
                            {event.eventDescription}
                        </p>
                    </div>

                    <Link href={`/events/${event._id}`} className="px-4 py-2.5 mt-4 w-full flex items-center justify-center text-[15px] shadow-md font-semibold gap-1.5 bg-primary text-white rounded-md transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/50 ">View Events <ArrowRight className="w-4 h-4" strokeWidth={3} /></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleEventCard;