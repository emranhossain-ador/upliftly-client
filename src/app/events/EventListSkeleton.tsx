import EventCardSkeleton from "@/components/events/EventCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

const EventListSkeleton = () => {
    return (
        <div className="section-container space-y-10 mt-12">

            {/* Search & Sort */}
            <div className="flex flex-col gap-3 sm:flex-row">
                <Skeleton className="h-12 flex-1 rounded-xl" />
                <Skeleton className="h-12 w-full rounded-xl sm:w-32" />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
                {Array.from({ length: 8 }).map((_, index) => (
                    <Skeleton
                        key={index}
                        className={`h-10 rounded-full ${index === 0 ? "w-14" : "w-28"
                            }`}
                    />
                ))}
            </div>

            {/* Events Count */}
            <Skeleton className="h-4 w-28" />

            {/* Event Cards */}
            <EventCardSkeleton />
        </div>
    );
};

export default EventListSkeleton;