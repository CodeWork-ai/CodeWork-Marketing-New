"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";
import Script from "next/script";
import Link from "next/link";
import { TbMessageChatbot } from "react-icons/tb";
import ChatIcon from "./components/common/aichat";

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
          title: "CODEWORK: Top AI Software Development Company | Custom AI Solutions",
          description: "CODEWORK: Discover top-notch AI software development services tailored to your business needs. Contact us for custom AI solutions.",
          keywords: "AI software development, machine learning, data science, cybersecurity, cloud computing, web development, mobile app development, AI consulting, generative AI, NLP, data engineering, predictive analytics, blockchain, Reactjs & Nextjs, Java & Python, Azure, AWS, R language, Deep Learning, Neural Networks",
        };
      case "/empowering-innovation-ai-advanced-technologies":
        return {
          title: "AI Innovation | Advanced Tech Solutions",
          description:
            "Empowering innovation with AI and advanced technologies at Codework. Transform your business with intelligent and future-ready software solutions.",
          keywords:
            "AI, Artificial Intelligence, Machine Learning, Data Science, Data Engineering, Cyber Security, Predictive Analytics, XGboostNatural Language Processing, AI Consulting, Generative AI, PyTorch, Keras, TensorFlow",
        };
      case "/driving-innovation-cutting-edge-ai-services":
        return {
          title: "AI Services | Cutting-Edge Innovation",
          description:
            "Driving innovation through cutting-edge AI services at Codework. Leverage advanced AI solutions to transform your business and stay ahead in the digital era.",
          keywords:
            "AI services, software development solutions, custom software development, iOS and Android apps, web designing services, and cloud computing solutions, Data Science. Dataset preparation, Data processing",
        };
      case "/clients-custom-ai-solutions":
        return {
          title: "Custom AI Solutions for Engaged Users & Efficient Operations",
          description:
            "Discover tailored strategies that align with your brand's identity. Boost user engagement and streamline operations with custom AI solutions at Codework.",
        };
      case "/ai-business-solutions":
        return {
          title: "Empowering Businesses Through AI",
          description:
            "Transform your business with innovative AI and Machine Learning solutions. Revolutionize operations and unlock new possibilities with Codework's expertise.",
          keywords:
            "Large language models, real-time web searches, AI-powered information retrieval, user engagement, verified information, citations, diverse audience, colon cancer detection, non-invasive tool, AI-powered diagnostics, 3D modeling, advanced AI algorithms, speech-to-text technology, Natural Language Processing (NLP), sentiment analysis, personalized experiences, decision-making, healthcare solutions, radiology reports, intuitive tools, deep learning, visual aids, diagnostic accuracy, simplified processes, caregiving solutions, efficient solutions",
        };
      case "/ai-powered-technology":
        return {
          title: "Shaping Tomorrow with AI Technology",
          description:
            "Discover how Codework harnesses AI-powered technology to shape a smarter tomorrow. Empowering businesses with innovative and future-ready solutions.",
          keywords:
            "AI, Machine Learning, Data Science, Software Development, Web Development, Mobile App Development, Cloud Computing, Cybersecurity, Digital Transformation",
        };
      case "/careers-at-codework":
        return {
          title: "Careers at Codework: Shape the Future",
          description:
            "Join Codework and help shape the future with cutting-edge AI technology. Be part of a team that thrives on innovation, collaboration, and excellence.",
        };
      case "/contact-ai-solutions":
        return {
          title: "Contact Codework for AI Solutions",
          description:
            "Reach out to Codework and discover how our AI solutions can empower your business. Let us help you innovate, streamline, and achieve your goals.",
        };

      case "/ai-in-healthcare-you-must-know":
        return {
          title: "AI-Driven Healthcare: Diagnostics & EHR Solutions",
          description: "Enhance healthcare with AI-powered diagnostics and secure EHR management. Deliver personalized treatments, streamline workflows, and improve patient outcomes.",
        };

      case "/unique-ai-in-education":
        return {
          title: "Adaptive AI Learning & Blockchain Certification",
          description: "Transform education with adaptive AI for personalized learning and blockchain-backed certifications. Ensure secure, accessible, and innovative learning experiences.",
        };

      case "/ai-in-ecommerce":
        return {
          title: "Smarter Shopping: Predictive E-commerce Analytics",
          description: "Enhance e-commerce with predictive analytics. Deliver personalized shopping, secure transactions, and intuitive experiences to boost sales and customer loyalty.",
        };

      case "/new-ai-in-finance":
        return {
          title: "AI-Powered Fraud Detection & Risk Analysis",
          description: "Optimize finance with AI for fraud detection, credit risk analysis, and secure payments. Enhance trust, efficiency, and smarter financial decision-making.",
        };

      case "/ai-in-cybersecurity":
        return {
          title: "Advanced Data Security: Threat Detection & Decentralized Protection",
          description: "Safeguard data with advanced anomaly detection and decentralized security. Protect sensitive information, ensure compliance, and build user trust.",
        };

      // Add cases for other routes as needed
      default:
        return {
          title: "Codework",
          description:
            "Discover cutting-edge AI-powered solutions for your business.",
          keywords:
            "AI software development, machine learning, data science, cybersecurity, cloud computing, web development, mobile app development, AI consulting, generative AI, NLP, data engineering, predictive analytics, blockchain, Reactjs & Nextjs, Java & Python, Azure, AWS, R language, Deep Learning, Neural Networks",
        };
    }
  };

  const { title, description, keywords } = getMetaTags();

  // Determine background image based on pathname
  const getBackgroundImage = () => {
    if (/^\/blog\/\d+$/.test(pathname)) {
      return "/bg8.jpg";
    }
    switch (pathname) {
      case "/":
        return "/bghome.jpg";
      case "/solution":
        return "/sol_bg1.avif";
      case "/vision":
        return "/bg.jpg";
      case "/projects":
        return "/bg5.avif";
      case "/contact-ai-solutions":
        return "/bg.jpg";
      case "/group":
        return "/rbbg.jpg";
      case "/aiSolution":
        return "/bg.jpg";
      case "/empowering-innovation-ai-advanced-technologies":
        return "/bg.jpg";
      case "/team":
        return "/01.avif";
      case "/clients-custom-ai-solutions":
        return "/01.avif";
      case "/driving-innovation-cutting-edge-ai-services":
        return "/rbbg.jpg";
      case "/ai-powered-technology":
        return "/bg7.jpg";
      case "/careers-at-codework":
        return "/bg8.jpg";
      case "/build-your-career-with-codework":
        return "/bg8.jpg";
      case "/join-our-team":
        return "/bg8.jpg";
      case "/ai-in-healthcare-you-must-know":
        return "/bg8.jpg";
      case "/unique-ai-in-education":
        return "/bg8.jpg";
      case "/ai-in-ecommerce":
        return "/bg8.jpg";
      case "/new-ai-in-finance":
        return "/bg8.jpg";
      case "/ai-in-cybersecurity":
        return "/bg8.jpg";
      case "/create-blog":
        return "/bg8.jpg";
      case "/blog-lists":
        return "/bg8.jpg";
      case "/user-blogs":
        return "/bg8.jpg";
      case "/internship":
        return "/bg8.jpg";
      default:
        return "/images/bg-default.jpg";
    }
  };

  // Calculate zoom and blur based on scroll position
  const zoomScale = 1 + Math.min(scrollY / 1000, 0.2); // Scale up to 1.2x
  const blurAmount = Math.min(scrollY / 100, 10); // Blur up to 10px
  const GA_TRACKING_ID = "G-1E2S2FY962";

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta
          name="google-site-verification"
          content="KBq41EUcHtWqRI8Gghz1e_jXoi6D4kKjxhgl9cvCQAs"
        />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1E2S2FY962"
        ></script>
        <script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
        </script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CodeWork",
              url: "https://www.codework.ai",
              description:
                "Codework.ai offers innovative AI-software development solutions, specializing in AI-driven applications, full-stack development, and cloud computing. Our tailored services empower businesses with cutting-edge technology for optimal performance and growth.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "AKSHAYA HQ, 305, OMR, Kazhipattur, Padur",
                addressLocality: "Chennai",
                addressRegion: "Tamilnadu",
                postalCode: "603103",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-72006-16547",
                contactType: "Customer Service",
                areaServed: "IN",
                availableLanguage: ["en"],
              },
              sameAs: [
                "https://www.linkedin.com/company/codeworkai",
                "https://www.facebook.com/profile.php?id=61567244678626",
                "https://www.instagram.com/codework.ai/",
                "https://x.com/home?lang=en",
              ],
            }),
          }}
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(ss,ex){ 
            window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; 
            (function(d,s){ 
              fs=d.getElementsByTagName(s)[0]; 
              function ce(src){ 
                var cs=d.createElement(s); 
                cs.src=src; 
                cs.async=1; 
                fs.parentNode.insertBefore(cs,fs); 
              }; 
              ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); 
            })(document,'script'); 
          })('DzLR5a5YrWZaBoQ2');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
            {/* <ChatIcon/> */}
          </div>
        </div>
      </body>
    </html>
  );
}
