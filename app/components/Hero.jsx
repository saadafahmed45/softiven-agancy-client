"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

// Animated counter hook
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const stats = [
  { value: 150, suffix: "+", label: "সন্তুষ্ট ক্লায়েন্ট" },
  { value: 200, suffix: "+", label: "সফল প্রজেক্ট" },
  { value: 4, suffix: "+", label: "বছরের অভিজ্ঞতা" },
  { value: 98, suffix: "%", label: "সাফল্যের হার" },
];

const highlights = [
  "প্রফেশনাল ওয়েবসাইট ডিজাইন",
  "Shopify স্টোর সেটআপ",
  "Facebook বিজ্ঞাপন পরিচালনা",
  "২৪/৭ সাপোর্ট",
];

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0F1E]">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="blob w-[600px] h-[600px] bg-[#0EA5E9] top-[-200px] right-[-150px]"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="blob w-[500px] h-[500px] bg-[#6366F1] bottom-[-100px] left-[-150px]"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="blob w-[300px] h-[300px] bg-[#22D3EE] top-[40%] left-[40%]"
          style={{ animationDelay: "4s" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(14,165,233,1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 section-badge">
              <HiSparkles className="text-[#0EA5E9]" />
              <span>বাংলাদেশের বিশ্বস্ত ডিজিটাল এজেন্সি</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#F1F5F9]">
              আপনার ব্যবসাকে{" "}
              <span className="gradient-text">ডিজিটালে</span>{" "}
              নিয়ে যান
            </h1>

            {/* Sub-headline */}
            <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed max-w-xl">
              আমরা প্রফেশনাল ওয়েবসাইট তৈরি, Shopify স্টোর ডিজাইন ও ডেভেলপমেন্ট এবং{" "}
              Facebook মার্কেটিং সেবা দিয়ে আপনার ব্যবসাকে সাফল্যের পথে নিয়ে যাই।
            </p>

            {/* Highlights */}
            <ul className="space-y-2">
              {highlights.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-[#CBD5E1] text-sm"
                >
                  <FaCheckCircle className="text-[#0EA5E9] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/contact" className="btn-primary text-base" id="hero-book-consultation">
                <FaCalendarAlt />
                বিনামূল্যে পরামর্শ নিন
              </Link>
              <Link href="/portfolio" className="btn-outline text-base">
                আমাদের কাজ দেখুন
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          {/* Right — Stats + Floating Card */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Main visual card */}
            <div className="glass-card p-8 relative">
              {/* Top shimmer line */}
              <div className="shimmer-line mb-8" />

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-8" ref={ref}>
                {stats.map((stat, i) => (
                  <StatCard key={i} stat={stat} visible={visible} />
                ))}
              </div>

              {/* Service chips */}
              <div className="space-y-3">
                <p className="text-[#64748B] text-xs font-semibold uppercase tracking-widest">
                  আমাদের সেবাসমূহ
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "ওয়েবসাইট তৈরি",
                    "Shopify স্টোর",
                    "Facebook মার্কেটিং",
                    "ব্র্যান্ড ডিজাইন",
                    "SEO অপটিমাইজেশন",
                    "ই-কমার্স সমাধান",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#7DD3FC]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom shimmer line */}
              <div className="shimmer-line mt-8" />
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] rounded-2xl p-4 shadow-glow animate-float">
              <div className="text-center text-white">
                <p className="text-2xl font-bold">৯৮%</p>
                <p className="text-xs opacity-90">ক্লায়েন্ট সন্তুষ্টি</p>
              </div>
            </div>

            {/* Floating badge 2 */}
            <div
              className="absolute -bottom-4 -left-4 glass-card p-4 shadow-card-hover animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#22D3EE] to-[#0EA5E9] flex items-center justify-center text-white text-lg font-bold">
                  ✓
                </div>
                <div>
                  <p className="text-[#F1F5F9] text-sm font-semibold">প্রজেক্ট সম্পন্ন</p>
                  <p className="text-[#0EA5E9] text-xs font-bold">২০০+ সফল প্রজেক্ট</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0F1E] to-transparent pointer-events-none" />
    </section>
  );
};

function StatCard({ stat, visible }) {
  const count = useCounter(stat.value, 2000, visible);
  return (
    <div className="stat-card">
      <p className="text-3xl font-bold gradient-text">
        {count}
        {stat.suffix}
      </p>
      <p className="text-[#64748B] text-sm mt-1">{stat.label}</p>
    </div>
  );
}

export default Hero;
