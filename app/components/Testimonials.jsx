"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Softiven created an outstanding website for me. They understood my needs and worked professionally. My customers are truly impressed with the website. The team did a fantastic job!",
    name: "Mohammad Rakib Hasan",
    role: "Owner, Rakib Garments",
    location: "Dhaka, Bangladesh",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "I made the right decision going to Softiven for my Shopify store. They designed my store beautifully and online sales have increased 3 times. Outstanding service!",
    name: "Nusrat Jahan",
    role: "Entrepreneur, NJ Fashion Store",
    location: "Chittagong, Bangladesh",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "Working with Softiven on the Facebook marketing campaign was truly beneficial. In just 3 months, my business sales doubled. Their targeted advertising strategy is incredibly effective.",
    name: "Saiful Islam",
    role: "Managing Director, SL Electronics",
    location: "Sylhet, Bangladesh",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "I got a complete business digital package from Softiven — website, branding, and marketing. Everything in one place and the quality is excellent. Highly recommend to everyone.",
    name: "Farhan Ahmed",
    role: "CEO, Farhan Tech Solutions",
    location: "Rajshahi, Bangladesh",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "Softiven created a professional website and manages my Facebook page for my restaurant. Online orders have increased significantly. The team is very dedicated and provides quick support.",
    name: "Tahmina Begum",
    role: "Owner, Tahmina Kitchen",
    location: "Mymensingh, Bangladesh",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "Softiven is the best at Shopify store design and development. They presented my products beautifully and set up the payment system perfectly. A very professional team.",
    name: "Ariful Islam",
    role: "E-Commerce Entrepreneur",
    location: "Khulna, Bangladesh",
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
          <div className="section-badge mb-4">Client Reviews</div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F1F5F9] mb-4">
            What Our{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl mx-auto">
            Successful entrepreneurs from across Bangladesh have started
            their digital journey with Softiven.
          </p>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <StarRating rating={5} />
            <span className="text-[#F1F5F9] font-bold text-lg">5.0</span>
            <span className="text-[#64748B] text-sm">({testimonials.length * 30}+ Reviews)</span>
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
            { value: "150+", label: "Satisfied Clients" },
            { value: "98%", label: "Success Rate" },
            { value: "200+", label: "Successful Projects" },
            { value: "4+", label: "Years of Experience" },
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
