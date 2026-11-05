import { GetTokenFromClient } from "@/lib/getTokenFromClient";
import { EventsType } from "@/type/EventsType";
import { CalendarCheck, ClipboardList } from "lucide-react";
import { useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const ProfileStatistics = ({ userId }: { userId: string }) => {

    const [createdEventsData, setCreateEventsData] = useState<EventsType[]>();
    const [eventsJoinedData, setEventsJoinedData] = useState<EventsType[]>();

    // Get user created events
    useEffect(() => {
        const getCreatedEvents = async () => {

            const token = await GetTokenFromClient();

            const eventRes = await fetch(`${apiUrl}/users/${userId}/events`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            const events: EventsType[] = await eventRes.json();
            setCreateEventsData(events);
        }
        getCreatedEvents();
    }, [userId]);


    // Get user evets joined 
    useEffect(() => {

        const getEventsJoined = async () => {
            const token = await GetTokenFromClient();
            const eventJoinedRes = await fetch(`${apiUrl}/user/event-joined/${userId}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            const result: EventsType[] = await eventJoinedRes.json();
            setEventsJoinedData(result);
        }

        getEventsJoined();

    }, [userId]);


    return (
        <div className="grid grid-cols-2 gap-2 sm:gap-4">

            <div className="rounded-2xl bg-secondary p-3 text-center sm:p-5">
                <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12">
                    <CalendarCheck size={23} />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
                    {eventsJoinedData?.length}
                </h3>
                <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                    Joined Events
                </p>
            </div>

            <div className="rounded-2xl bg-secondary p-3 text-center sm:p-5">
                <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12">
                    <ClipboardList size={23} />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
                    {createdEventsData?.length}
                </h3>
                <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                    Organized Events
                </p>
            </div>

        </div>
    )
}

export default ProfileStatistics;