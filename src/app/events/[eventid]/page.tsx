import EventDetails from "@/components/events/EventDetails";
import EventDetailsSkeleton from "./EventDetailsSkeleton";
import { Suspense } from "react";


const EventDetailsPage = async ({ params }: { params: Promise<{ eventid: string }> }) => {
    return (
        <main className="relative isolate overflow-hidden py-6  sm:py-10">
            <Suspense fallback={<EventDetailsSkeleton />}>
                <EventDetails params={params} />
            </Suspense>
        </main>
    );
};

export default EventDetailsPage;
