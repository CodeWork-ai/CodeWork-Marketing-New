'use client';
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";
import Head from "next/head";

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

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current pathname
  const [scrollY, setScrollY] = useState(0); // Track scroll position

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine background image based on pathname
  const getBackgroundImage = () => {
    switch (pathname) {
      case "/":
        return "/bghome.jpg";
      case "/solution":
        return "/sol_bg1.avif";
      case "/vision":
        return "/bg.jpg";
      case "/projects":
        return "/bg5.avif";
      case "/getInTouch":
        return "/bg.jpg";
      case "/group":
        return "/rbbg.jpg";
      case "/aiSolution":
        return "/bg.jpg";
      case "/expertise":
          return "/bg.jpg";
      case "/team":
        return "/01.avif";
      case "/clients":
        return "/01.avif";
      case "/service":
        return "/rbbg.jpg";
      case "/about-us":
        return "/bg7.jpg";
      case "/careers":
          return "/bg8.jpg";
      case "/ai-community":
          return "/bg8.jpg"
      case "/join-our-team":
          return "/bg8.jpg"
      case "/industries/healthcare":
          return "/bg8.jpg"
      case "/industries/education":
          return "/bg8.jpg"
      case "/industries/e-commerce":
          return "/bg8.jpg"
      case "/industries/finance":
          return "/bg8.jpg"
      case "/industries/data-security":
          return "/bg8.jpg"
      default:
        return "/images/bg-default.jpg"; 
    }
  };

  // Calculate zoom and blur based on scroll position
  const zoomScale = 1 + Math.min(scrollY / 1000, 0.2); // Scale up to 1.2x
  const blurAmount = Math.min(scrollY / 100, 10); // Blur up to 10px

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="googlef261788f910b103f" />
        <meta name="msvalidate.01" content="87116832E44901A848FF915301C97144" />
        <meta name="AI Services" content="Discover AI software development solutions by Codework. Redefine innovation with cutting-edge technologies, empowering businesses with smart, scalable systems."/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="relative bg-black">
          {/* Background Image */}
          <div
            className="fixed top-0 left-0 w-full h-full z-0"
            style={{
              backgroundImage: `url(${getBackgroundImage()})`, // Dynamically set the image
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `scale(${zoomScale})`, // Zoom in
              filter: `blur(${blurAmount}px)`, // Blur effect
              transition: "transform 0.5s ease-out, filter 0.5s ease-out", // Smooth transitions
            }}
          ></div>

          {/* Foreground Content */}
          <div className="relative z-10">
            <Navbar className="mb-36 px-10 md:px-20" />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

