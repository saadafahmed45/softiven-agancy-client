import Link from "next/link";
import React from "react";
import { FaCalendarAlt, FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Cta = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-16 bg-[#060B18] relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="blob w-[600px] h-[600px] bg-[#0EA5E9] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ opacity: 0.12 }}
        />
        <div className="blob w-[300px] h-[300px] bg-[#6366F1] top-0 right-0" style={{ opacity: 0.1, animationDelay: "2s" }} />
        <div className="blob w-[250px] h-[250px] bg-[#22D3EE] bottom-0 left-0" style={{ opacity: 0.1, animationDelay: "4s" }} />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="glass-card p-10 md:p-16 text-center border border-[#0EA5E9]/20 relative overflow-hidden">
          {/* Top shimmer */}
          <div className="shimmer-line mb-10" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 section-badge mb-6">
            <HiSparkles />
            বিনামূল্যে পরামর্শ
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#F1F5F9] leading-tight mb-6">
            আপনার ব্যবসাকে পরবর্তী স্তরে{" "}
            <span className="gradient-text">নিয়ে যেতে প্রস্তুত?</span>
          </h2>

          {/* Description */}
          <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
            আমরা আপনার ব্যবসার জন্য কাস্টম ডিজিটাল সমাধান তৈরি করতে প্রস্তুত।
            ওয়েবসাইট, Shopify স্টোর, Facebook মার্কেটিং — যাই হোক না কেন,
            আমরা আপনার পাশে আছি।
          </p>
          <p className="text-[#64748B] text-sm mb-10">
            আজই যোগাযোগ করুন এবং প্রথম পরামর্শটি সম্পূর্ণ বিনামূল্যে পান!
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="btn-primary text-base w-full sm:w-auto justify-center"
              id="cta-book-consultation"
            >
              <FaCalendarAlt />
              বিনামূল্যে পরামর্শ নিন
            </Link>
            <a
              href="tel:+8801890195058"
              className="btn-outline text-base w-full sm:w-auto justify-center"
            >
              <FaPhoneAlt className="text-xs" />
              এখনই কল করুন
            </a>
          </div>

          {/* Trust note */}
          <p className="text-[#475569] text-xs mt-8">
            ✓ কোনো লুকানো চার্জ নেই &nbsp;|&nbsp; ✓ দ্রুত রেসপন্স &nbsp;|&nbsp; ✓ বিশেষজ্ঞ পরামর্শ
          </p>

          {/* Bottom shimmer */}
          <div className="shimmer-line mt-10" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
