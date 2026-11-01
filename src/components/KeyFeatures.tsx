import { MousePointerClick, HeartHandshake, HeartPulse, Leaf } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const features = [
    {
        icon: HeartHandshake,
        title: "Community Impact",
        description: "Initiatives that create real social change.",
    },
    {
        icon: MousePointerClick,
        title: "Easy Participation",
        description: "Get involved with just a few clicks.",
    },
    {
        icon: Leaf,
        title: "Green Environment",
        description: "Protect the planet, restore nature and plant trees.",
    },
    {
        icon: HeartPulse,
        title: "Health & Wellbeing",
        description: "Support health camps and wellbeing programs.",
    },
];

const KeyFeatures = () => {
    return (
        <section className="section-container my-14 md:my-18">
            {/* Section Title */}
            <SectionHeader shortTitle="Our Key Features" title="Everything you need to serve" subTitle="Upliftly connects volunteers and organizers so no helping hand goes to waste." />

            <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4 mt-8 sm:mt-10">
                {features.map(({ icon: Icon, title, description }) => (
                    <div
                        key={title}
                        className="rounded-xl border bg-card p-5 shadow-card transition-shadow hover:shadow-soft"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-primary">
                            <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="mt-3 font-display text-sm font-semibold">{title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{description}</p>
                    </div>
                ))}
            </div>

        </section>
    )
};

export default KeyFeatures;