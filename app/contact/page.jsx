"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

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
            <div className="section-badge mb-6">যোগাযোগ করুন</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1F5F9] leading-tight mb-6">
              আমাদের সাথে <span className="gradient-text">কথা বলুন</span>
            </h1>
            <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              আপনার ব্যবসার জন্য সঠিক ডিজিটাল সমাধান খুঁজে পেতে আমাদের বন্ধুত্বপূর্ণ টিমের সাথে যোগাযোগ করুন।
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
                    <h3 className="text-[#F1F5F9] font-bold text-lg mb-1">ইমেইল</h3>
                    <p className="text-[#94A3B8] text-sm mb-2">আমাদের টিম দ্রুত আপনার ইমেইলের উত্তর দেবে।</p>
                    <a href="mailto:info@softiven.com" className="text-[#0EA5E9] hover:text-[#22D3EE] font-medium transition-colors">
                      info@softiven.com
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
                    <h3 className="text-[#F1F5F9] font-bold text-lg mb-1">ফোন ও হোয়াটসঅ্যাপ</h3>
                    <p className="text-[#94A3B8] text-sm mb-2">সোম-শুক্র, সকাল ৯টা থেকে সন্ধ্যা ৬টা পর্যন্ত।</p>
                    <a href="tel:+8801890195058" className="text-[#6366F1] hover:text-[#818CF8] font-medium transition-colors">
                      +880 1890-195058
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
                    <h3 className="text-[#F1F5F9] font-bold text-lg mb-1">ঠিকানা</h3>
                    <p className="text-[#94A3B8] text-sm mb-2">আমাদের অফিসে এসে সরাসরি কথা বলতে পারেন।</p>
                    <p className="text-[#22D3EE] font-medium">
                      ঢাকা, বাংলাদেশ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="glass-card p-8 md:p-10 border border-[#0EA5E9]/20 h-full">
                <h3 className="text-2xl font-bold text-[#F1F5F9] mb-6">আমাদের একটি বার্তা পাঠান</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#94A3B8] mb-2">নাম</label>
                      <input
                        type="text"
                        placeholder="আপনার নাম"
                        className="w-full px-4 py-3 bg-[#0F172A] border border-[#1E293B] rounded-xl text-[#F1F5F9] placeholder-[#475569] focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#94A3B8] mb-2">ইমেইল</label>
                      <input
                        type="email"
                        placeholder="আপনার ইমেইল ঠিকানা"
                        className="w-full px-4 py-3 bg-[#0F172A] border border-[#1E293B] rounded-xl text-[#F1F5F9] placeholder-[#475569] focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#94A3B8] mb-2">সেবার ধরন</label>
                    <select className="w-full px-4 py-3 bg-[#0F172A] border border-[#1E293B] rounded-xl text-[#F1F5F9] focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all appearance-none">
                      <option value="">সেবা নির্বাচন করুন</option>
                      <option value="website">ওয়েবসাইট তৈরি</option>
                      <option value="shopify">Shopify স্টোর ডিজাইন</option>
                      <option value="marketing">Facebook মার্কেটিং</option>
                      <option value="other">অন্যান্য</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#94A3B8] mb-2">বার্তা</label>
                    <textarea
                      rows={5}
                      placeholder="কিভাবে আমরা আপনাকে সাহায্য করতে পারি?"
                      className="w-full px-4 py-3 bg-[#0F172A] border border-[#1E293B] rounded-xl text-[#F1F5F9] placeholder-[#475569] focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full btn-primary justify-center py-3.5 text-lg"
                  >
                    <FaPaperPlane />
                    বার্তা পাঠান
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
