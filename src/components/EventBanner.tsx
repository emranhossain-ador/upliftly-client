import Image from "next/image";

const EventBanner = () => {
    return (
        <section className="relative isolate overflow-hidden">
            <Image src={'/images/hero-light.jpg'} alt="hero-banner" aria-hidden="true" width={1920} height={800} className="absolute inset-0 -z-10 h-full w-full object-cover" />
            <div className="absolute inset-0 -z-10 bg-hero-scrim/80" />
            <div className="section-container py-12 text-center text-white sm:py-20">
                <h1 className="font-display text-3xl font-bold sm:text-4xl">Upcoming Events</h1>
                <p className="mx-auto mt-2 max-w-lg text-sm text-white/90 sm:text-base">Find and join events that create a positive impact in your community.</p>
            </div>
        </section>
    )
};

export default EventBanner;