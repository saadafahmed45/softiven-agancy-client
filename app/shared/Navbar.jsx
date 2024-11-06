"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const toggleButton = () => {
    setOpen(!open);
  };

  const [darkMode, setDarkMode] = useState(() => false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="relative bg-primaryBg dark:bg-darkBackground shadow px-6 md:px-20 lg:px-28 py-4 mx-auto">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex justify-between">
          <Link href={"/"}>
            <Image
              src="logo_2.svg"
              alt="Logo"
              className="w-[150px] md:w-[180px] object-contain"
              width={150}
              height={50} // Adjust height based on your logo's aspect ratio
            />
          </Link>
          <div className="hidden md:hidden lg:flex flex-col mx-6 lg:flex-row lg:items-center lg:mx-8 font-semibold">
            <Link
              href={"/"}
              // className="px-3 py-2 text-gray-800 dark:text-darkText transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-primary"
              className={`px-3 py-2 text-gray-800 dark:text-darkText transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-primary ${
                pathname === "/" ? "text-primary" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="px-3 py-2 text-gray-800 dark:text-darkText transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-primary"
            >
              About
            </Link>
            <Link
              href={"/services"}
              className="px-3 py-2 text-gray-800 dark:text-darkText transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-primary"
            >
              Services
            </Link>
            <Link
              href={"/portfolio"}
              className={`px-3 py-2 text-gray-800 dark:text-darkText transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-primary ${
                pathname === "/portfolio" ? "text-primary" : ""
              }`}
            >
              Portfolio
            </Link>

            <Link
              href={"/contact"}
              className={`px-3 py-2 text-gray-800 dark:text-darkText transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-primary ${
                pathname === "/contact" ? "text-primary" : ""
              }`}
            >
              Contact
            </Link>
          </div>
          {/* mobile nav btn */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
              onClick={toggleButton}
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* mobile nav btn end */}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            open
              ? "translate-x-0 opacity-100 absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-darkBackground lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
              : "opacity-0 -translate-x-full absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-darkBackground lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
          }`}
        >
          <div className="lg:hidden flex flex-col -mx-6 text-center space-y-2 text-xl lg:flex-row lg:items-center lg:mx-8 font-semibold">
            <Link
              href={"/"}
              className="px-3 py-2 text-gray-800 dark:text-darkText transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-primary"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className={`px-3 py-2 text-gray-800 dark:text-darkText transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-primary ${
                pathname === "/about" ? "text-primary" : ""
              }`}
            >
              About
            </Link>
            <Link
              href={"/services"}
              className={`px-3 py-2 text-gray-800 dark:text-darkText transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-primary ${
                pathname === "/services" ? "text-primary" : ""
              }`}
            >
              Services
            </Link>
            <Link
              href={"/portfolio"}
              className={`px-3 py-2 text-gray-800 dark:text-darkText transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-primary ${
                pathname === "/portfolio" ? "text-primary" : ""
              }`}
            >
              Portfolio
            </Link>

            <Link
              href={"/contact"}
              className={`px-3 py-2 text-gray-800 dark:text-darkText transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-primary ${
                pathname === "/contact" ? "text-primary" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Login Button */}
          <div className="flex items-center justify-start flex-col md:flex-row gap-4 lg:mt-0">
            <Link
              href={"/login"}
              className="text-gray-800 dark:text-darkText transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-primary font-semibold"
            >
              Login
            </Link>
            <button className="px-3 py-2 border border-primary text-primary rounded-md transition-colors duration-300 hover:bg-primary hover:text-white dark:bg-darkBackground dark:text-darkText focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 font-semibold">
              Get started
            </button>
            {/* <div>
              <DarkModeToggle
                onChange={setDarkMode}
                checked={darkMode ?? false} // Use JavaScript default parameter
                size={60}
              />
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
