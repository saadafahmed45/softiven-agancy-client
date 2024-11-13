"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import AboutPage from "./about/page";
import ServicesPage from "./services/page";
import PortfolioPage from "./portfolio/page";
import Testimonials from "./components/Testimonials";
import TeamSection from "./components/TeamSection";
import Cta from "./components/Cta";
import TestimonialSlider from "./components/TestimonialSlider";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import dynamic from "next/dynamic";

// const FloatingWhatsApp = dynamic(() => import("react-floating-whatsapp"), {
//   ssr: false,
// });
export default function Home() {
  return (
    <main className="bg-darkText">
      <Hero />
      <FloatingWhatsApp
        phoneNumber="+8801890195058"
        accountName="Softiven Team"
        // avatar="/path/to/avatar.png" // Optional: You can add your custom avatar image
        chatMessage="Hello there! How can we assist you today?" // Default message
        statusMessage="Typically replies within 1 hour"
        placeholder="Type your message here..."
        // allowClickAway // Close chat when clicking outside
        notification // Show a notification bubble
        notificationSound // Play a sound for notifications
      />
      <AboutPage />
      <ServicesPage />
      <Testimonials />
      <TeamSection />
      {/* <TestimonialSlider /> */}
      <Cta />
      {/* <PortfolioPage /> */}
    </main>
  );
}
