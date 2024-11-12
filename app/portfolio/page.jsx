"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once on scroll
    });
  }, []);
  const projects = [
    {
      title: "Fristads",
      description: "A scalable e-commerce solution for a leading retail brand.",
      image:
        "/prt1.png",
      tags: ["Web Development", "React", "Next.js", "Node.js"],
    },
    {
      title: "Gym Shark",
      description: "Mobile app for tracking workouts and nutrition.",
      image:
        "/prt2.png",

      tags: ["Shopify Development", "Liquid ", "JAVASCRIPT", "HTML", "CSS"],
    },



  ];

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1
                data-aos="fade-up"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
              >
                Our Portfolio
              </h1>
              <p
                data-aos="fade-up"
                className="mx-auto max-w-[700px] text-gray-500 md:text-xl"
              >
                Showcasing our innovative solutions and success stories.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-500 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-200 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2
                data-aos="fade-up"
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
              >
                Ready to Start Your Project?
              </h2>
              <p
                data-aos="fade-up"
                className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                Let's discuss how we can bring your ideas to life with our
                expertise in software development.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2 w-full"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
