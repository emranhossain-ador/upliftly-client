
import EventsFilter from "@/components/EventsFilter";
import SingleEventCard from "@/components/SingleEventCard";
import { EventsType } from "@/type/EventsType";
import { Search } from "lucide-react";


const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const AllEvent = async () => {

    const res = await fetch(`${apiUrl}/events`);
    const events: EventsType[] = await res.json();

    return (
        <section className="section-container space-y-10 mt-12">
            {/* Filter Area */}
            <EventsFilter count={events.length} />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                    events.length > 0 ?

                        events.map(event => <SingleEventCard key={event._id} event={event} />)

                        :
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-muted-foreground">
                                <Search size={28} />
                            </div>
                            <h3 className="mt-5 font-display text-lg font-bold">
                                No events found
                            </h3>
                            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                                We couldn't find any events.
                            </p>
                        </div>
                }

            </div>
        </section>
    )
}

export default AllEvent;