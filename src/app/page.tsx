import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BoatPreview from "@/components/BoatPreview";
// import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Czarter jachtu Sasanka 660 SN",
  description:
    "Czarter jachtu Sasanka 660 SN na Zalewie Sulejowskim. Komfortowy jacht dla 4-6 osób, Barkowice Mokre.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Czarter jachtu Sasanka 660 SN",
    description:
      "Sasanka 660 SN w Barkowicach Mokrych - wygodny czarter na Zalewie Sulejowskim.",
    url: "/",
    siteName: "Sasanka 660 SN",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/zagle/rsc/str1-282.webp",
        alt: "Sasanka 660 SN na Zalewie Sulejowskim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Czarter jachtu Sasanka 660 SN",
    description: "Sasanka 660 SN - czarter na Zalewie Sulejowskim.",
    images: ["/zagle/rsc/str1-282.webp"],
  },
};

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
