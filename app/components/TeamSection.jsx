"use client";
import { useEffect } from "react";
import AOS from "aos";
import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";

const gradients = [
  "from-[#0EA5E9] to-[#6366F1]",
  "from-[#6366F1] to-[#C084FC]",
  "from-[#22D3EE] to-[#0EA5E9]",
  "from-[#EC4899] to-[#6366F1]",
  "from-[#10B981] to-[#22D3EE]",
  "from-[#F59E0B] to-[#EF4444]",
];

const teamMembers = [
  {
    name: "Saad Ahmed",
    role: "Founder & CEO",
    bio: "Skilled entrepreneur with 5+ years of experience in web development and digital marketing.",
    color: "#0EA5E9",
    social: {
      facebook: "https://www.facebook.com/softiven",
      linkedin: "#",
      email: "mohammadhaolader1@gmail.com",
    },
  },
  {
    name: "Rahela Begum",
    role: "Lead Designer",
    bio: "Expert in UI/UX design and brand identity creation. Designs with a perfect blend of aesthetics and functionality.",
    color: "#6366F1",
    social: {
      facebook: "#",
      linkedin: "#",
      email: "mohammadhaolader1@gmail.com",
    },
  },
  {
    name: "Tanvir Hossain",
    role: "Shopify Expert",
    bio: "4+ years of experience in Shopify store design and development. Skilled professional in e-commerce solutions.",
    color: "#22D3EE",
    social: {
      facebook: "#",
      linkedin: "#",
      email: "mohammadhaolader1@gmail.com",
    },
  },
  {
    name: "Nafisa Islam",
    role: "Facebook Marketing Expert",
    bio: "Expert in targeted Facebook advertising and social media marketing. Proven ability to increase client ROI.",
    color: "#EC4899",
    social: {
      facebook: "#",
      linkedin: "#",
      email: "mohammadhaolader1@gmail.com",
    },
  },
  {
    name: "Mahmud Reza",
    role: "Full-Stack Developer",
    bio: "Skilled developer in React, Next.js, and Node.js. Has the remarkable ability to complete complex projects with ease.",
    color: "#10B981",
    social: {
      facebook: "#",
      linkedin: "#",
      email: "mohammadhaolader1@gmail.com",
    },
  },
  {
    name: "Sumaiya Khan",
    role: "Content Strategist",
    bio: "Expert in creating engaging content and SEO strategy. Presents your brand story in an attractive way.",
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
          <div className="section-badge mb-4">Our Team</div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F1F5F9] mb-4">
            Experienced &{" "}
            <span className="gradient-text">Passionate Professionals</span>
          </h2>
          <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl mx-auto">
            Our team consists of experts in design, development, and marketing
            who are committed to driving your business to success.
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
                <div
                  className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${gradients[i]} flex items-center justify-center ring-4 ring-[#1E293B] group-hover:ring-opacity-60 transition-all duration-300`}
                >
                  <span className="text-3xl font-bold text-white">
                    {member.name.charAt(0).toUpperCase()}
                  </span>
                </div>
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
