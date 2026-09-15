"use client";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import emailjs from "@emailjs/browser";
import {
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaSpinner,
  FaExclamationCircle,
} from "react-icons/fa";

const EMAIL = "mohammadhaolader1@gmail.com";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear the field error as soon as the user edits again
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (status === "success" || status === "error") {
      setStatus("idle");
    }
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) {
      next.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      next.message = "Please write a short message.";
    }
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Gracefully handle missing or placeholder environment variables without crashing
    if (
      !serviceId ||
      !templateId ||
      !publicKey ||
      serviceId === "YOUR_SERVICE_ID" ||
      templateId === "YOUR_TEMPLATE_ID" ||
      publicKey === "YOUR_PUBLIC_KEY"
    ) {
      console.error(
        "EmailJS Error: Missing or unconfigured environment variables. Please configure NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.local or Vercel Environment Variables."
      );
      setStatus("error");
      return;
    }

    if (!formRef.current) return;

    setStatus("submitting");

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
      setErrors({});
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("EmailJS Error:", error?.text || error?.message || error);
      setStatus("error");
    }
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
                
                <form ref={formRef} className="space-y-6" onSubmit={handleSubmit} noValidate>
                  {/* Hidden field for EmailJS template subject variable {{title}} */}
                  <input
                    type="hidden"
                    name="title"
                    value={formData.service ? `${formData.service} Inquiry` : "New Project Inquiry"}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-[#94A3B8] mb-2">
                        Name <span className="text-[#0EA5E9]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        aria-required="true"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                        className={`w-full px-4 py-3 bg-[#0F172A] border rounded-xl text-[#F1F5F9] placeholder-[#475569] focus:outline-none focus:ring-1 transition-all ${
                          errors.name
                            ? "border-rose-500/70 focus:border-rose-500 focus:ring-rose-500"
                            : "border-[#1E293B] focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                        }`}
                      />
                      {errors.name && (
                        <p id="contact-name-error" className="mt-1.5 text-sm text-rose-400">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-[#94A3B8] mb-2">
                        Email <span className="text-[#0EA5E9]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        aria-required="true"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                        className={`w-full px-4 py-3 bg-[#0F172A] border rounded-xl text-[#F1F5F9] placeholder-[#475569] focus:outline-none focus:ring-1 transition-all ${
                          errors.email
                            ? "border-rose-500/70 focus:border-rose-500 focus:ring-rose-500"
                            : "border-[#1E293B] focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                        }`}
                      />
                      {errors.email && (
                        <p id="contact-email-error" className="mt-1.5 text-sm text-rose-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-medium text-[#94A3B8] mb-2">Service Type</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0F172A] border border-[#1E293B] rounded-xl text-[#F1F5F9] focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Shopify Store Design">Shopify Store Design</option>
                      <option value="Facebook Marketing">Facebook Marketing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-[#94A3B8] mb-2">
                      Message <span className="text-[#0EA5E9]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      aria-required="true"
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      className={`w-full px-4 py-3 bg-[#0F172A] border rounded-xl text-[#F1F5F9] placeholder-[#475569] focus:outline-none focus:ring-1 transition-all resize-none ${
                        errors.message
                          ? "border-rose-500/70 focus:border-rose-500 focus:ring-rose-500"
                          : "border-[#1E293B] focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                      }`}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1.5 text-sm text-rose-400">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full btn-primary justify-center py-3.5 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <FaSpinner className="animate-spin text-xl" />
                        <span>Sending...</span>
                      </>
                    ) : status === "success" ? (
                      <>
                        <FaCheckCircle className="text-xl text-emerald-300" />
                        <span>Message Sent Successfully</span>
                      </>
                    ) : status === "error" ? (
                      <>
                        <FaExclamationCircle className="text-xl text-rose-300" />
                        <span>Failed to send message. Please try again.</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-lg" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {status === "success" && (
                    <div
                      role="status"
                      className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm leading-relaxed"
                    >
                      <FaCheckCircle className="mt-0.5 flex-shrink-0 text-emerald-400 text-base" />
                      <div>
                        <p className="font-semibold text-emerald-200">Message Sent Successfully!</p>
                        <p className="text-emerald-300/90 text-sm mt-0.5">
                          Thank you for reaching out. We have received your inquiry and our team will get back to you promptly.
                        </p>
                      </div>
                    </div>
                  )}

                  {status === "error" && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm leading-relaxed"
                    >
                      <FaExclamationCircle className="mt-0.5 flex-shrink-0 text-rose-400 text-base" />
                      <div>
                        <p className="font-semibold text-rose-200">Failed to send message. Please try again.</p>
                        <p className="text-rose-300/90 text-sm mt-0.5">
                          Something went wrong. Please check your connection or reach out to us directly at{" "}
                          <a
                            href={`mailto:${EMAIL}`}
                            className="underline underline-offset-2 hover:text-rose-100 font-medium"
                          >
                            {EMAIL}
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  )}
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
