
import { Skeleton } from "@/components/ui/skeleton";

const EventCardSkeleton = () => {
    return (
        <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:p-5">

            {/* Image & Event Info */}
            <div className="flex flex-1 items-center gap-4">
                <Skeleton className="h-24 w-32 shrink-0 rounded-2xl sm:w-44" />

                <div className="flex-1 space-y-3">
                    <Skeleton className="h-5 w-32 sm:w-44" />

                    <div className="flex flex-wrap gap-3">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-28" />
                    </div>
                </div>
            </div>

            {/* Category & Joined */}
            <div className="flex items-center justify-between gap-6 border-t border-border pt-4 sm:min-w-64 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                <div className="space-y-3">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-28" />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 border-t border-border pt-4 sm:border-0 sm:pt-0">
                <Skeleton className="h-11 w-24 rounded-xl" />
                <Skeleton className="h-11 w-24 rounded-xl" />
                <Skeleton className="h-11 w-28 rounded-xl" />
            </div>
        </div>
    );
};

const ManageEventsSkeleton = () => {
    return (
        <section className="w-full rounded-[2rem] border border-border bg-card shadow-sm">

            {/* Header */}
            <div className="flex flex-col gap-5 border-b border-border p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">

                <div className="flex items-center gap-4">
                    <Skeleton className="h-14 w-14 shrink-0 rounded-2xl" />

                    <div className="space-y-2">
                        <Skeleton className="h-7 w-48 sm:w-64" />
                        <Skeleton className="h-4 w-28" />
                    </div>
                </div>

                {/* Search & Filter */}
                <div>
                    <Skeleton className="h-14 w-full rounded-2xl sm:w-44 lg:w-48" />
                </div>
            </div>

            {/* Event List */}
            <div className="space-y-3 p-5 sm:p-7">
                {Array.from({ length: 3 }).map((_, index) => (
                    <EventCardSkeleton key={index} />
                ))}

                {/* Bottom Tip */}
                <div className="mt-7 flex flex-col gap-4 rounded-3xl border border-border bg-muted/50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

                    <div className="flex items-center gap-4">
                        <Skeleton className="h-14 w-14 shrink-0 rounded-2xl" />
                        <Skeleton className="h-5 w-56 max-w-full" />
                    </div>

                    <Skeleton className="h-12 w-full rounded-2xl sm:w-60" />
                </div>
            </div>
        </section>
    );
};

export default ManageEventsSkeleton;
