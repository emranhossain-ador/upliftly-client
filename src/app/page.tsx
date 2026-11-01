import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import KeyFeatures from "@/components/KeyFeatures";
import NewsletterSection from "@/components/NewsletterSection";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";

export default function Home() {
  return (
    <main className="bg-background">

      <HeroSection />
      <KeyFeatures />
      <UpcomingEventsSection />
      <GallerySection />
      <NewsletterSection />
    </main>
  );
}
