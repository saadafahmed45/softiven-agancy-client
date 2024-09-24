import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-white dark:bg-darkBackground ">
      <div className="container px-6 md:px-16 py-10 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2 ">
            <div className="lg:max-w-md">
              <h1 className="animate-fade-in text-4xl font-bold text-gray-900 dark:text-darkText lg:text-6xl">
                Innovative Web Development for Modern
                <span className="text-primary"> Businesses </span>
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-300 text-xl md:text-2xl">
                User-friendly web solutions that elevate your business. Our
                expert team crafts stunning websites that drive conversions
              </p>

              <Link
                href={"/contact"}
                className="w-1/2 px-5 py-2 mt-6 text-sm tracking-wider text-primaryBg uppercase transition-colors duration-300 transform bg-primary rounded-lg lg:w-auto hover:bg-blue-600 focus:outline-none focus:bg-blue-500  dark:bg-blue-700 dark:hover:bg-blue-800"
              >
                {" "}
                Get Started
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 animate-fade-in">
            <img
              className="w-full h-full lg:max-w-3xl rounded-sm"
              // src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
              src="about_img.svg"
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
