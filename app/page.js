import Image from "next/image";
import Hero from "./components/Hero";
import AboutPage from "./about/page";
import ServicesPage from "./services/page";
import PortfolioPage from "./portfolio/page";

export default function Home() {
  return (
    <main className="bg-darkText">
      <Hero />
      <AboutPage />
      <ServicesPage />
      <PortfolioPage />
    </main>
  );
}
