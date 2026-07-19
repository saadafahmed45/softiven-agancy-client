"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Softiven আমার জন্য অসাধারণ একটি ওয়েবসাইট তৈরি করেছে। তারা আমার চাহিদা বুঝে পেশাদারভাবে কাজ করেছে। ওয়েবসাইটটি দেখে আমার গ্রাহকরা খুবই মুগ্ধ। সত্যিই দারুণ কাজ করেছে দলটি!",
    name: "মোহাম্মদ রাকিব হাসান",
    role: "স্বত্বাধিকারী, রাকিব গার্মেন্টস",
    location: "ঢাকা, বাংলাদেশ",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "Shopify স্টোর বানানোর জন্য Softiven-এর কাছে গিয়ে সঠিক সিদ্ধান্ত নিয়েছিলাম। তারা আমার স্টোর সুন্দরভাবে সাজিয়েছে এবং অনলাইন বিক্রয় ৩ গুণ বেড়ে গেছে। অসাধারণ সেবা!",
    name: "নুসরাত জাহান",
    role: "উদ্যোক্তা, NJ Fashion Store",
    location: "চট্টগ্রাম, বাংলাদেশ",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "Facebook মার্কেটিং ক্যাম্পেইনের জন্য Softiven-এর সাথে কাজ করা সত্যিই উপকারী ছিল। মাত্র ৩ মাসে আমার ব্যবসার বিক্রয় দ্বিগুণ হয়েছে। তাদের টার্গেটেড বিজ্ঞাপন কৌশল অসাধারণ কার্যকর।",
    name: "সাইফুল ইসলাম",
    role: "ম্যানেজিং ডিরেক্টর, SL Electronics",
    location: "সিলেট, বাংলাদেশ",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "Softiven থেকে সম্পূর্ণ ব্যবসায়িক ডিজিটাল প্যাকেজ নিয়েছি — ওয়েবসাইট, ব্র্যান্ডিং আর মার্কেটিং। সব কিছু এক জায়গায় পেয়েছি এবং মান অত্যন্ত উচ্চমানের। সবাইকে রিকমেন্ড করব।",
    name: "ফারহান আহমেদ",
    role: "CEO, Farhan Tech Solutions",
    location: "রাজশাহী, বাংলাদেশ",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "আমার রেস্টুরেন্টের জন্য প্রফেশনাল ওয়েবসাইট ও ফেসবুক পেইজ ম্যানেজমেন্ট করে দিয়েছে Softiven। এখন অনলাইনে অর্ডার অনেক বেড়েছে। দলটি খুবই আন্তরিক এবং দ্রুত সাপোর্ট দেয়।",
    name: "তাহমিনা বেগম",
    role: "স্বত্বাধিকারী, তাহমিনা কিচেন",
    location: "ময়মনসিংহ, বাংলাদেশ",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "Shopify স্টোর ডিজাইন ও ডেভেলপমেন্টে Softiven সেরা। তারা আমার পণ্যগুলো সুন্দরভাবে উপস্থাপন করেছে এবং পেমেন্ট সিস্টেম নিখুঁতভাবে সেটআপ করে দিয়েছে। খুবই প্রফেশনাল টিম।",
    name: "আরিফুল ইসলাম",
    role: "ই-কমার্স উদ্যোক্তা",
    location: "খুলনা, বাংলাদেশ",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80&auto=format&fit=crop",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`text-sm ${i < rating ? "text-[#F59E0B]" : "text-[#334155]"}`}
      />
    ))}
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-28 px-6 md:px-16 bg-[#060B18] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob w-[400px] h-[400px] bg-[#6366F1] top-0 right-0" style={{ animationDelay: "1s" }} />
        <div className="blob w-[350px] h-[350px] bg-[#0EA5E9] bottom-0 left-0" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="section-badge mb-4">ক্লায়েন্ট রিভিউ</div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F1F5F9] mb-4">
            আমাদের{" "}
            <span className="gradient-text">ক্লায়েন্টরা কী বলেন</span>
          </h2>
          <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl mx-auto">
            বাংলাদেশের বিভিন্ন প্রান্তের সফল উদ্যোক্তারা Softiven-এর সাথে
            তাদের ডিজিটাল যাত্রা শুরু করেছেন।
          </p>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <StarRating rating={5} />
            <span className="text-[#F1F5F9] font-bold text-lg">৫.০</span>
            <span className="text-[#64748B] text-sm">({testimonials.length * 30}+ রিভিউ)</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card flex flex-col gap-5">
              {/* Quote icon */}
              <FaQuoteLeft className="text-[#0EA5E9]/30 text-3xl" />

              {/* Rating */}
              <StarRating rating={t.rating} />

              {/* Quote */}
              <p className="text-[#CBD5E1] text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#0EA5E9]/20 to-transparent" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#0EA5E9]/30"
                  src={t.avatar}
                  alt={t.name}
                />
                <div>
                  <p className="text-[#F1F5F9] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#64748B] text-xs">{t.role}</p>
                  <p className="text-[#0EA5E9] text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up">
          {[
            { value: "১৫০+", label: "সন্তুষ্ট ক্লায়েন্ট" },
            { value: "৯৮%", label: "সাফল্যের হার" },
            { value: "২০০+", label: "সফল প্রজেক্ট" },
            { value: "৪+", label: "বছরের অভিজ্ঞতা" },
          ].map((stat, i) => (
            <div key={i} className="stat-card text-center">
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-[#64748B] text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
