import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const quickLinks = [
  { href: "/", label: "হোম" },
  { href: "/about", label: "আমাদের সম্পর্কে" },
  { href: "/services", label: "সেবাসমূহ" },
  { href: "/portfolio", label: "পোর্টফোলিও" },
  { href: "/contact", label: "যোগাযোগ" },
];

const serviceLinks = [
  { href: "/services", label: "ওয়েবসাইট তৈরি" },
  { href: "/services", label: "Shopify স্টোর ডিজাইন" },
  { href: "/services", label: "Facebook মার্কেটিং" },
  { href: "/services", label: "ব্র্যান্ড ডিজাইন" },
  { href: "/services", label: "SEO সেবা" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060B18] border-t border-[#0EA5E9]/10">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/">
              <Image
                className="h-auto w-[150px] brightness-[5] contrast-[0.8]"
                src="/logo_2.svg"
                alt="Softiven Logo"
                width={150}
                height={45}
              />
            </Link>
            <p className="text-[#64748B] text-sm leading-relaxed">
              Softiven — আপনার ব্যবসার বিশ্বস্ত ডিজিটাল পার্টনার। ওয়েবসাইট, Shopify
              ও Facebook মার্কেটিংয়ে আমরা আপনার পাশে।
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/softiven"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Softiven Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0F172A] border border-[#1E293B] text-[#64748B] hover:text-[#0EA5E9] hover:border-[#0EA5E9]/40 hover:bg-[#0EA5E9]/10 transition-all duration-200"
              >
                <FaFacebook className="text-base" />
              </a>
              <a
                href="https://wa.me/8801890195058"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Softiven WhatsApp"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0F172A] border border-[#1E293B] text-[#64748B] hover:text-[#22D3EE] hover:border-[#22D3EE]/40 hover:bg-[#22D3EE]/10 transition-all duration-200"
              >
                <FaWhatsapp className="text-base" />
              </a>
              <a
                href="mailto:info@softiven.com"
                aria-label="Softiven LinkedIn"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0F172A] border border-[#1E293B] text-[#64748B] hover:text-[#6366F1] hover:border-[#6366F1]/40 hover:bg-[#6366F1]/10 transition-all duration-200"
              >
                <FaLinkedin className="text-base" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[#F1F5F9] font-semibold mb-6 text-base">
              দ্রুত লিংক
            </p>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="text-[#64748B] text-sm hover:text-[#0EA5E9] transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]/30 group-hover:bg-[#0EA5E9] transition-colors" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[#F1F5F9] font-semibold mb-6 text-base">
              আমাদের সেবা
            </p>
            <div className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#64748B] text-sm hover:text-[#0EA5E9] transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]/30 group-hover:bg-[#6366F1] transition-colors" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#F1F5F9] font-semibold mb-6 text-base">
              যোগাযোগ করুন
            </p>
            <div className="space-y-4">
              <a
                href="mailto:info@softiven.com"
                className="flex items-center gap-3 text-[#64748B] text-sm hover:text-[#0EA5E9] transition-colors duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0EA5E9]/20">
                  <FaEnvelope className="text-[#0EA5E9] text-xs" />
                </div>
                info@softiven.com
              </a>
              <a
                href="tel:+8801890195058"
                className="flex items-center gap-3 text-[#64748B] text-sm hover:text-[#22D3EE] transition-colors duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#22D3EE]/10 border border-[#22D3EE]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#22D3EE]/20">
                  <FaPhoneAlt className="text-[#22D3EE] text-xs" />
                </div>
                +880 1890-195058
              </a>
              <div className="flex items-start gap-3 text-[#64748B] text-sm">
                <div className="w-8 h-8 rounded-lg bg-[#6366F1]/10 border border-[#6366F1]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="text-[#6366F1] text-xs" />
                </div>
                ঢাকা, বাংলাদেশ
              </div>
            </div>

            {/* Book consultation mini CTA */}
            <Link
              href="/contact"
              className="mt-6 w-full btn-primary text-sm justify-center"
              id="footer-book-consultation"
            >
              পরামর্শ নিন
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="section-divider" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Softiven. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-[#475569] text-sm text-center">
            ❤️ দিয়ে তৈরি করেছে{" "}
            <span className="gradient-text font-semibold">Softiven Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
