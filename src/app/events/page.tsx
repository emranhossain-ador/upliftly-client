import EventBanner from "@/components/EventBanner";
import AllEvent from "@/components/events/AllEvents";;
import { Suspense } from "react";
import EventListSkeleton from "./EventListSkeleton";


const EventsPage = () => {
    return (
        <main className="bg-background">

            <EventBanner />

            <Suspense fallback={<EventListSkeleton />}>
                <AllEvent />
            </Suspense>

        </main>
    );
};

export default EventsPage;