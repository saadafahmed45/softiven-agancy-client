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
        phoneNumber="+8801890195058"
        accountName="Softiven Team"
        chatMessage="হ্যালো! আমরা কীভাবে আপনাকে সাহায্য করতে পারি? 😊"
        statusMessage="সাধারণত ১ ঘণ্টার মধ্যে উত্তর দেওয়া হয়"
        placeholder="আপনার বার্তা লিখুন..."
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
