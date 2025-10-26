"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { usePathname } from "next/navigation";
import { MyContext } from "../Context/Context";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleButton = () => setOpen(!open);

  const [darkMode, setDarkMode] = useState(false);

  // ✅ Only access document after mount
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [darkMode]);

  const { handleGoogleLogin, user, handleSingOut } = useContext(MyContext);
  const { displayName, photoURL, emailVerified, email } = user || {};

  return (
    <nav className="relative bg-primaryBg dark:bg-darkBackground shadow px-6 md:px-20 lg:px-28 py-4">
      <div className="flex items-center justify-between lg:justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="/logo_2.svg"
            alt="Logo"
            className="w-[150px] md:w-[180px] object-contain"
            width={150}
            height={50}
          />
        </Link>

        {/* Desktop Links (centered) */}
        <div className="hidden lg:flex justify-center items-center gap-8 font-semibold flex-1">
          <NavLink href="/" label="Home" pathname={pathname} />
          <NavLink href="/about" label="About" pathname={pathname} />
          <NavLink href="/services" label="Services" pathname={pathname} />
          <NavLink href="/portfolio" label="Portfolio" pathname={pathname} />
          <NavLink href="/contact" label="Contact" pathname={pathname} />
        </div>

        {/* Right Side (login/get started) */}
        <div className="hidden lg:flex items-center gap-4">
          {emailVerified ? (
            <div className="flex items-center gap-2">
              <img
                className="object-cover w-10 h-10 rounded-full ring ring-gray-300 dark:ring-gray-600"
                src={photoURL}
                alt=""
              />
              <button
                onClick={handleSingOut}
                className="text-gray-800 dark:text-darkText hover:text-primary font-semibold"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="text-gray-800 dark:text-darkText hover:text-primary font-semibold"
            >
              Login
            </Link>
          )}
          <button className="px-3 py-2 border border-primary text-primary rounded-md transition-colors duration-300 hover:bg-primary hover:text-white font-semibold">
            Get started
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button onClick={toggleButton} className="text-2xl text-gray-700">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col items-center gap-4 mt-4 font-semibold text-lg lg:hidden">
          <NavLink href="/" label="Home" pathname={pathname} />
          <NavLink href="/about" label="About" pathname={pathname} />
          <NavLink href="/services" label="Services" pathname={pathname} />
          <NavLink href="/portfolio" label="Portfolio" pathname={pathname} />
          <NavLink href="/contact" label="Contact" pathname={pathname} />

          {emailVerified ? (
            <button
              onClick={handleSingOut}
              className="text-gray-800 dark:text-darkText hover:text-primary font-semibold"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="text-gray-800 dark:text-darkText hover:text-primary font-semibold"
            >
              Login
            </Link>
          )}
          <button className="px-3 py-2 border border-primary text-primary rounded-md transition-colors duration-300 hover:bg-primary hover:text-white font-semibold">
            Get started
          </button>
        </div>
      )}
    </nav>
  );
}

// ✅ Small helper for nav links
function NavLink({ href, label, pathname }) {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-gray-800 dark:text-darkText transition-colors duration-300 hover:text-primary ${
        isActive ? "text-primary" : ""
      }`}
    >
      {label}
    </Link>
  );
}

export default Navbar;
