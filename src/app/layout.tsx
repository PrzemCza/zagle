import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sasanka 660 SN - czarter na Zalewie Sulejowskim",
    template: "%s | Sasanka 660 SN",
  },
  description:
    "Czarter jachtu Sasanka 660 SN w Barkowicach Mokrych nad Zalewem Sulejowskim. Oferta dla 4-6 osób.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sasanka 660 SN - czarter na Zalewie Sulejowskim",
    description:
      "Czarter jachtu Sasanka 660 SN w Barkowicach Mokrych nad Zalewem Sulejowskim. Oferta dla 4-6 osób.",
    url: "/",
    siteName: "Sasanka 660 SN",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sasanka 660 SN - czarter na Zalewie Sulejowskim",
    description:
      "Czarter jachtu Sasanka 660 SN w Barkowicach Mokrych nad Zalewem Sulejowskim.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
