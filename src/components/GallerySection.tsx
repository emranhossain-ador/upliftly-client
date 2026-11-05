"use client";
import SectionHeader from "./ui/SectionHeader";
import GalleryCard from "./GalleryCard";
import { useEffect, useState } from "react";
import { EventsType } from "@/type/EventsType";
import GallerySkeleton from "./GallerySkeleton";



const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const GallerySection = () => {
    const [endEvents, setEndEvents] = useState<EventsType[]>();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}/events?status=completed`);
                const data = await response.json();

                setEndEvents(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);


    return (
        <section className="section-container my-14 md:my-18">
            <SectionHeader shortTitle="Visual Stories" title="From our last drives" subTitle="A glimpse of what our volunteer circles have been up to." />

            {
                loading ? (
                    <GallerySkeleton />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 sm:mt-10">
                        {
                            endEvents?.map(even => <GalleryCard key={even._id} even={even} />)
                        }
                    </div>
                )
            }
        </section>
    );
};

export default GallerySection;