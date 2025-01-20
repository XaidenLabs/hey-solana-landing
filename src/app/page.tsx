import CarouselSegment from "@/components/pagecomponents/carousel";
import DetailsSegment from "@/components/pagecomponents/details";
import Faqs from "@/components/pagecomponents/faq";
import Hero from "@/components/pagecomponents/hero";
import RoadMap from "@/components/pagecomponents/roadmap";
import Security from "@/components/pagecomponents/security";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <CarouselSegment />
      <DetailsSegment />
      <Security />
      <RoadMap />
      <Faqs />
    </div>
  );
}
