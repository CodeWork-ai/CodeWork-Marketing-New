"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
import Footer from "./components/common/footer";
import Navbar from "./components/common/nav";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import ChatBot from "./components/ChatBot";

// Font imports/config
const gilroyRegular = localFont({
  src: "./fonts/gilroy-regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-gilroy-regular",
  display: "swap",
});

// 2) Medium (500)
const gilroyMedium = localFont({
  src: "./fonts/gilroy-medium.ttf",
  weight: "500",
  style: "normal",
  variable: "--font-gilroy-medium",
  display: "swap",
});

// 3) SemiBold (600)
const gilroySemibold = localFont({
  src: "./fonts/gilroy-semibold.ttf",
  weight: "600",
  style: "normal",
  variable: "--font-gilroy-semibold",
  display: "swap",
});

const getMetaTags = (pathname) => {
  switch (pathname) {
    case "/":
      return {
        title:
          "AI Software Development company-CODEWORk/ Custom AI solutions",
        description:
          "Unlock powerful AI software development solutions tailored to your business, only at CODEWORK.",
        keywords:
          "AI software development, machine learning, data science, cybersecurity, cloud computing, web development, mobile app development, AI consulting, generative AI, NLP, data engineering, predictive analytics, blockchain, Reactjs & Nextjs, Java & Python, Azure, AWS, R language, Deep Learning, Neural Networks",
      };
    case "/ai-solutions":
      return {
        title: "AI Innovation | Advanced Tech Solutions",
        description:
          "Empowering innovation with AI and advanced technologies at Codework. Transform your business with intelligent and future-ready software solutions.",
        keywords:
          "AI, Artificial Intelligence, Machine Learning, Data Science, Data Engineering, Cyber Security, Predictive Analytics, XGboostNatural Language Processing, AI Consulting, Generative AI, PyTorch, Keras, TensorFlow",
      };
    case "/ai-services":
      return {
        title: "AI Services | Cutting-Edge Innovation",
        description:
          "Driving innovation through cutting-edge AI services at Codework. Leverage advanced AI solutions to transform your business and stay ahead in the digital era.",
        keywords:
          "AI services, software development solutions, custom software development, iOS and Android apps, web designing services, and cloud computing solutions, Data Science. Dataset preparation, Data processing",
      };
    case "/our-company-case-studies":
      return {
        title:
          "Transform Business with AI & ML Solutions by CODEWORK",
        description:
          "Discover how CODEWORK's AI and Machine Learning solutions transform businesses, streamline operations, and unlock growth through real-world case studies.",
      };
    case "/testimonials":
      return {
        title:
          "Client Testimonials | Success Stories & Feedback at Codework",
        description:
          "Hear from our clients about how Codework’s AI solutions have transformed their businesses. Real feedback that inspires us to deliver exceptional results every day.",
        keywords:
          "Large language models, real-time web searches, AI-powered information retrieval, user engagement, verified information, citations, diverse audience, colon cancer detection, non-invasive tool, AI-powered diagnostics, 3D modeling, advanced AI algorithms, speech-to-text technology, Natural Language Processing (NLP), sentiment analysis, personalized experiences, decision-making, healthcare solutions, radiology reports, intuitive tools, deep learning, visual aids, diagnostic accuracy, simplified processes, caregiving solutions, efficient solutions",
      };
    case "/our-blog-lists":
      return {
        title:
          "Insights & Trends in AI and Tech Innovation | Codework",
        description:
          "Explore the Codework blog for expert insights, AI trends, tech innovations, and practical guides to help you stay ahead in the evolving digital landscape.",
        keywords:
          "AI, Machine Learning, Data Science, Software Development, Web Development, Mobile App Development, Cloud Computing, Cybersecurity, Digital Transformation",
      };
    case "/careers-at-codework":
      return {
        title:
          "Careers at Codework – Shape the Future of Technology",
        description:
          "Join Codework and help shape the future with cutting-edge AI technology. Be part of a team that thrives on innovation, collaboration, and excellence.",
      };
    case "/about-us":
      return {
        title:
          "Codework: Shaping the Future with Powerful AI Innovation",
        description:
          "Discover how Codework is shaping the future with powerful AI innovation, transforming businesses through cutting-edge technology, creativity, and expertise.",
      };
    case "/contact-ai-solutions":
      return {
        title:
          "Contact Codework Today for Expert AI Solutions",
        description:
          "Reach out to Codework and discover how our AI solutions can empower your business. Let us help you innovate, streamline, and achieve your goals.",
      };
    case "/ai-in-healthcare-you-must-know":
      return {
        title:
          "Healthcare AI Solutions | Diagnostics & EHR Management",
        description:
          "Revolutionize healthcare with AI-powered diagnostics and secure Electronic Health Records management, improving patient outcomes and streamlining workflows.",
      };
    case "/ai-in-ecommerce":
      return {
        title:
          "Smarter Shopping: Predictive E-commerce Analytics",
        description:
          "Enhance e-commerce with predictive analytics. Deliver personalized shopping, secure transactions, and intuitive experiences to boost sales and customer loyalty.",
      };
    case "/new-ai-in-finance":
      return {
        title:
          "Finance AI Solutions | Fraud Detection & Risk Analysis",
        description:
          "Improve financial systems with AI-powered fraud detection and credit risk analysis, ensuring secure and efficient financial operations.",
      };
    case "/unique-ai-in-education":
      return {
        title:
          "Education AI Solutions | Adaptive Learning Platforms",
        description:
          "Enhance learning with AI-driven adaptive platforms and blockchain certification, personalizing education experiences for students and institutions.",
      };
    case "/ai-in-data-security":
      return {
        title:
          "Data Security AI Solutions | Anomaly Detection & Protection",
        description:
          "Protect sensitive data with AI-based anomaly detection and decentralized security protocols to safeguard your business from cyber threats.",
      };
    case "/ai-model-training":
      return {
        title:
          "AI Model Training Services | Codework Experts",
        description:
          "Accelerate your business with AI model training solutions from Codework. Build smarter, scalable models for real-world applications.",
      };
    case "/software-development-service":
      return {
        title:
          "Complete software development services by Codework",
        description:
          "Complete software development services by Codework",
      };
    case "/custom-software-development":
      return {
        title:
          "Custom software built to scale with Codework’s help",
        description:
          "Get powerful custom-built software that adapts to your business. Codework offers flexible and scalable solutions for every industry.",
      };
    case "/mobile-software-development":
      return {
        title:
          "Codework builds engaging Android & iOS mobile apps",
        description:
          "Codework creates high-performance mobile apps for Android and iOS. User-friendly, secure, and scalable app development solutions.",
      };
    case "/web-design-service":
      return {
        title:
          "Creative web design services by Codework",
        keywords:
          "web design, creative web design, modern web design, responsive web design, UI/UX design, website development, Codework web design",
        description:
          "Transform your online presence with Codework’s creative web design services. We build modern, responsive websites that engage users and drive results.",
      };
    case "/it-staff-service":
      return {
        title:
          "IT management services that work, from Codework",
        description:
          "Optimize your tech operations with Codework’s management services. We ensure smooth performance, uptime, and security 24/7.",
      };
    case "/cybersecurity-service":
      return {
        title:
          "Cyber security services tailored by Codework experts",
        description:
          "Safeguard your data, networks, and systems with Codework’s advanced cyber security solutions. We help you detect, prevent, and respond to threats.",
      };
    case "/penetration-testing-service":
      return {
        title:
          "Codework secures systems with penetration testing",
        description:
          "Identify vulnerabilities before attackers do. Codework offers expert penetration testing to secure your applications and networks.",
      };
    case "/devops-solutions":
      return {
        title:
          "Accelerate delivery with DevOps solutions by Codework",
        description:
          "Streamline software delivery with Codework’s DevOps solutions. CI/CD, automation, and cloud-native tools for better collaboration.",
      };
    case "/cloud-computing":
      return {
        title:
          "Cloud computing services by Codework",
        description:
          "Leverage the power of the cloud with Codework’s computing services. Scalable, secure, and cost-effective solutions for your business.",
      };
    case "/ai-powered-pdf-translator":
      return {
        title:
          "AI-powered PDF Translator by Codework for Multilingual User",
        description:
          "Translate PDFs accurately into Tamil, Hindi, Malayalam, Telugu, and Kannada with Codework’s AI-powered PDF Translator. Retains layout and structure.",
      };
    case "/web-scraping-services":
      return {
        title:
          "Codework Web Scraping – Smart Data Collection Made Easy",
        description:
          "Collect valuable web data quickly with Codework’s web scraping service—like having a smart assistant that gathers real-time online insights for your business.",
      };
    case "/signature-recognition-system":
      return {
        title:
          "Signature Recognition System – Accurate Signature Matching",
        description:
          "Verify handwritten signatures using Codework’s recognition system. With image processing and template matching, it ensures precise, low-security authentication.",
      };
    case "/colowatch-case-studies":
      return {
        title:
          "Colowatch AI Colon Cancer Test – Accurate & Non-Invasive",
        description:
          "Colowatch offers a non-invasive, AI-based colon cancer screening alternative to colonoscopies. Boosts accuracy, comfort, and early detection rates.",
      };
    case "/radi-insight-scan":
      return {
        title:
          "Radi Insight Scan – Simplifying Medical Terms for Patients",
        description:
          "Radi Insight Scan helps patients understand complex medical jargon by translating reports into clear, simple language, improving healthcare communication.",
      };
    case "/hyperflex-ai":
      return {
        title:
          "Smart Search Engine for Academic Research",
        description:
          "Hyperflx.AI streamlines academic research by providing accurate, relevant, and well-organized educational content to enhance learning outcomes.",
      };
    case "/launch-modes-andorid":
      return {
        title:
          "Activity Launch Modes in Android Explained",
        description:
          "Explore Android Activity Launch Modes in detail. Learn how Standard, SingleTop, SingleTask, and SingleInstance affect app behavior and user navigation.",
        keywords:
          "Android Activity Launch Modes, Launch Modes in Android, Android app navigation, Activity lifecycle Android, Android development guide",
      };
    case "/algorithms-to-agents":
      return {
        title:
          "From Algorithms to Intelligent AI Agents",
        description:
          "Discover the evolution from basic algorithms to intelligent agents in AI. Understand their roles, decision-making processes, and real-world applications.",
        keywords:
          "AI agents, evolution of algorithms, artificial intelligence, intelligent systems, machine learning agents",
      };
    case "/workmanager-alarmmanager-Jobscheduler":
      return {
        title:
          "WorkManager vs AlarmManager vs JobScheduler",
        description:
          "Compare WorkManager, AlarmManager, and JobScheduler in Android. Learn when to use each for background tasks, scheduling, and optimal app performance.",
        keywords:
          "WorkManager Android, AlarmManager Android, JobScheduler Android, Android background tasks, Android task scheduling",
      };
    case "/model-context-protocol":
      return {
        title:
          "Model Context Protocol in AI: A Game Changer",
        description:
          "Explore how the Model Context Protocol is revolutionizing AI by enabling smarter interactions, enhanced context awareness, and improved performance.",
        keywords:
          "Model Context Protocol, AI context awareness, advanced AI protocols, future of artificial intelligence, intelligent model interaction",
      };
    case "/tweaks-powerful-adaptations":
      return {
        title:
          "LoRA in AI: Small Changes, Big Improvements",
        description:
          "Understand how Low-Rank Adaptation (LoRA) enhances AI models with minimal changes. Learn its role in fine-tuning and efficient model adaptation.",
        keywords:
          "LoRA in AI, Low-Rank Adaptation, AI model fine-tuning, efficient AI training, LoRA explained",
      };
    case "/hype-hijack-goal":
      return {
        title:
          "Avoid AI Hype: Focus on Practical Business Solutions",
        description:
          "Discover how to adopt AI responsibly by solving real problems first. Learn why simple, data-driven solutions often outperform complex AI strategies.",
        keywords:
          "Responsible AI adoption, Practical AI strategies, Data readiness for AI, Business problem solving, Simple AI solutions, AI implementation guide, Avoid AI project failure",
      };
    case "/revolutionizing-virtual-colonoscopy":
      return {
        title:
          "Radi Insight 3D: Virtual Colonoscopy Tech",
        description:
          "Explore how Radi Insight 3D is transforming virtual colonoscopy with advanced 3D imaging, enhancing diagnostic accuracy and patient experience.",
        keywords:
          "Android Activity Launch Modes, Launch Modes in Android, Android app navigation, Activity lifecycle Android, Android development guide",
      };
    case "/uae-makes-history":
      return {
        title:
          "UAE Offers Free ChatGPT Plus to All Residents",
        description:
          "UAE becomes the first nation to provide free ChatGPT Plus access to all residents, marking a bold step in AI accessibility and digital innovation.",
        keywords:
          "AI agents, evolution of algorithms, artificial intelligence, intelligent systems, machine learning agents",
      };
    case "/privacy-policy":
      return {
        title: "privacy-policy",
        description: "",
        keywords: "",
      };
    case "/careers-at-codework":
      return {
        title: "careers-at-codework",
        description: "",
        keywords: "",
      };
    case "/industries-you-must-know":
      return {
        title: "industries-you-must-know",
        description: "",
        keywords: "",
      };
    case "/join-our-team":
      return {
        title: "join-our-team",
        description: "",
        keywords: "",
      };
    case "/internship":
      return {
        title: "internship",
        description: "",
        keywords: "",
      };
    case "/the-deepfake-dilemma":
      return {
        title: "the-deepfake-dilemma",
        description: "",
        keywords: "",
      };
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

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const { title, description, keywords } = getMetaTags(pathname);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const GA_TRACKING_ID = "G-1E2S2FY962";

  return (
    <html
      lang="en"
      className={`${gilroyRegular.variable} ${gilroyMedium.variable} ${gilroySemibold.variable}`}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link rel="icon" href="/icon.svg" />

        {/* Dynamic Meta Tags */}
        <title>{title}</title>
        <meta
          name="google-site-verification"
          content="KBq41EUcHtWqRI8Gghz1e_jXoi6D4kKjxhgl9cvCQAs"
        />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Google Analytics and Tag Manager Scripts */}
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
        {/* LinkedIn Script */}
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
      <body className="bg-white">
        {/* Google Tag Manager (noscript) - Body Tag */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W9K57N9L" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Navbar className="mb-36 px-10 md:px-20" />
        <main>{children}</main>
        <Footer />

        {/* ChatBot Component below */}
        <div
          className={`
            fixed right-4 bottom-4 z-50
            transition-all duration-500
            ${scrollY > 100
              ? "opacity-100 pointer-events-auto animate-fallDown"
              : "opacity-0 pointer-events-none animate-fallUp"
            }
          `}
          style={{ willChange: "transform, opacity" }}
        >
          <ChatBot />
        </div>

        {/* Animation styles */}
        <style jsx global>{`
          @keyframes fallDown {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          @keyframes fallUp {
            0% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
            100% {
              opacity: 0;
              transform: translateY(40px) scale(0.95);
            }
          }
          .animate-fallDown {
            animation: fallDown 0.5s cubic-bezier(0.4,0,0.2,1) forwards;
          }
          .animate-fallUp {
            animation: fallUp 0.5s cubic-bezier(0.4,0,0.2,1) forwards;
          }
        `}</style>
        {/* End of ChatBot Component */}
      </body>
    </html>
  );
}