import Link from "next/link";
import SectionHeader from "./ui/SectionHeader";
import { ArrowRight } from "lucide-react";
import SingleEventCard from "./SingleEventCard";

const UpcomingEventsSection = () => {
    return (
        <section className="section-container my-14 md:my-18">
            <div className="flex sm:items-center gap-3 sm:justify-between sm:flex-row flex-col justify-start mb-8 sm:mb-10">
                <SectionHeader shortTitle="Get involved" title="Recent Upcoming Events" subTitle="The next six community service events on the calendar." isCenter={false} />
                <Link href={'/'} className="px-4 py-2 rounded-md text-sm font-semibold border border-border text-foreground shadow  flex items-center gap-1.5 transition-all hover:border-primary hover:text-primary hover:shadow-none w-fit">See all events <ArrowRight className="w-5 h-5" /></Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <SingleEventCard />
                <SingleEventCard />
                <SingleEventCard />
                <SingleEventCard />
                <SingleEventCard />
            </div>
        </section>
    );
};

export default UpcomingEventsSection;