import { EventsType } from "@/type/EventsType";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import FormatDate from "./ui/formatData";

const GalleryCard = ({ even }: { even: EventsType }) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl aspect-4/3 border border-border shadow-sm hover:shadow-lg transition-all duration-300">
            <Image src={even.imageUrl} alt="tree" width={900} height={600} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex flex-col gap-1.5 absolute bottom-0 translate-y-full transition-all duration-300 group-hover:bottom-3 group-hover:translate-y-0 left-3">
                <span className="flex items-center gap-1.5 px-2.25 py-1 rounded-md bg-primary text-white text-xs font-semibold w-fit">
                    <CalendarDays className="w-4 h-4 text-white" />
                    {FormatDate(even.eventDate)}
                </span>
                <h2 className="text-base line-clamp-1 font-medium text-white">{even.eventTitle}</h2>
                <span className="flex items-center gap-1 text-xs text-white font-medium">
                    <MapPin className="w-4 h-4 text-primary" /> {even.location}
                </span>
            </div>
        </div>
    );
};

export default GalleryCard;