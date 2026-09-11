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
          className="blob w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[600px] lg:h-[600px] bg-[#0EA5E9] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ opacity: 0.12 }}
        />
        <div className="blob w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[260px] md:h-[260px] bg-[#6366F1] top-0 right-0" style={{ opacity: 0.1, animationDelay: "2s" }} />
        <div className="blob w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[220px] md:h-[220px] bg-[#22D3EE] bottom-0 left-0" style={{ opacity: 0.1, animationDelay: "4s" }} />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="glass-card p-10 md:p-16 text-center border border-[#0EA5E9]/20 relative overflow-hidden">
          {/* Top shimmer */}
          <div className="shimmer-line mb-10" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 section-badge mb-6">
            <HiSparkles />
            Free Consultation
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#F1F5F9] leading-tight mb-6">
            Ready to Take Your Business{" "}
            <span className="gradient-text">to the Next Level?</span>
          </h2>

          {/* Description */}
          <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
            We are ready to build a custom digital solution for your business.
            Website, Shopify store, Facebook marketing — whatever it is,
            we've got you covered.
          </p>
          <p className="text-[#64748B] text-sm mb-10">
            Contact us today and get your first consultation completely free!
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="btn-primary text-base w-full sm:w-auto justify-center"
              id="cta-book-consultation"
            >
              <FaCalendarAlt />
              Get a Free Consultation
            </Link>
            <a
              href="tel:+8801890195058"
              className="btn-outline text-base w-full sm:w-auto justify-center"
            >
              <FaPhoneAlt className="text-xs" />
              Call Now
            </a>
          </div>

          {/* Trust note */}
          <p className="text-[#475569] text-xs mt-8">
            ✓ No hidden charges &nbsp;|&nbsp; ✓ Fast response &nbsp;|&nbsp; ✓ Expert advice
          </p>

          {/* Bottom shimmer */}
          <div className="shimmer-line mt-10" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
