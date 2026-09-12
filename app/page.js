"use client";
import Hero from "./components/Hero";
import AboutPage from "./about/page";
import ServicesPage from "./services/page";
import Testimonials from "./components/Testimonials";
import TeamSection from "./components/TeamSection";
import Cta from "./components/Cta";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Home() {
  return (
    <main className="bg-[#0A0F1E]">
      <Hero />
      <FloatingWhatsApp
        phoneNumber="+14375521639"
        accountName="Softiven Team"
        chatMessage="Hello! How can we help you? 😊"
        statusMessage="Usually replies within 1 hour"
        placeholder="Write your message..."
        notification
        notificationSound
        notificationDelay={60}
        buttonStyle={{ bottom: "24px", right: "24px" }}
      />
      <AboutPage />
      <ServicesPage />
      <Testimonials />
      <TeamSection />
      <Cta />
    </main>
  );
}
