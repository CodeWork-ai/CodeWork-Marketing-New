'use client';
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";

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

  // Meta tags content based on pathname
  const getMetaTags = () => {
    switch (pathname) {
      case "/":
        return {
          title: "Codework:AI Software Development |call us-+91 72006 16547",
          description: "Discover AI software development solutions by Codework. Redefine innovation with cutting-edge technologies, empowering businesses with smart, scalable systems.",
        };
      case "/expertise":
        return {
          title: "AI Innovation | Advanced Tech Solutions",
          description: "Empowering innovation with AI and advanced technologies at Codework. Transform your business with intelligent and future-ready software solutions.",
        };
      case "/service":
        return {
          title: "AI Services | Cutting-Edge Innovation",
          description: "Driving innovation through cutting-edge AI services at Codework. Leverage advanced AI solutions to transform your business and stay ahead in the digital era.",
        };
      case "/clients":
        return {
          title: "Custom AI Solutions for Engaged Users & Efficient Operations",
          description: "Discover tailored strategies that align with your brand's identity. Boost user engagement and streamline operations with custom AI solutions at Codework.",
        };
      case "/case-study":
        return {
          title: "Empowering Businesses Through AI",
          description: "Transform your business with innovative AI and Machine Learning solutions. Revolutionize operations and unlock new possibilities with Codework's expertise.",
        };
      case "/about-us":
        return {
          title: "Shaping Tomorrow with AI Technology",
          description: "Discover how Codework harnesses AI-powered technology to shape a smarter tomorrow. Empowering businesses with innovative and future-ready solutions.",
        };
      case "/careers":
        return {
          title: "Careers at Codework: Shape the Future",
          description: "Join Codework and help shape the future with cutting-edge AI technology. Be part of a team that thrives on innovation, collaboration, and excellence.",
        };
      case "/getInTouch":
        return {
          title: "Contact Codework for AI Solutions",
          description: "Reach out to Codework and discover how our AI solutions can empower your business. Let us help you innovate, streamline, and achieve your goals.",
        };

      // Add cases for other routes as needed
      default:
        return {
          title: "Codework",
          description: "Discover cutting-edge AI-powered solutions for your business.",
        };
    }
  };

  const { title, description } = getMetaTags();

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
        <title>{title}</title>
        <meta name="google-site-verification" content="googlef261788f910b103f" />
        <meta name="description" content={description} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", "name": "CodeWork", "url": "https://www.codework.ai", "description": "Codework.ai offers innovative AI-software development solutions, specializing in AI-driven applications, full-stack development, and cloud computing. Our tailored services empower businesses with cutting-edge technology for optimal performance and growth.", "address": { "@type": "PostalAddress", "streetAddress": "AKSHAYA HQ, 305, OMR, Kazhipattur, Padur", "addressLocality": "Chennai", "addressRegion": "Tamilnadu", "postalCode": "603103", "addressCountry": "IN" }, "contactPoint": { "@type": "ContactPoint", "telephone": "+91-72006-16547", "contactType": "Customer Service", "areaServed": "IN", "availableLanguage": ["en"] }, "sameAs": ["https://www.linkedin.com/company/codeworkai"] }), }} />
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

