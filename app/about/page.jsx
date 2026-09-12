"use client";
import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Heart,
} from "lucide-react";

const whyChooseItems = [
  "Experienced team of developers, designers, and marketers",
  "Proven track record of successful projects across industries",
  "Timely delivery and quick support",
  "Modern technology and best practices",
  "Budget-friendly packages and custom solutions",
  "Complete digital marketing solutions",
];

const coreValues = [
  {
    icon: Zap,
    title: "Innovation",
    desc: "We always use the latest technologies and methods to create cutting-edge solutions.",
    color: "#0EA5E9",
  },
  {
    icon: Target,
    title: "Excellence",
    desc: "We are committed to delivering high-quality solutions that exceed expectations.",
    color: "#6366F1",
  },
  {
    icon: Heart,
    title: "Integrity",
    desc: "We treat your business as our own and work with utmost dedication and focus.",
    color: "#22D3EE",
  },
];

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="bg-[#0A0F1E]">
      {/* ── Hero Banner ── */}
      <section className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="blob w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] bg-[#0EA5E9] top-0 right-0" />
          <div className="blob w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-[#6366F1] bottom-0 left-0" style={{ animationDelay: "3s" }} />
        </div>
        <div className="relative max-w-5xl mx-auto text-center" data-aos="fade-up">
          <div className="section-badge mb-6">About Us</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1F5F9] leading-tight mb-6">
            Your Business&apos;s{" "}
            <span className="gradient-text">Digital Partner</span>
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            At Softiven, we believe every business needs a strong digital presence.
            We help you move forward through website development, Shopify store design,
            and Facebook marketing.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Our Story ── */}
      <section className="py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div data-aos="fade-right" className="relative">
              <div className="glass-card overflow-hidden">
                <Image
                  alt="Softiven team collaborating"
                  className="w-full h-auto object-cover rounded-2xl"
                  height={400}
                  src="https://images.pexels.com/photos/3182762/pexels-photo-3182762.jpeg"
                  width={600}
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 glass-card p-5 border border-[#0EA5E9]/30">
                <p className="text-3xl font-bold gradient-text">2021</p>
                <p className="text-[#94A3B8] text-sm">Serving since</p>
              </div>
            </div>

            {/* Content */}
            <div data-aos="fade-left" className="space-y-6">
              <div className="section-badge">Our Journey</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9]">
                How{" "}
                <span className="gradient-text">Softiven</span> Started?
              </h2>
              <p className="text-[#94A3B8] text-base leading-relaxed">
                Softiven was founded in 2021 with a simple goal — to create affordable
                and professional digital solutions for businesses in Bangladesh.
              </p>
              <p className="text-[#94A3B8] text-base leading-relaxed">
                Our journey started with web development. Gradually, we expanded into
                Shopify store design, Facebook marketing, and complete digital business
                solutions. Our goal has always been — to ensure your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/portfolio" className="btn-primary">
                  See Our Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Core Values ── */}
      <section className="py-20 md:py-28 px-6 md:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="section-badge">Our Core Values</div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#F1F5F9] mt-4">
              What Makes Us{" "}
              <span className="gradient-text">Different</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
            {coreValues.map((val, i) => (
              <div key={i} className="service-card text-center group">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${val.color}20`, border: `1px solid ${val.color}40` }}
                >
                  <val.icon style={{ color: val.color }} className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-[#F1F5F9] mb-3">{val.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Why Choose Us ── */}
      <section className="py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" className="space-y-6">
              <div className="section-badge">Why Choose Us?</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9]">
                Why Choose Softiven?
              </h2>
              <ul className="space-y-4">
                {whyChooseItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#0EA5E9]/20 border border-[#0EA5E9]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3.5 w-3.5 text-[#0EA5E9]" />
                    </div>
                    <span className="text-[#CBD5E1] text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link href="/services" className="btn-primary">
                  View Our Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div data-aos="fade-left">
              <Image
                alt="Softiven office"
                className="w-full rounded-2xl"
                height={400}
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── CTA Banner ── */}
      <section className="py-20 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cta opacity-10 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="blob w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] bg-[#6366F1] top-0 left-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center" data-aos="fade-up">
          <div className="glass-card p-12 border border-[#0EA5E9]/20">
            <div className="shimmer-line mb-8" />
            <h2 className="text-3xl md:text-5xl font-bold text-[#F1F5F9] mb-6">
              Start Your Business&apos;s{" "}
              <span className="gradient-text">Digital Journey Today</span>
            </h2>
            <p className="text-[#94A3B8] text-lg mb-8 max-w-2xl mx-auto">
              Get a free consultation and learn how we can take your business
              forward online.
            </p>
            <Link href="/contact" className="btn-primary text-base">
              <span>Get Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <div className="shimmer-line mt-8" />
          </div>
        </div>
      </section>
    </div>
  );
}
