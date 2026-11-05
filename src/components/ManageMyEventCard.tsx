import { ArrowRight, CalendarCheck, Lightbulb, Plus, Search } from "lucide-react";
import Link from "next/link";
import ManageEventArticle from "./ManageEventArticle";
import { getSession } from "@/lib/getSession";
import { EventsType } from "@/type/EventsType";
import { GetTokenFromSever } from "@/lib/getTokenFromServer";


const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const ManageMyEventCard = async () => {

    const token = await GetTokenFromSever();

    // Get user ID 
    const user = await getSession();
    const userId = user?.id;

    // Call event api
    const res = await fetch(`${apiUrl}/users/${userId}/events`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const myEvents: EventsType[] = await res.json();


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
                            Manage My Events
                        </h2>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                            <strong>{myEvents.length}</strong> events in your activity
                        </p>
                    </div>
                </div>

                <div>
                    <Link href={'/events/create'} className="px-4 py-2.5 rounded-md bg-primary text-white font-semibold text-sm transition-all hover:bg-primary/90 shadow-md shadow-primary/40 flex items-center gap-1.5 hover:shadow-none justify-center"><Plus size={16} strokeWidth={3} /> Create Events</Link>
                </div>
            </div>

            {/* Event Rows */}
            <div className="space-y-3 p-4 sm:p-5 lg:p-6">

                {
                    myEvents.length > 0 ? (
                        myEvents.map((event) => <ManageEventArticle key={event._id} event={event} />)

                    ) : (
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
                    )
                }

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

export default ManageMyEventCard;