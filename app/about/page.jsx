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
  "অভিজ্ঞ ডেভেলপার, ডিজাইনার ও মার্কেটার টিম",
  "বিভিন্ন শিল্পে সফল প্রজেক্টের প্রমাণিত ট্র্যাক রেকর্ড",
  "সময়মতো ডেলিভারি ও দ্রুত সাপোর্ট",
  "আধুনিক প্রযুক্তি ও সেরা অনুশীলন",
  "বাজেট-বান্ধব প্যাকেজ ও কাস্টম সমাধান",
  "সম্পূর্ণ ডিজিটাল মার্কেটিং সমাধান",
];

const coreValues = [
  {
    icon: Zap,
    title: "উদ্ভাবন",
    desc: "আমরা সর্বদা নতুন প্রযুক্তি ও পদ্ধতি ব্যবহার করে অত্যাধুনিক সমাধান তৈরি করি।",
    color: "#0EA5E9",
  },
  {
    icon: Target,
    title: "শ্রেষ্ঠত্ব",
    desc: "আমরা এমন উচ্চমানের সমাধান দিতে প্রতিশ্রুতিবদ্ধ যা প্রত্যাশার চেয়ে বেশি ফলাফল দেয়।",
    color: "#6366F1",
  },
  {
    icon: Heart,
    title: "আন্তরিকতা",
    desc: "আমরা আপনার ব্যবসাকে নিজের মতো ভাবি এবং সর্বোচ্চ মনোযোগ দিয়ে কাজ করি।",
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
          <div className="section-badge mb-6">আমাদের সম্পর্কে</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1F5F9] leading-tight mb-6">
            আপনার ব্যবসার{" "}
            <span className="gradient-text">ডিজিটাল পার্টনার</span>
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Softiven-এ আমরা বিশ্বাস করি প্রতিটি ব্যবসার একটি শক্তিশালী ডিজিটাল উপস্থিতি প্রয়োজন।
            আমরা ওয়েবসাইট তৈরি, Shopify স্টোর ডিজাইন ও ফেসবুক মার্কেটিং-এর মাধ্যমে
            আপনার ব্যবসাকে এগিয়ে নিয়ে যাই।
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
                <p className="text-3xl font-bold gradient-text">২০২১</p>
                <p className="text-[#94A3B8] text-sm">সাল থেকে সেবায়</p>
              </div>
            </div>

            {/* Content */}
            <div data-aos="fade-left" className="space-y-6">
              <div className="section-badge">আমাদের যাত্রা</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9]">
                কিভাবে শুরু হলো{" "}
                <span className="gradient-text">Softiven?</span>
              </h2>
              <p className="text-[#94A3B8] text-base leading-relaxed">
                ২০২১ সালে একটি সহজ লক্ষ্য নিয়ে Softiven প্রতিষ্ঠিত হয় — বাংলাদেশের ব্যবসায়ীদের
                জন্য সাশ্রয়ী ও প্রফেশনাল ডিজিটাল সমাধান তৈরি করা।
              </p>
              <p className="text-[#94A3B8] text-base leading-relaxed">
                আমাদের যাত্রা শুরু হয়েছিল ওয়েব ডেভেলপমেন্ট দিয়ে। ক্রমশ আমরা Shopify স্টোর
                ডিজাইন, Facebook মার্কেটিং এবং সম্পূর্ণ ডিজিটাল বিজনেস সলিউশনে প্রসারিত হয়েছি।
                আমাদের লক্ষ্য সবসময় — আপনার ব্যবসার বৃদ্ধি নিশ্চিত করা।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/portfolio" className="btn-primary">
                  আমাদের কাজ দেখুন
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-outline">
                  যোগাযোগ করুন
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
            <div className="section-badge">আমাদের মূল্যবোধ</div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#F1F5F9] mt-4">
              যা আমাদের{" "}
              <span className="gradient-text">আলাদা করে</span>
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
              <div className="section-badge">কেন আমরা?</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9]">
                কেন Softiven বেছে নেবেন?
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
                  আমাদের সেবা দেখুন
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
              আজই আপনার ব্যবসার{" "}
              <span className="gradient-text">ডিজিটাল সফর শুরু করুন</span>
            </h2>
            <p className="text-[#94A3B8] text-lg mb-8 max-w-2xl mx-auto">
              বিনামূল্যে পরামর্শ নিন এবং জানুন কিভাবে আমরা আপনার ব্যবসাকে
              অনলাইনে এগিয়ে নিয়ে যেতে পারি।
            </p>
            <Link href="/contact" className="btn-primary text-base">
              <span>বিনামূল্যে পরামর্শ নিন</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <div className="shimmer-line mt-8" />
          </div>
        </div>
      </section>
    </div>
  );
}
