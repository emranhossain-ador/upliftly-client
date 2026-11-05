
"use client";

import { Search } from "lucide-react";

type EventsFilterProps = {
    count: number;
    search: string;
    setSearch: (value: string) => void;
    eventType: string;
    setEventType: (value: string) => void;
    sort: string;
    setSort: (value: string) => void;
};

const categories = [
    "All",
    "Cleanup",
    "Plantation",
    "Donation",
    "Winter Relief",
    "Food Drive",
    "Health Camp",
    "Education",
];

const EventsFilter = ({
    count,
    search,
    setSearch,
    eventType,
    setEventType,
    sort,
    setSort,
}: EventsFilterProps) => {

    return (
        <div className="mt-10 space-y-4">

            {/* Search and Sorting */}
            <div className="flex flex-col gap-3 sm:flex-row">

                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex h-11 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-9 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                        placeholder="Search events by title or location..."
                        aria-label="Search events"
                    />
                </div>

                <button
                    type="button"
                    onClick={() =>
                        setSort(sort === "latest" ? "earliest" : "latest")
                    }
                    className="inline-flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent"
                >
                    {sort === "latest" ? "Latest first" : "Earliest first"}
                </button>
            </div>

            {/* Event Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">

                {categories.map((category) => {
                    const value = category.toLowerCase();

                    const active = eventType === value;

                    return (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setEventType(value)}
                            className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${active
                                ? "border-primary bg-primary text-primary-foreground"
                                : "bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                }`}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>

            {/* Event Count */}
            <p className="text-sm text-muted-foreground">
                {count} Events found
            </p>
        </div>
    );
};

export default EventsFilter;
