
import { Skeleton } from "@/components/ui/skeleton";

const EventDetailsSkeleton = () => {
    return (
        <div className="mx-auto w-full max-w-6xl space-y-7 px-4 py-6">

            {/* Hero Section */}
            <div className="grid overflow-hidden rounded-2xl border bg-background shadow-sm lg:grid-cols-2">
                {/* Hero Content */}
                <div className="flex flex-col justify-center space-y-6 bg-muted/50 p-7 sm:p-10">
                    <Skeleton className="h-7 w-24 rounded-full" />

                    <Skeleton className="h-12 w-52 sm:h-14" />

                    <div className="flex flex-wrap gap-4">
                        <Skeleton className="h-8 w-24 rounded-md" />
                        <Skeleton className="h-8 w-36 rounded-md" />
                    </div>

                    <Skeleton className="h-4 w-64 max-w-full" />

                    {/* Participants */}
                    <div className="flex items-center gap-3 pt-2">
                        <div className="flex -space-x-3">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Skeleton
                                    key={i}
                                    className="h-9 w-9 rounded-full border-2 border-background"
                                />
                            ))}
                        </div>
                        <Skeleton className="h-4 w-32" />
                    </div>
                </div>

                {/* Hero Image */}
                <Skeleton className="h-64 w-full rounded-none lg:h-full lg:min-h-85" />
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-3">

                {/* About Section */}
                <div className="space-y-6 rounded-2xl border bg-background p-6 shadow-sm sm:p-7 lg:col-span-2">
                    <div className="flex items-center gap-3">
                        <Skeleton className="h-6 w-1.5 rounded-full" />
                        <Skeleton className="h-6 w-64 max-w-full" />
                    </div>

                    <div className="space-y-3">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-[90%] max-w-full" />
                        <Skeleton className="h-4 w-[75%] max-w-full" />
                    </div>

                    {/* Volunteer Guidelines */}
                    <div className="space-y-5 rounded-2xl border bg-muted/40 p-5">
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-5 w-5 rounded" />
                            <Skeleton className="h-5 w-40" />
                        </div>

                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <Skeleton className="mt-0.5 h-4 w-4 shrink-0 rounded-full" />
                                <div className="flex-1 space-y-2">
                                    <Skeleton className="h-3.5 w-full" />
                                    <Skeleton className="h-3.5 w-3/4 max-w-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-5">

                    {/* Join Event */}
                    <div className="flex items-center gap-4 rounded-2xl bg-muted/50 p-5">
                        <Skeleton className="h-11 w-11 shrink-0 rounded-xl" />
                        <div className="flex-1 space-y-2">
                            <Skeleton className="h-4 w-28" />
                            <Skeleton className="h-3 w-36 max-w-full" />
                        </div>
                        <Skeleton className="h-9 w-9 shrink-0 rounded-full" />
                    </div>

                    {/* Organizer */}
                    <div className="space-y-5 rounded-2xl border bg-background p-5 shadow-sm">
                        <Skeleton className="h-5 w-32" />

                        <div className="flex items-center gap-3">
                            <Skeleton className="h-14 w-14 shrink-0 rounded-full" />
                            <div className="flex-1 space-y-2">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-3 w-32 max-w-full" />
                            </div>
                        </div>

                        <Skeleton className="h-9 w-full rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsSkeleton;
