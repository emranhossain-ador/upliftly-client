import { Skeleton } from "@/components/ui/skeleton";

const EventCardSkeleton = () => {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
                <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-border bg-card"
                >
                    {/* Image Skeleton */}
                    <Skeleton className="h-40 w-full rounded-none" />

                    <div className="space-y-3 p-4">
                        {/* Category & Joined */}
                        <div className="flex items-center justify-between">
                            <Skeleton className="h-5 w-24 rounded-full" />
                            <Skeleton className="h-4 w-16" />
                        </div>

                        {/* Event Title */}
                        <Skeleton className="h-5 w-3/4" />

                        {/* Location */}
                        <Skeleton className="h-4 w-full" />

                        {/* Description */}
                        <div className="space-y-1.5">
                            <Skeleton className="h-3 w-full" />
                            <Skeleton className="h-3 w-4/5" />
                        </div>

                        {/* Button */}
                        <Skeleton className="h-10 w-full rounded-lg" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventCardSkeleton;