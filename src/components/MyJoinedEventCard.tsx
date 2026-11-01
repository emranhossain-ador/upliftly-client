import { ArrowRight, CalendarCheck, Lightbulb, Search, SlidersHorizontal, } from "lucide-react";
import Link from "next/link";
import EventArticle from "./EventArticle";

const MyJoinedEventCard = () => {
    return (
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">

            {/* Header and Search */}
            <div className="flex flex-col gap-4 border-b border-border p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm shadow-primary/20">
                        <CalendarCheck size={22} />
                    </div>

                    <div>
                        <h2 className="font-display text-xl font-bold sm:text-2xl">
                            Your Joined Events
                        </h2>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                            5 events in your activity
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                    {/* Search */}
                    <div className="relative flex-1 sm:w-64 lg:w-72">
                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                        />
                        <input
                            type="search"
                            placeholder="Search your events..."
                            className="h-11 w-full rounded-xl border border-input bg-background pl-11 pr-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
                        />
                    </div>

                    {/* Filter */}
                    <div className="relative sm:w-44">
                        <SlidersHorizontal
                            size={17}
                            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-primary"
                        />
                        <select
                            className="h-11 w-full appearance-none rounded-xl border border-input bg-background pl-10 pr-8 text-sm font-semibold outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                        >
                            <option value="All">All Events</option>
                            <option value="Upcoming">Upcoming</option>
                            <option value="Completed">Completed</option>
                            <option value="Plantation">Plantation</option>
                            <option value="Blood Drive">Blood Drive</option>
                            <option value="Awareness">Awareness</option>
                            <option value="Donation">Donation</option>
                            <option value="Cleanup">Cleanup</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Event Rows */}
            <div className="space-y-3 p-4 sm:p-5 lg:p-6">


                <EventArticle />
                <EventArticle />
                <EventArticle />

                {/* <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-muted-foreground">
                            <Search size={28} />
                        </div>
                        <h3 className="mt-5 font-display text-lg font-bold">
                            No events found
                        </h3>
                        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                            We couldn't find any joined events matching
                            your search or selected filter.
                        </p>
                        <button
                            className="mt-5 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:opacity-90"
                        >
                            Clear Filters
                        </button>
                    </div> */}

            </div>

            {/* Bottom Tip */}
            <div className="mx-4 mb-4 flex flex-col gap-4 rounded-2xl border border-primary/10 bg-primary/5 p-4 sm:mx-5 sm:mb-5 sm:flex-row sm:items-center sm:justify-between sm:p-5 lg:mx-6 lg:mb-6">

                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Lightbulb size={23} />
                    </div>

                    <p className="text-xs font-semibold leading-5 sm:text-sm">
                        Tip: You can leave an event anytime from here.
                    </p>
                </div>

                <Link href="/events"
                    className="inline-flex px-5 py-2.5 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:opacity-90">
                    Explore More Events
                    <ArrowRight size={17} />
                </Link>
            </div>
        </div>
    )
};

export default MyJoinedEventCard;