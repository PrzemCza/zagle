import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BoatPreview from "@/components/BoatPreview";
// import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <BoatPreview />
      {/* <TestimonialsSection /> */}
      <CtaSection />
    </>
  );
}
