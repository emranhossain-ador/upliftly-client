
"use client";

import { useEffect, useState } from "react";
import EventsFilter from "@/components/EventsFilter";
import SingleEventCard from "@/components/SingleEventCard";
import { EventsType } from "@/type/EventsType";
import { Search } from "lucide-react";

const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const AllEvent = () => {
    const [events, setEvents] = useState<EventsType[]>([]);
    const [search, setSearch] = useState("");
    const [eventType, setEventType] = useState("all");
    const [sort, setSort] = useState("latest");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);

                const params = new URLSearchParams();

                if (search) {
                    params.append("search", search);
                }

                if (eventType !== "all") {
                    params.append("eventType", eventType);
                }

                params.append("sort", sort);

                const res = await fetch(
                    `${apiUrl}/events?${params.toString()}`
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch events");
                }

                const data: EventsType[] = await res.json();

                setEvents(data);
            } catch (error) {
                console.error(error);
                setEvents([]);
            } finally {
                setLoading(false);
            }
        };

        // Wait 300ms after typing before calling API
        const timer = setTimeout(() => {
            fetchEvents();
        }, 300);

        return () => clearTimeout(timer);

    }, [search, eventType, sort]);

    return (
        <section className="section-container mt-12 space-y-10">

            {/* Filter Area */}
            <EventsFilter
                count={events.length}
                search={search}
                setSearch={setSearch}
                eventType={eventType}
                setEventType={setEventType}
                sort={sort}
                setSort={setSort}
            />

            {/* Events */}
            {loading ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-80 animate-pulse rounded-xl bg-muted"
                        />
                    ))}
                </div>
            ) : events.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {events.map((event) => (
                        <SingleEventCard
                            key={event._id}
                            event={event}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-muted-foreground">
                        <Search size={28} />
                    </div>

                    <h3 className="mt-5 font-display text-lg font-bold">
                        No events found
                    </h3>

                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                        We couldn't find any events matching your filters.
                    </p>
                </div>
            )}
        </section>
    );
};

export default AllEvent;
