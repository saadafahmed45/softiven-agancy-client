"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function PortfolioPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      title: "Fristads",
      description: "একটি শীর্ষস্থানীয় রিটেইল ব্র্যান্ডের জন্য স্কেলেবল ই-কমার্স সমাধান।",
      image: "/prt1.png",
      tags: ["Web Development", "React", "Next.js", "Node.js"],
      link: "#",
    },
    {
      title: "Gym Shark",
      description: "ওয়ার্কআউট এবং পুষ্টি ট্র্যাক করার জন্য মোবাইল অ্যাপ।",
      image: "/prt2.png",
      tags: ["Shopify Development", "Liquid", "Javascript", "HTML", "CSS"],
      link: "#",
    },
    {
      title: "Gadget Hub",
      description: "ইলেকট্রনিক্স পণ্যের জন্য আধুনিক ড্রপশিপিং স্টোর।",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["Shopify", "UI/UX", "SEO"],
      link: "#",
    }
  ];

  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      {/* ── Hero Banner ── */}
      <section className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="blob w-[500px] h-[500px] bg-[#0EA5E9] top-0 left-0" />
          <div className="blob w-[400px] h-[400px] bg-[#6366F1] bottom-0 right-0" style={{ animationDelay: "3s" }} />
        </div>
        <div className="relative max-w-4xl mx-auto text-center" data-aos="fade-up">
          <div className="section-badge mb-6">আমাদের পোর্টফোলিও</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1F5F9] leading-tight mb-6">
            আমাদের <span className="gradient-text">সফল প্রজেক্টসমূহ</span>
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed">
            আমাদের তৈরি করা সৃজনশীল সমাধান এবং সাফল্যের গল্পগুলো দেখুন। আমরা আপনার জন্য কী করতে পারি তার একটি ঝলক।
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Portfolio Grid ── */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={index}
                className="glass-card overflow-hidden group flex flex-col h-full"
              >
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] to-transparent opacity-60" />
                  <Link 
                    href={project.link}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0F172A]/80 backdrop-blur-md flex items-center justify-center border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#0EA5E9]"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#F1F5F9] mb-3 group-hover:text-[#0EA5E9] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#94A3B8] mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#7DD3FC] rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── CTA ── */}
      <section className="py-20 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="blob w-[500px] h-[500px] bg-[#6366F1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto" data-aos="fade-up">
          <div className="glass-card p-12 text-center border border-[#0EA5E9]/20">
            <div className="shimmer-line mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-4">
              আপনার প্রজেক্ট শুরু করতে প্রস্তুত?
            </h2>
            <p className="text-[#94A3B8] text-base md:text-lg mb-8 max-w-2xl mx-auto">
              আমাদের দক্ষতার মাধ্যমে আপনার আইডিয়াগুলোকে বাস্তবে রূপ দিতে আমরা সর্বদা প্রস্তুত। 
              আজই আমাদের সাথে যোগাযোগ করুন।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base">
                যোগাযোগ করুন
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="shimmer-line mt-8" />
          </div>
        </div>
      </section>
    </div>
  );
}
