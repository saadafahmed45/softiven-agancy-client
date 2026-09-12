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
    title: "Professional Website Development",
    description:
      "We create attractive and fully responsive websites for your business that work beautifully on any device.",
    features: [
      "Custom Design & Development",
      "Mobile-First Responsive Layout",
      "SEO-Friendly Code",
      "Fast Loading Speed",
    ],
    color: "#0EA5E9",
    gradient: "from-[#0EA5E9] to-[#22D3EE]",
    badge: "Most Popular",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Store Design & Development",
    description:
      "Create a professional Shopify store for your online business. Manage everything from product sales to payments seamlessly.",
    features: [
      "Custom Theme Design",
      "Payment Gateway Integration",
      "Product Management Setup",
      "App Integration",
    ],
    color: "#6366F1",
    gradient: "from-[#6366F1] to-[#8B5CF6]",
    badge: "E-Commerce",
  },
  {
    icon: Megaphone,
    title: "Facebook Marketing & Advertising",
    description:
      "Reach the right customers and boost sales through targeted Facebook ad campaigns.",
    features: [
      "Targeted Ad Campaigns",
      "Content Creation",
      "Ad Performance Tracking",
      "ROI Optimization",
    ],
    color: "#22D3EE",
    gradient: "from-[#22D3EE] to-[#0EA5E9]",
    badge: "Marketing",
  },
  {
    icon: BarChart3,
    title: "Complete Business Solution",
    description:
      "We provide complete digital solutions from starting to growing your business. Get all services in one package.",
    features: [
      "Website + Marketing Package",
      "Brand Identity Creation",
      "Social Media Management",
      "Monthly Performance Reports",
    ],
    color: "#F59E0B",
    gradient: "from-[#F59E0B] to-[#EF4444]",
    badge: "All-in-One",
  },
  {
    icon: Palette,
    title: "Brand Design & Graphics",
    description:
      "Present your brand attractively. From logos to complete brand identity, we create it all.",
    features: [
      "Logo Design",
      "Banners & Posters",
      "Social Media Design",
      "UI/UX Design",
    ],
    color: "#EC4899",
    gradient: "from-[#EC4899] to-[#8B5CF6]",
    badge: "Creative",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description:
      "Boost your business ranking on Google and increase organic traffic. Ensure long-term digital success.",
    features: [
      "Keyword Research & Optimization",
      "Google My Business Setup",
      "Content Marketing",
      "Link Building",
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
          <div className="section-badge mb-6">Our Services</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1F5F9] leading-tight mb-6">
            Complete{" "}
            <span className="gradient-text">Digital Solutions</span> for Your Business
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed">
            From websites to Shopify stores, Facebook marketing to brand design —
            all services under one roof for your digital success.
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
              Need a Custom Solution?
            </h2>
            <p className="text-[#94A3B8] text-base md:text-lg mb-8 max-w-2xl mx-auto">
              We create custom solutions tailored to your specific business needs.
              Get a free consultation today and start your dream project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base">
                Get Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/portfolio" className="btn-outline text-base">
                View Our Portfolio
              </Link>
            </div>
            <div className="shimmer-line mt-8" />
          </div>
        </div>
      </section>
    </div>
  );
}
