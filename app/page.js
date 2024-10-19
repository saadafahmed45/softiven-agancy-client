import Image from "next/image";
import Hero from "./components/Hero";
import AboutPage from "./about/page";
import ServicesPage from "./services/page";
import PortfolioPage from "./portfolio/page";
import Testimonials from "./components/Testimonials";
import TeamSection from "./components/TeamSection";
import Cta from "./components/Cta";

export default function Home() {
  return (
    <main className="bg-darkText">
      <Hero />
      <AboutPage />
      <ServicesPage />
      <Testimonials />
      <TeamSection />
      <Cta/>
      {/* <PortfolioPage /> */}
    </main>
  );
}
