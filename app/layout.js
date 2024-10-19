import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import "aos/dist/aos.css";
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
  title: "Softiven - Your Software Solutions Partner",
  description:
    "Softiven offers innovative software solutions for businesses, focusing on quality and efficiency.",
  keywords:
    "software solutions, web development, software development, IT services",
  authors: [{ name: "Softiven Team" }],
  openGraph: {
    title: "Softiven - Your Software Solutions Partner",
    description:
      "Discover how Softiven can elevate your business with our cutting-edge software solutions.",
    url: "https://www.softiven.com",
    images: "/path/to/your/image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Softiven - Your Software Solutions Partner",
    description: "Innovative software solutions to enhance your business.",
    images: "/path/to/your/image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="bg-background dark:bg-darkBackground">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
