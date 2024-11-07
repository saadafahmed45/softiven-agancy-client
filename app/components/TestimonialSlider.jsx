"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ema Watson",
    role: "Marketing Manager at Stech",
    image:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda.",
  },
  {
    name: "John Doe",
    role: "CEO at TechCorp",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote:
      "Exceptional service! The team went above and beyond to meet our needs. I highly recommend their expertise to anyone looking for top-notch solutions.",
  },
  {
    name: "Sarah Johnson",
    role: "Designer at CreativeCo",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote:
      "Working with this company has been a game-changer for our design process. Their innovative approach and attention to detail are unmatched in the industry.",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-6xl px-6 py-10 mx-auto">
        <p className="text-xl font-medium text-blue-600 dark:text-blue-400">
          Testimonials
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          What our clients are saying
        </h1>
        <h1 className="w-10"> hello </h1>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          className="relative z-20 w-full mt-8 md:mt-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>

                <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                  <img
                    className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[30rem] lg:w-[22rem] md:rounded-2xl"
                    src={testimonial.image}
                    alt="client photo"
                  />

                  <div className="mt-2 md:mx-6">
                    <div>
                      <p className="text-xl font-medium tracking-tight text-white">
                        Ema Watson
                      </p>
                      <p className="text-blue-200 ">
                        Marketing Manager at Stech
                      </p>
                    </div>

                    <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                      {" "}
                      “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tempore quibusdam ducimus libero ad tempora doloribus
                      expedita laborum saepe voluptas perferendis delectus
                      assumenda”.
                    </p>

                    <div className="flex items-center justify-between mt-6 md:justify-start">
                      <button
                        title="left arrow"
                        className="  p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>

                      <button
                        title="right arrow"
                        className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </main>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer">
            <ChevronLeft className="  " />
          </div>
          <div className="swiper-button-next absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer">
            <ChevronRight className="" />
          </div>
        </Swiper>
      </div>
    </section>
  );
}
