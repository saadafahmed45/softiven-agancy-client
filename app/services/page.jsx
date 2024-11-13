"use client";
import { useEffect } from "react";
import AOS from "aos";
import {
  CheckCircle,
  Globe,
  Laptop,
  Rocket,
  Server,
  Shield,
} from "lucide-react";
import Link from "next/link";
import Head from "next/head";

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications tailored to your business needs.",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning"],
    },
    {
      icon: Rocket,
      title: "Digital Marketing",
      description: "Boost your online presence with our digital marketing services.",
      features: ["SEO", "Content Marketing", "Social Media Advertising"],
    },
    {
      icon: CheckCircle,
      title: "Graphic Design",
      description: "Creative designs that capture your brand's essence.",
      features: ["Logo Design", "Brand Identity", "UI/UX Design"],
    },
    {
      icon: Globe,
      title: "Shopify Custom Design",
      description: "Tailored Shopify stores to enhance user experience and sales.",
      features: ["Custom Theme Design", "Liquid Programming", "App Integration"],
    },
    {
      icon: Laptop,
      title: "MERN Stack Development",
      description: "Full-stack applications using MongoDB, Express, React, and Node.js.",
      features: ["API Development", "Real-Time Features", "Scalable Architecture"],
    },
    {
      icon: Globe,
      title: "Wix & WordPress Development",
      description: "Custom websites built on Wix and WordPress platforms.",
      features: ["Theme Customization", "Plugin Integration", "SEO Optimization"],
    },
    {
      icon: Globe,
      title: "Webflow Development",
      description: "Advanced and responsive Webflow websites for businesses.",
      features: ["Custom Animations", "CMS Integration", "Responsive Design"],
    },
  ];

  return (
    <>
      <Head>
        <title>Our Services - Comprehensive Digital Solutions | Softiven </title>
        <meta
          name="description"
          content="Discover our comprehensive services including web development, digital marketing, graphic design, Shopify custom design, MERN stack development, Wix & WordPress, and Webflow development. Tailored solutions for your business needs."
        />
        <meta
          name="keywords"
          content="web development, digital marketing, graphic design, Shopify custom design, MERN stack, Wix, WordPress, Webflow development, custom software solutions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://softiven-agancy.vercel.app/services" />
      </Head>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 px-2 md:px-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Explore Our Comprehensive Services
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="flex flex-col p-6 bg-white rounded-lg shadow-md"
              >
                <service.icon className="h-10 w-10 mb-2 text-secondary" alt={`${service.title} Icon`} />
                <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                <p className="text-gray-500 mb-4">{service.description}</p>
                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white px-2 md:px-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Need a Custom Solution?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
              We specialize in creating bespoke software solutions tailored to your unique business requirements.
            </p>
            <div className="w-full max-w-sm space-y-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primaryBg hover:bg-secondary h-10 px-4 py-2 w-full"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
