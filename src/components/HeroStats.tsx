import { GetTokenFromSever } from "@/lib/getTokenFromServer";
import {
    CalendarDays,
    CalendarCheck,
    Users,
    CalendarRange,
} from "lucide-react"

const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const HeroStats = async () => {

    const token = await GetTokenFromSever();

    // Get Total Upcomming events
    const response = await fetch(`${apiUrl}/dashboard/statistics`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await response.json();
    const statistics = data.statistics;

    // Get Total Users


    const stats = [
        { icon: CalendarDays, value: statistics.totalUpcomingEvents, label: "Upcoming Events" },
        { icon: Users, value: statistics.totalActiveVolunteers, label: "Active Volunteers" },
        { icon: CalendarCheck, value: statistics.totalCompletedEvents, label: "Events Completed" },
        { icon: CalendarRange, value: statistics.totalEvents, label: "Totals Events" },
    ];

    return (
        <section className="section-container -mt-10 relative z-10">
            <div className="grid grid-cols-2 gap-3 rounded-2xl border bg-card p-4 shadow-soft sm:gap-6 sm:p-6 lg:grid-cols-4">
                {stats.map(({ icon: Icon, value, label }) => (
                    <div key={label} className="flex items-center gap-3 sm:gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12">
                            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </span>
                        <div>
                            <p className="font-display text-xl font-bold sm:text-2xl">{value}</p>
                            <p className="text-xs text-muted-foreground sm:text-sm">{label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HeroStats;