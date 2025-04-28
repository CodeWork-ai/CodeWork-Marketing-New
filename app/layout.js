"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";
import Link from "next/link";
import { TbMessageChatbot } from "react-icons/tb";
import ChatIcon from "./components/common/aichat";
import PopGifModal from "./components/popImageModal";

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
  const pathname = usePathname(); 
  const [scrollY, setScrollY] = useState(0); 

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const logVisitor = async () => {
      try {
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();
        const ip = ipData.ip || "Unknown";

        const now = new Date();
        const istOffset = 5.5 * 60 * 60 * 1000;
        const istTime = new Date(now.getTime() + istOffset);
        const timestamp = istTime.toISOString().replace("Z", "+05:30");

        const page = pathname || "/";
        const userAgent = navigator.userAgent || "Unknown";

        const screenResolution =
          `${window.screen.width}x${window.screen.height}` || "Unknown";
        const browserLanguage = navigator.language || "Unknown";
        const referrer = document.referrer || "Direct";

        const geoResponse = await fetch(`/api/proxy-ip-api?ip=${ip}`);
        const geoData = await geoResponse.json();

        const location = `${geoData.city || "Unknown"}, ${
          geoData.regionName || "Unknown"
        }, ${geoData.country || "Unknown"}`;
        const country = geoData.country || "Unknown";
        const countryCode = geoData.countryCode || "Unknown";
        const region = geoData.region || "Unknown";
        const regionName = geoData.regionName || "Unknown";
        const city = geoData.city || "Unknown";
        const zip = geoData.zip || "Unknown";
        const latitude = geoData.lat || "Unknown";
        const longitude = geoData.lon || "Unknown";
        const timeZone = geoData.timezone || "Unknown";
        const isp = geoData.isp || "Unknown";
        const company = geoData.org || "Unknown";
        const as = geoData.as || "Unknown";
        const proxy = geoData.proxy ? "Yes" : "No";

        const response = await fetch("/api/visitor-logs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ip,
            timestamp,
            page,
            userAgent,
            location,
            country,
            countryCode,
            region,
            regionName,
            city,
            zip,
            latitude,
            longitude,
            timeZone,
            isp,
            company,
            as,
            proxy,
            screenResolution,
            browserLanguage,
            referrer,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Failed to log visitor: ${errorData.message}`);
        }

        console.log("Visitor logged successfully");
      } catch (err) {
        console.error("Visitor logging failed:", err);
      }
    };

    if (typeof window !== "undefined") {
      logVisitor();
    }
  }, [pathname]);

  // Meta tags content based on pathname
  const getMetaTags = () => {
    switch (pathname) {
      case "/":
        return {
          title:
            "CODEWORK: Top AI Software Development Company | Custom AI Solutions",
          description:
            "CODEWORK: Discover top-notch AI software development services tailored to your business needs. Contact us for custom AI solutions.",
          keywords:
            "AI software development, machine learning, data science, cybersecurity, cloud computing, web development, mobile app development, AI consulting, generative AI, NLP, data engineering, predictive analytics, blockchain, Reactjs & Nextjs, Java & Python, Azure, AWS, R language, Deep Learning, Neural Networks",
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
          description:
            "Enhance healthcare with AI-powered diagnostics and secure EHR management. Deliver personalized treatments, streamline workflows, and improve patient outcomes.",
        };

      case "/unique-ai-in-education":
        return {
          title: "Adaptive AI Learning & Blockchain Certification",
          description:
            "Transform education with adaptive AI for personalized learning and blockchain-backed certifications. Ensure secure, accessible, and innovative learning experiences.",
        };

      case "/ai-in-ecommerce":
        return {
          title: "Smarter Shopping: Predictive E-commerce Analytics",
          description:
            "Enhance e-commerce with predictive analytics. Deliver personalized shopping, secure transactions, and intuitive experiences to boost sales and customer loyalty.",
        };

      case "/new-ai-in-finance":
        return {
          title: "AI-Powered Fraud Detection & Risk Analysis",
          description:
            "Optimize finance with AI for fraud detection, credit risk analysis, and secure payments. Enhance trust, efficiency, and smarter financial decision-making.",
        };

      case "/ai-in-cybersecurity":
        return {
          title:
            "Advanced Data Security: Threat Detection & Decentralized Protection",
          description:
            "Safeguard data with advanced anomaly detection and decentralized security. Protect sensitive information, ensure compliance, and build user trust.",
        };

      case "/ai-model-training":
        return {
          title:
            "AI Model Training Services | Custom AI Solutions – Codework.ai",
          description:
            "Boost business efficiency with Codework.ai's AI model training services. Get tailored AI solutions for predictive analytics, NLP, automation & more.",
          keywords:
            "Machine learning models, Deep learning ,Neural networks ,Computer vision",
        };

      case "/software-development-service":
        return {
          title: "Scalable Software Development | High-Performance Solutions",
          description:
            "Codework.ai builds scalable, high-performance software solutions. Get custom development for startups & enterprises using cutting-edge technology.",
          keywords:
            "Robust software solutions, Scalable applications, Business needs",
        };

      case "/custom-software-development":
        return {
          title: "Custom Software Development | Scalable Business Solutions",
          description:
            "Codework.ai delivers custom software solutions for enterprises, web & mobile apps, ensuring efficiency, seamless UX & business scalability.",
          keywords:
            "Tailored software solutions, Specific business processes, Business goals",
        };
      case "/mobile-software-development":
        return {
          title:
            "Mobile App Development | Scalable & High-Performance Solutions",
          description:
            "Codework creates innovative mobile apps with AI, cross-platform & native development. Enhance user engagement & optimize business operations.",
          keywords:
            "Intuitive mobile apps, User engagement, iOS development, Android development",
        };

      case "/web-design-service":
        return {
          title: "Expert Web Design Services | Codework.ai",
          description:
            "Boost your brand with high-performance, user-centric web design. Codework.ai crafts engaging websites for businesses, e-commerce, and web apps.",
          keywords:
            "User-friendly websites, Seamless user experience, Stunning web designs",
        };
      case "/cloud-computing":
        return {
          title: "Scalable Cloud Computing Solutions | Codework",
          description:
            "Optimize your business with secure, scalable cloud computing. Codework offers AI-driven automation, serverless computing & cost-effective cloud solutions.",
          keywords:
            "Secure cloud solutions, Scalable cloud services, AWS solutions, Azure solutions, API integrations",
        };
      case "/it-staff-service":
        return {
          title: "IT Staff Augmentation Services",
          description:
            "Bridge the IT talent gap with expert staff augmentation. Codework provides skilled professionals for software development, cloud, AI & cybersecurity.",
          keywords: "Offshore teams, Skilled professionals, Project scaling",
        };

      case "/cybersecurity-service":
        return {
          title: "Advanced Cybersecurity Solutions | Codework",
          description:
            "Protect your business with cutting-edge cybersecurity solutions. Codework safeguards data, prevents cyber threats & ensures compliance with industry standards.",
          keywords:
            "Advanced cybersecurity, Data protection, Security solutions",
        };
      case "/penetration-testing-service":
        return {
          title: "Penetration Testing Services | Codework",
          description:
            "Identify & fix security vulnerabilities with expert penetration testing. Codework simulates real-world cyberattacks to protect networks, apps & cloud data.",
          keywords:
            "Identify vulnerabilities , SecurThreat detection, ity assessments",
        };
      case "/devops-solutions":
        return {
          title: "Scalable DevOps Solutions | Codework",
          description:
            "Streamline development with scalable DevOps solutions. Codework enhances collaboration, automates workflows & optimizes deployment for faster software delivery.",
          keywords:
            "Development and operations Efficient, DevOps practices, DevOps tools",
        };
      case "/build-your-career-with-codework":
        return {
          title: "build-your-career-with-codework",
        };
      case "/internship":
        return {
          title: "internship",
        };
      case "/join-our-team":
        return {
          title: "join-our-team",
        };
      case "/team":
        return {
          title: "team",
        };
      case "/blog-lists":
        return {
          title: "blog-lists",
        };
      case "/create-blog":
        return {
          title: "create-blog",
        };
      case "/join-our-team":
        return {
          title: "join-our-team",
        };
      case "/user-blogs":
        return {
          title: "user-blogs",
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
        return "/contacts.jpg";
      case "/contact-ai-solutions":
        return "/contacts.jpg";
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
      case "/ai-model-training":
        return "/bg8.jpg";
      case "/software-development-service":
        return "/bg8.jpg";
      case "/custom-software-development":
        return "/bg8.jpg";
      case "/mobile-software-development":
        return "/bg8.jpg";
      case "/web-design-service":
        return "/bg8.jpg";
      case "/cloud-computing":
        return "/bg8.jpg";
      case "/cloud-computing":
        return "/bg8.jpg";
      case "/it-staff-service":
        return "/bg8.jpg";
      case "/cybersecurity-service":
        return "/bg8.jpg";
      case "/penetration-testing-service":
        return "/bg8.jpg";
      case "/devops-solutions":
        return "/bg8.jpg";
      case "/privacy-policy":
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-W9K57N9L');
              `,
          }}
        />
        <script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
        </script>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ var fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('DzLR5a5YdPxaBoQ2');`,
          }}
        ></script>
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
        {/* LinkedIn Script*/}
        <script type="text/javascript">
          {`
            _linkedin_partner_id = "7050068";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </script>
        <script type="text/javascript">
          {`
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
          `}
        </script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=7050068&fmt=gif"
          />
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) - Body Tag */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W9K57N9L" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
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
          {!["/contact-ai-solutions", "/privacy-policy"].includes(pathname) && (
  <Navbar className="mb-36 px-10 md:px-20" />
)}


            
            <PopGifModal />
            <main>{children}</main>
            <Footer />
            {/* <ChatIcon/> */}
          </div>
        </div>
      </body>
    </html>
  );
}
