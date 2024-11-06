import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import "aos/dist/aos.css";
import ContextProvider from "./Context/Context";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define metadata for the entire application
export const metadata = {
  title:
    "Softiven - Your Trusted Partner for Shopify, React JS, MERN Stack, Wix, and WordPress Development", // Maintain brand recognition
  description:
    "EWe specialize in crafting exceptional digital experiences. Our team of experts leverages leading technologies like Shopify, React JS, MERN Stack, Wix, and WordPress to deliver tailored solutions that drive business growth",
  keywords:
    "Shopify development, ReactJS app development, MERN stack development, Wix website design, WordPress development", // Replace with your researched keywords
  authors: [{ name: "Softiven Team" }],
  openGraph: {
    title: "Softiven - Your Software Solutions Partner",
    description:
      "Discover how Softiven can elevate your business with our cutting-edge software solutions.",
    url: "https://www.softiven.com",
    images: "/path/to/your/image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContextProvider>
          <Navbar />
          <div className="bg-background dark:bg-darkBackground">{children}</div>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
