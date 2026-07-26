"use client";
import { useEffect } from "react";
import AOS from "aos";
import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";

const teamMembers = [
  {
    name: "সাদ আহমেদ",
    role: "প্রতিষ্ঠাতা ও CEO",
    bio: "ওয়েব ডেভেলপমেন্ট ও ডিজিটাল মার্কেটিং-এ ৫+ বছরের অভিজ্ঞতাসম্পন্ন দক্ষ উদ্যোক্তা।",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80&auto=format&fit=crop",
    color: "#0EA5E9",
    social: {
      facebook: "https://www.facebook.com/softiven",
      linkedin: "#",
      email: "mohammadhaolader1@gmail.com",
    },
  },
  {
    name: "রাহেলা বেগম",
    role: "লিড ডিজাইনার",
    bio: "UI/UX ডিজাইন ও ব্র্যান্ড আইডেন্টিটি নির্মাণে বিশেষজ্ঞ। সৌন্দর্য ও কার্যকারিতার নিখুঁত সমন্বয়ে ডিজাইন করেন।",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80&auto=format&fit=crop",
    color: "#6366F1",
    social: {
      facebook: "#",
      linkedin: "#",
      email: "mohammadhaolader1@gmail.com",
    },
  },
  {
    name: "তানভীর হোসেন",
    role: "Shopify বিশেষজ্ঞ",
    bio: "Shopify স্টোর ডিজাইন ও ডেভেলপমেন্টে ৪+ বছরের অভিজ্ঞতা। ই-কমার্স সমাধানে দক্ষ পেশাদার।",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80&auto=format&fit=crop",
    color: "#22D3EE",
    social: {
      facebook: "#",
      linkedin: "#",
      email: "mohammadhaolader1@gmail.com",
    },
  },
  {
    name: "নাফিসা ইসলাম",
    role: "Facebook মার্কেটিং বিশেষজ্ঞ",
    bio: "টার্গেটেড Facebook বিজ্ঞাপন ও সোশ্যাল মিডিয়া মার্কেটিং-এ বিশেষজ্ঞ। ক্লায়েন্টের ROI বৃদ্ধিতে প্রমাণিত দক্ষতা।",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80&auto=format&fit=crop",
    color: "#EC4899",
    social: {
      facebook: "#",
      linkedin: "#",
      email: "mohammadhaolader1@gmail.com",
    },
  },
  {
    name: "মাহমুদ রেজা",
    role: "ফুল-স্ট্যাক ডেভেলপার",
    bio: "React, Next.js ও Node.js-এ দক্ষ ডেভেলপার। জটিল প্রজেক্টগুলো সহজে সম্পন্ন করার অদ্ভুত ক্ষমতা রাখেন।",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80&auto=format&fit=crop",
    color: "#10B981",
    social: {
      facebook: "#",
      linkedin: "#",
      email: "mohammadhaolader1@gmail.com",
    },
  },
  {
    name: "সুমাইয়া খান",
    role: "কনটেন্ট স্ট্র্যাটেজিস্ট",
    bio: "সৃজনশীল কনটেন্ট তৈরি ও SEO কৌশলে বিশেষজ্ঞ। আপনার ব্র্যান্ডের গল্পকে আকর্ষণীয়ভাবে উপস্থাপন করেন।",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80&auto=format&fit=crop",
    color: "#F59E0B",
    social: {
      facebook: "#",
      linkedin: "#",
      email: "mohammadhaolader1@gmail.com",
    },
  },
];

const TeamSection = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="py-20 md:py-28 px-6 md:px-16 bg-[#0A0F1E] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob w-[400px] h-[400px] bg-[#0EA5E9] top-0 right-1/4" />
        <div className="blob w-[350px] h-[350px] bg-[#6366F1] bottom-0 left-1/4" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="section-badge mb-4">আমাদের দল</div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F1F5F9] mb-4">
            অভিজ্ঞ ও{" "}
            <span className="gradient-text">উৎসাহী পেশাদার দল</span>
          </h2>
          <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl mx-auto">
            আমাদের দলে রয়েছেন ডিজাইন, ডেভেলপমেন্ট ও মার্কেটিং-এর বিশেষজ্ঞরা
            যারা আপনার ব্যবসাকে সাফল্যের দিকে নিয়ে যেতে প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="glass-card p-8 flex flex-col items-center text-center group"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div
                  className="absolute inset-0 rounded-full blur-lg opacity-30 scale-110"
                  style={{ background: member.color }}
                />
                <img
                  className="relative w-24 h-24 rounded-full object-cover ring-4 ring-[#1E293B] group-hover:ring-opacity-60 transition-all duration-300"
                  style={{ "--tw-ring-color": member.color }}
                  src={member.avatar}
                  alt={member.name}
                />
                {/* Online indicator */}
                <span
                  className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-[#0F172A]"
                  style={{ background: member.color }}
                />
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-[#F1F5F9] mb-1">{member.name}</h3>
              <p
                className="text-sm font-semibold mb-4 px-3 py-1 rounded-full"
                style={{
                  color: member.color,
                  background: `${member.color}15`,
                  border: `1px solid ${member.color}30`,
                }}
              >
                {member.role}
              </p>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">{member.bio}</p>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-auto">
                <a
                  href={member.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-[#1E293B] hover:bg-[#0EA5E9]/20 text-[#64748B] hover:text-[#0EA5E9] transition-all duration-200 border border-[#334155] hover:border-[#0EA5E9]/40"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-sm" />
                </a>
                <a
                  href={member.social.linkedin}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-[#1E293B] hover:bg-[#6366F1]/20 text-[#64748B] hover:text-[#6366F1] transition-all duration-200 border border-[#334155] hover:border-[#6366F1]/40"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-sm" />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-[#1E293B] hover:bg-[#22D3EE]/20 text-[#64748B] hover:text-[#22D3EE] transition-all duration-200 border border-[#334155] hover:border-[#22D3EE]/40"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
