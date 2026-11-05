
"use client";

import Link from "next/link";
import SectionHeader from "./ui/SectionHeader";
import { ArrowRight } from "lucide-react";
import SingleEventCard from "./SingleEventCard";
import { EventsType } from "@/type/EventsType";
import { useEffect, useState } from "react";
import EventCardSkeleton from "./events/EventCardSkeleton";

const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const UpcomingEventsSection = () => {
    const [latestEvents, setLatestEvents] = useState<EventsType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCommingEvents = async () => {
            try {
                const res = await fetch(`${apiUrl}/latest-events`);

                if (!res.ok) {
                    throw new Error("Failed to fetch events");
                }

                const data: EventsType[] = await res.json();
                setLatestEvents(data);

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getCommingEvents();
    }, []);

    return (
        <section className="section-container my-14 md:my-18">
            <div className="flex sm:items-center gap-3 sm:justify-between sm:flex-row flex-col justify-start mb-8 sm:mb-10">
                <SectionHeader
                    shortTitle="Get involved"
                    title="Recent Upcoming Events"
                    subTitle="The next six community service events on the calendar."
                    isCenter={false}
                />

                <Link
                    href="/events"
                    className="px-4 py-2 rounded-md text-sm font-semibold border border-border text-foreground shadow flex items-center gap-1.5 transition-all hover:border-primary hover:text-primary hover:shadow-none w-fit"
                >
                    See all events <ArrowRight className="w-5 h-5" />
                </Link>
            </div>

            {loading ? (
                <EventCardSkeleton />
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {latestEvents.map((event) => (
                        <SingleEventCard
                            key={event._id}
                            event={event}
                        />
                    ))}
                </div>
            )}

        </section>
    );
};

export default UpcomingEventsSection;
