import EventBanner from "@/components/EventBanner";
import EventsFilter from "@/components/EventsFilter";
import SingleEventCard from "@/components/SingleEventCard";


const EventsPage = () => {
    return (
        <main className="bg-background">

            <EventBanner />

            <section className="section-container space-y-10">
                {/* Filter Area */}
                <EventsFilter />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <SingleEventCard />
                    <SingleEventCard />
                    <SingleEventCard />
                    <SingleEventCard />
                    <SingleEventCard />
                </div>
            </section>

        </main>
    );
};

export default EventsPage;