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

export const metadata = {
  title: "Softiven - ওয়েবসাইট, Shopify স্টোর ও Facebook মার্কেটিং এজেন্সি",
  description:
    "Softiven আপনার ব্যবসার জন্য প্রফেশনাল ওয়েবসাইট তৈরি, Shopify স্টোর ডিজাইন ও ডেভেলপমেন্ট এবং Facebook মার্কেটিং সেবা প্রদান করে। আপনার ব্যবসাকে ডিজিটালে নিয়ে যান।",
  keywords:
    "ওয়েবসাইট তৈরি, Shopify স্টোর, Facebook মার্কেটিং, ডিজিটাল মার্কেটিং, বাংলাদেশ, ব্যবসায়িক সমাধান, Softiven",
  authors: [{ name: "Softiven Team" }],
  openGraph: {
    title: "Softiven - আপনার ব্যবসার ডিজিটাল সমাধান",
    description:
      "ওয়েবসাইট তৈরি, Shopify স্টোর ও Facebook মার্কেটিং — সবকিছু এক জায়গায়।",
    url: "https://www.softiven.com",
    images: "/logo_2.svg",
    locale: "bn_BD",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0F1E] text-[#F1F5F9]`}
      >
        <ContextProvider>
          <Navbar />
          <div className="bg-[#0A0F1E]">{children}</div>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
