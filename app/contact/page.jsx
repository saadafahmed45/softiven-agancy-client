"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New contact request${formData.service ? ` - ${formData.service}` : ""}`;
    const body = [
      `Name: ${formData.name || "Not provided"}`,
      `Email: ${formData.email || "Not provided"}`,
      `Service: ${formData.service || "Not provided"}`,
      "",
      "Message:",
      formData.message || "No message provided",
    ].join("\n");

    window.location.href = `mailto:mohammadhaolader1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-[#0A0F1E] min-h-screen">
      {/* ── Hero Banner ── */}
      <section className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="blob w-[500px] h-[500px] bg-[#6366F1] top-0 right-0" />
          <div className="blob w-[350px] h-[350px] bg-[#0EA5E9] bottom-0 left-0" style={{ animationDelay: "2s" }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center" data-aos="fade-up">
            <div className="section-badge mb-6">Get In Touch</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1F5F9] leading-tight mb-6">
              Talk to <span className="gradient-text">Us</span>
            </h1>
            <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Contact our friendly team to find the right digital solution for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-8" data-aos="fade-right">
              <div className="glass-card p-8 group hover:border-[#0EA5E9]/40 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="text-[#0EA5E9] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-[#F1F5F9] font-bold text-lg mb-1">Email</h3>
                    <p className="text-[#94A3B8] text-sm mb-2">Our team will respond to your email promptly.</p>
                    <a href="mailto:mohammadhaolader1@gmail.com" className="text-[#0EA5E9] hover:text-[#22D3EE] font-medium transition-colors">
                      mohammadhaolader1@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 group hover:border-[#6366F1]/40 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#6366F1]/10 border border-[#6366F1]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaPhoneAlt className="text-[#6366F1] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-[#F1F5F9] font-bold text-lg mb-1">Phone & WhatsApp</h3>
                    <p className="text-[#94A3B8] text-sm mb-2">Mon-Fri, 9AM to 6PM.</p>
                    <a href="tel:+8801890195058" className="text-[#6366F1] hover:text-[#818CF8] font-medium transition-colors block">
                      +880 1890-195058 (Bangladesh)
                    </a>
                    <a href="tel:+14375521639" className="text-[#6366F1] hover:text-[#818CF8] font-medium transition-colors block mt-1">
                      +1 437-552-1639 (Canada)
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 group hover:border-[#22D3EE]/40 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#22D3EE]/10 border border-[#22D3EE]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="text-[#22D3EE] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-[#F1F5F9] font-bold text-lg mb-1">Our Offices</h3>
                    <p className="text-[#94A3B8] text-sm mb-2">Visit us in person at either location.</p>
                    <p className="text-[#22D3EE] font-medium">
                      Scarborough, Ontario, Canada
                    </p>
                    <p className="text-[#22D3EE] font-medium mt-1">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="glass-card p-8 md:p-10 border border-[#0EA5E9]/20 h-full">
                <h3 className="text-2xl font-bold text-[#F1F5F9] mb-6">Send Us a Message</h3>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#94A3B8] mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-[#0F172A] border border-[#1E293B] rounded-xl text-[#F1F5F9] placeholder-[#475569] focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#94A3B8] mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        className="w-full px-4 py-3 bg-[#0F172A] border border-[#1E293B] rounded-xl text-[#F1F5F9] placeholder-[#475569] focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#94A3B8] mb-2">Service Type</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0F172A] border border-[#1E293B] rounded-xl text-[#F1F5F9] focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="shopify">Shopify Store Design</option>
                      <option value="marketing">Facebook Marketing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#94A3B8] mb-2">Message</label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 bg-[#0F172A] border border-[#1E293B] rounded-xl text-[#F1F5F9] placeholder-[#475569] focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary justify-center py-3.5 text-lg"
                  >
                    <FaPaperPlane />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
