
import SectionHeader from "./ui/SectionHeader";
import GalleryCard from "./GalleryCard";

const GallerySection = () => {
    return (
        <section className="section-container my-14 md:my-18">
            <SectionHeader shortTitle="Visual Stories" title="From our last drives" subTitle="A glimpse of what our volunteer circles have been up to." />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 sm:mt-10">

                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />

            </div>
        </section>
    );
};

export default GallerySection;