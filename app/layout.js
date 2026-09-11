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
  title: "Softiven - Website, Shopify Store & Facebook Marketing Agency",
  description:
    "Softiven provides professional website development, Shopify store design & development, and Facebook marketing services for your business. Take your business digital.",
  keywords:
    "website development, Shopify store, Facebook marketing, digital marketing, Bangladesh, business solutions, Softiven",
  authors: [{ name: "Softiven Team" }],
  openGraph: {
    title: "Softiven - Digital Solutions for Your Business",
    description:
      "Website development, Shopify store & Facebook marketing — everything in one place.",
    url: "https://softiven-agancy.vercel.app",
    images: "/logo_2.svg",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
