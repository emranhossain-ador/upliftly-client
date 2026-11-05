
import { Skeleton } from "@/components/ui/skeleton";

const GallerySkeleton = () => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:mt-10">
            {Array.from({ length: 6 }).map((_, index) => (
                <div
                    key={index}
                    className="overflow-hidden rounded-3xl"
                >
                    <Skeleton className="aspect-4/3 w-full rounded-3xl" />
                </div>
            ))}
        </div>
    );
};

export default GallerySkeleton;
