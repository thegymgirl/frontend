import AboutMeSection from "@/components/AboutMeSection";
import FeatureHighlightsCarousel from "@/components/FeatureHighlightsCarousel";
import FinalCtaSection from "@/components/FinalCtaSection";
import HeroSection from "@/components/HeroSection";
import ImageGallerySection from "@/components/ImageGallerySection";
import Transformation from "@/components/Transformation";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Header */}

      {/* Hero Section */}
      <HeroSection />
      <Transformation />
      {/* Scroll Zoom Section */}
      {/* <ScrollZoomSection /> */}
      <FinalCtaSection />

      <ImageGallerySection />

      {/* How Can Future Help Section */}
      {/* <HowCanFutureHelpSection /> */}

      {/* Personas Slide Carousel */}
      {/* <PersonasSlideCarousel /> */}

      <div className="relative z-0 w-full overflow-hidden">
        {/* <div className="pointer-events-none absolute inset-x-0 z-0 h-[120%]">
            <Image
              src="https://future.co/images/homepage/blurred-orb/blurred-orb-purple.svg"
              alt="asdsa"
              aria-hidden="true"
              fill
              className="min-h-[962px] object-cover object-center"
            />
          </div> */}

        {/* Final CTA Section */}
        {/* <FinalCtaSection /> */}
        
          <AboutMeSection />
        {/* Feature Highlights Carousel */}
        <FeatureHighlightsCarousel />
      </div>
      {/* Footer */}
    </main>
  );
}
