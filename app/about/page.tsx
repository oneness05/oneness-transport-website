import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/pages/about/AboutHero";
import CompanyStory from "@/components/pages/about/CompanyStory";

export const metadata: Metadata = {
  title: "About Our Texas Dry Van Carrier",
  description:
    "Learn about Oneness Transport LLC, an Austin-based dry van carrier built on integrity, dependable communication, and safe freight transportation.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Oneness Transport",
    description:
      "A Texas dry van carrier committed to integrity, communication, safety, and dependable freight service.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <CompanyStory />
      </main>
      <Footer />
    </>
  );
}
