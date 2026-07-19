"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";

function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "হোম" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
    { href: "/services", label: "সেবাসমূহ" },
    { href: "/portfolio", label: "পোর্টফোলিও" },
    { href: "/contact", label: "যোগাযোগ" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-glass shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-10">
            <span className="gradient-text text-3xl font-bold font-display tracking-tight">
              Softiven
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} pathname={pathname} />
            ))}
          </div>

          {/* Book Consultation CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-sm font-bold"
              id="book-consultation-desktop"
            >
              <FaCalendarAlt className="text-xs" />
              পরামর্শ নিন
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="flex lg:hidden p-2 rounded-lg text-[#F1F5F9] hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {open ? (
              <IoClose className="text-2xl" />
            ) : (
              <GiHamburgerMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="nav-glass border-t border-white/5 px-6 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <NavLinkMobile
              key={link.href}
              href={link.href}
              label={link.label}
              pathname={pathname}
              onClick={() => setOpen(false)}
            />
          ))}
          <div className="pt-4 border-t border-white/10 mt-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center text-sm font-bold"
              id="book-consultation-mobile"
            >
              <FaCalendarAlt className="text-xs" />
              পরামর্শ নিন
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, label, pathname }) {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${
        isActive
          ? "text-[#0EA5E9]"
          : "text-[#94A3B8] hover:text-[#F1F5F9]"
      }`}
    >
      {label}
      <span
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] transition-all duration-300 ${
          isActive ? "w-4/5" : "w-0 group-hover:w-3/5"
        }`}
      />
    </Link>
  );
}

function NavLinkMobile({ href, label, pathname, onClick }) {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
        isActive
          ? "bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20"
          : "text-[#94A3B8] hover:bg-white/5 hover:text-[#F1F5F9]"
      }`}
    >
      {label}
    </Link>
  );
}

export default Navbar;
