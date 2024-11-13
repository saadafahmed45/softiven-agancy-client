"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Zap, Target } from "lucide-react";
// import "aos/dist/aos.css";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once on scroll
    });
  }, []);
  return (
    <>

      <Head>
        <title>About Us | Custom Web Development & Software Solutions | Softiven</title>
        <meta
          name="description"
          content="Discover Softiven's journey and expertise in delivering top-notch custom web development, mobile app solutions, and digital marketing services to boost your business."
        />
        <meta name="keywords" content="web development, custom software, digital marketing, React developer, Next.js, Shopify, SEO optimization" />
        <meta property="og:title" content="About Us - Softiven" />
        <meta property="og:description" content="Explore our journey, core values, and why businesses choose Softiven for custom software solutions." />
        <meta property="og:image" content="https://images.pexels.com/photos/3182762/pexels-photo-3182762.jpeg" />
        <meta property="og:url" content="https://softiven-agancy.vercel.app/about" />
      </Head>
      <section
        className="w-full py-12 md:py-24 lg:py-32 px-2 md:px-16 bg-white "
        id="about"
      >
        <div className="container mx-auto px-2 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-6" data-aos="fade-up">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                {/* Your Web Solution Partner for Success */}
                Software Solutions to Boost Your Business
              </h1>
              {/* Please add margin top 36px for learge screen */}
              <p className="mx-auto text-left md:text-center  max-w-[800px] text-gray-500 md:text-xl">
                At Softiven, we specialize in delivering user-friendly software
                like websites and mobile apps that help your business grow. Our
                expert team offers custom web development services using
                platforms like React, Next.js, Shopify, WordPress, Wix, and
                Webflow, ensuring you get a powerful, responsive website that
                drives conversions, enhances customer engagement, and
                strengthens your digital presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 px-2 md:px-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Image
              data-aos="fade-up"
              alt="Softiven team collaborating"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="400"
              src="https://images.pexels.com/photos/3182762/pexels-photo-3182762.jpeg"
              width="600"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2
                  data-aos="fade-up"
                  className="text-3xl font-bold tracking-tighter sm:text-4xl"
                >
                  Our Journey
                </h2>
                <p
                  data-aos="fade-up"
                  className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  Softiven was founded in 2021 with a simple vision to help
                  businesses thrive in the digital world.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  Our journey began by focusing on custom web development and
                  then mobile app solutions. As the digital landscape evolved,
                  so did we, expanding our expertise to platforms like Shopify,
                  WordPress, Wix, and Webflow. Our goal was always to provide
                  businesses with user-friendly, responsive solutions that drive
                  real results.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  data-aos="fade-up"
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-secondery h-10 px-4 py-2"
                >
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white px-2 md:px-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
          >
            Our Core Values
          </h2>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-lg">
              <Zap className="h-12 w-12 text-secondery" />
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-center text-gray-500">
                We constantly push the boundaries of what's possible, embracing
                new technologies and methodologies to deliver cutting-edge
                solutions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-lg">
              <Target className="h-12 w-12 text-secondery" />
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="text-center text-gray-500">
                We are committed to delivering high-quality solutions that
                exceed expectations and stand the test of time.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-lg">
              <Users className="h-12 w-12 text-secondery" />
              <h3 className="text-xl font-bold">Collaboration</h3>
              <p className="text-center text-gray-500">
                We believe in the power of teamwork, fostering strong
                partnerships with our clients and within our team to achieve
                remarkable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 px-2 md:px-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <h2
                data-aos="fade-up"
                className="text-3xl font-bold tracking-tighter sm:text-4xl"
              >
                Why Choose Softiven?
              </h2>
              <ul data-aos="fade-up" className="space-y-3">
                {[
                  "Expert team of developers, designers, digital-marketers and strategists",
                  "Proven track record of successful projects across various industries",
                  "Agile development methodology for flexibility and efficiency",
                  "Cutting-edge technology stack and best practices",
                  "Dedicated support and maintenance services",
                  "End-to-End Digital Marketing Solutions ",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-secondery h-10 px-4 py-2"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <Image
              alt="Softiven office"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="400"
              src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
              width="600"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white px-2 md:px-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2
                data-aos="fade-up"
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
              >
                Join Our Growing Team
              </h2>
              <p
                data-aos="fade-up"
                className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                We're always on the lookout for talented individuals who are
                passionate about technology and innovation. Explore our career
                opportunities and be part of something extraordinary.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-slate-800 hover:bg-gray-100 h-10 px-4 py-2 w-full"
              >
                View Open Positions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
