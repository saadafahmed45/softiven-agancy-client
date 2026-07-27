"use client";
import { useEffect } from "react";
import AOS from "aos";
import {
  Globe,
  ShoppingBag,
  Megaphone,
  BarChart3,
  Palette,
  Search,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "প্রফেশনাল ওয়েবসাইট তৈরি",
    description:
      "আপনার ব্যবসার জন্য আকর্ষণীয় ও সম্পূর্ণ রেসপনসিভ ওয়েবসাইট তৈরি করা হয় যা যেকোনো ডিভাইসে সুন্দরভাবে কাজ করে।",
    features: [
      "কাস্টম ডিজাইন ও ডেভেলপমেন্ট",
      "মোবাইল-ফার্স্ট রেসপনসিভ লেআউট",
      "SEO-ফ্রেন্ডলি কোড",
      "দ্রুত লোডিং স্পিড",
    ],
    color: "#0EA5E9",
    gradient: "from-[#0EA5E9] to-[#22D3EE]",
    badge: "সবচেয়ে জনপ্রিয়",
  },
  {
    icon: ShoppingBag,
    title: "Shopify স্টোর ডিজাইন ও ডেভেলপমেন্ট",
    description:
      "আপনার অনলাইন ব্যবসার জন্য পেশাদার Shopify স্টোর তৈরি করুন। পণ্য বিক্রি থেকে পেমেন্ট পর্যন্ত সবকিছু সুবিধাজনকভাবে পরিচালনা করুন।",
    features: [
      "কাস্টম থিম ডিজাইন",
      "পেমেন্ট গেটওয়ে ইন্টিগ্রেশন",
      "প্রোডাক্ট ম্যানেজমেন্ট সেটআপ",
      "অ্যাপ ইন্টিগ্রেশন",
    ],
    color: "#6366F1",
    gradient: "from-[#6366F1] to-[#8B5CF6]",
    badge: "ই-কমার্স",
  },
  {
    icon: Megaphone,
    title: "Facebook মার্কেটিং ও বিজ্ঞাপন",
    description:
      "টার্গেটেড Facebook বিজ্ঞাপন প্রচারণার মাধ্যমে আপনার সঠিক কাস্টমারের কাছে পৌঁছান এবং বিক্রয় বাড়ান।",
    features: [
      "টার্গেটেড অ্যাড ক্যাম্পেইন",
      "কনটেন্ট ক্রিয়েশন",
      "অ্যাড পারফরম্যান্স ট্র্যাকিং",
      "ROI অপটিমাইজেশন",
    ],
    color: "#22D3EE",
    gradient: "from-[#22D3EE] to-[#0EA5E9]",
    badge: "মার্কেটিং",
  },
  {
    icon: BarChart3,
    title: "সম্পূর্ণ ব্যবসায়িক সমাধান",
    description:
      "আপনার ব্যবসার শুরু থেকে বিকাশ পর্যন্ত সম্পূর্ণ ডিজিটাল সমাধান প্রদান করি। একটি প্যাকেজে সব সেবা পান।",
    features: [
      "ওয়েবসাইট + মার্কেটিং প্যাকেজ",
      "ব্র্যান্ড আইডেন্টিটি তৈরি",
      "সোশ্যাল মিডিয়া ম্যানেজমেন্ট",
      "মাসিক পারফরম্যান্স রিপোর্ট",
    ],
    color: "#F59E0B",
    gradient: "from-[#F59E0B] to-[#EF4444]",
    badge: "অল-ইন-ওয়ান",
  },
  {
    icon: Palette,
    title: "ব্র্যান্ড ডিজাইন ও গ্রাফিক্স",
    description:
      "আপনার ব্র্যান্ডকে আকর্ষণীয়ভাবে উপস্থাপন করুন। লোগো থেকে শুরু করে সম্পূর্ণ ব্র্যান্ড আইডেন্টিটি তৈরি করি।",
    features: [
      "লোগো ডিজাইন",
      "ব্যানার ও পোস্টার",
      "সোশ্যাল মিডিয়া ডিজাইন",
      "UI/UX ডিজাইন",
    ],
    color: "#EC4899",
    gradient: "from-[#EC4899] to-[#8B5CF6]",
    badge: "ক্রিয়েটিভ",
  },
  {
    icon: Search,
    title: "SEO ও ডিজিটাল মার্কেটিং",
    description:
      "Google-এ আপনার ব্যবসার র‍্যাংকিং বাড়ান এবং অর্গানিক ট্র্যাফিক বৃদ্ধি করুন। দীর্ঘমেয়াদী ডিজিটাল সাফল্য নিশ্চিত করুন।",
    features: [
      "কীওয়ার্ড রিসার্চ ও অপটিমাইজেশন",
      "গুগল মাই বিজনেস সেটআপ",
      "কনটেন্ট মার্কেটিং",
      "লিংক বিল্ডিং",
    ],
    color: "#10B981",
    gradient: "from-[#10B981] to-[#22D3EE]",
    badge: "SEO",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="bg-[#0A0F1E]">
      {/* ── Hero Banner ── */}
      <section className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="blob w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] bg-[#6366F1] top-0 left-0" />
          <div className="blob w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] bg-[#0EA5E9] bottom-0 right-0" style={{ animationDelay: "3s" }} />
        </div>
        <div className="relative max-w-4xl mx-auto text-center" data-aos="fade-up">
          <div className="section-badge mb-6">আমাদের সেবাসমূহ</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1F5F9] leading-tight mb-6">
            আপনার ব্যবসার জন্য{" "}
            <span className="gradient-text">সম্পূর্ণ ডিজিটাল সমাধান</span>
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed">
            ওয়েবসাইট থেকে Shopify স্টোর, Facebook মার্কেটিং থেকে ব্র্যান্ড ডিজাইন —
            আপনার ব্যবসার ডিজিটাল সাফল্যের জন্য সব সেবা এক ছাদের নিচে।
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Services Grid ── */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="service-card group relative"
              >
                {/* Badge */}
                {service.badge && (
                  <span
                    className="absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: `${service.color}20`,
                      border: `1px solid ${service.color}40`,
                      color: service.color,
                    }}
                  >
                    {service.badge}
                  </span>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.gradient} bg-opacity-10 transition-transform duration-300 group-hover:scale-110`}
                  style={{ background: `${service.color}18`, border: `1px solid ${service.color}30` }}
                >
                  <service.icon style={{ color: service.color }} className="h-7 w-7" />
                </div>

                {/* Title & Description */}
                <h2 className="text-xl font-bold text-[#F1F5F9] mb-3">{service.title}</h2>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-sm text-[#CBD5E1]">
                      <CheckCircle
                        className="h-4 w-4 flex-shrink-0"
                        style={{ color: service.color }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── CTA ── */}
      <section className="py-20 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="blob w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] bg-[#0EA5E9] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto" data-aos="fade-up">
          <div className="glass-card p-12 text-center border border-[#0EA5E9]/20">
            <div className="shimmer-line mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-4">
              কাস্টম সমাধান দরকার?
            </h2>
            <p className="text-[#94A3B8] text-base md:text-lg mb-8 max-w-2xl mx-auto">
              আমরা আপনার ব্যবসার নির্দিষ্ট চাহিদা অনুযায়ী কাস্টম সমাধান তৈরি করি।
              আজই বিনামূল্যে পরামর্শ নিন এবং আপনার স্বপ্নের প্রজেক্ট শুরু করুন।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base">
                বিনামূল্যে পরামর্শ নিন
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/portfolio" className="btn-outline text-base">
                আমাদের পোর্টফোলিও দেখুন
              </Link>
            </div>
            <div className="shimmer-line mt-8" />
          </div>
        </div>
      </section>
    </div>
  );
}
