// app/layout.js
import "./globals.css";
import Footer from "./components/common/footer";
import Navbar from "./components/common/nav";
import localFont from "next/font/local";

// 1) Regular (400)
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
        title: "Transform Business with AI & ML Solutions by CODEWORK",
        description:
          "Discover how CODEWORK's AI and Machine Learning solutions transform businesses, streamline operations, and unlock growth through real-world case studies.",
      };
    case "/testimonials":
      return {
        title: "Client Testimonials | Success Stories & Feedback at Codework",
        description:
          "Hear from our clients about how Codework’s AI solutions have transformed their businesses. Real feedback that inspires us to deliver exceptional results every day.",
        keywords:
          "Large language models, real-time web searches, AI-powered information retrieval, user engagement, verified information, citations, diverse audience, colon cancer detection, non-invasive tool, AI-powered diagnostics, 3D modeling, advanced AI algorithms, speech-to-text technology, Natural Language Processing (NLP), sentiment analysis, personalized experiences, decision-making, healthcare solutions, radiology reports, intuitive tools, deep learning, visual aids, diagnostic accuracy, simplified processes, caregiving solutions, efficient solutions",
      };
    case "/our-blog-lists":
      return {
        title: "Insights & Trends in AI and Tech Innovation | Codework",
        description:
          "Explore the Codework blog for expert insights, AI trends, tech innovations, and practical guides to help you stay ahead in the evolving digital landscape.",
        keywords:
          "AI, Machine Learning, Data Science, Software Development, Web Development, Mobile App Development, Cloud Computing, Cybersecurity, Digital Transformation",
      };
    case "/careers-at-codework":
      return {
        title: "Careers at Codework – Shape the Future of Technology",
        description:
          "Join Codework and help shape the future with cutting-edge AI technology. Be part of a team that thrives on innovation, collaboration, and excellence.",
      };
    case "/about-us":
      return {
        title: "Codework: Shaping the Future with Powerful AI Innovation",
        description:
          "Discover how Codework is shaping the future with powerful AI innovation, transforming businesses through cutting-edge technology, creativity, and expertise.",
      };

    case "/contact-ai-solutions":
      return {
        title: "Contact Codework Today for Expert AI Solutions",
        description:
          "Reach out to Codework and discover how our AI solutions can empower your business. Let us help you innovate, streamline, and achieve your goals.",
      };

    case "/ai-in-healthcare-you-must-know":
      return {
        title: "Healthcare AI Solutions | Diagnostics & EHR Management",
        description:
          "Revolutionize healthcare with AI-powered diagnostics and secure Electronic Health Records management, improving patient outcomes and streamlining workflows.",
      };

    case "/ai-in-ecommerce":
      return {
        title: "Smarter Shopping: Predictive E-commerce Analytics",
        description:
          "Enhance e-commerce with predictive analytics. Deliver personalized shopping, secure transactions, and intuitive experiences to boost sales and customer loyalty.",
      };

    case "/new-ai-in-finance":
      return {
        title: "Finance AI Solutions | Fraud Detection & Risk Analysis",
        description:
          "Improve financial systems with AI-powered fraud detection and credit risk analysis, ensuring secure and efficient financial operations.",
      };

    case "/unique-ai-in-education":
      return {
        title: "Education AI Solutions | Adaptive Learning Platforms",
        description:
          "Enhance learning with AI-driven adaptive platforms and blockchain certification, personalizing education experiences for students and institutions.",
      };

    case "/ai-in-data-security":
      return {
        title: "Data Security AI Solutions | Anomaly Detection & Protection",
        description:
          "Protect sensitive data with AI-based anomaly detection and decentralized security protocols to safeguard your business from cyber threats.",
      };

    case "/ai-model-training":
      return {
        title: "AI Model Training Services | Codework Experts",
        description:
          "Accelerate your business with AI model training solutions from Codework. Build smarter, scalable models for real-world applications.",
      };
    case "/software-development-service":
      return {
        title: "Complete software development services by Codework",
        description:
          "Codework delivers reliable software development solutions tailored to your goals. From planning to deployment, we cover it all.",
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

  const GA_TRACKING_ID = "G-1E2S2FY962";

  return (
    <html
      lang="en"
      className={`${gilroyRegular.variable} ${gilroyMedium.variable} ${gilroySemibold.variable}`}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/icon.svg" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1E2S2FY962"
        ></script> ̰
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
      </body>
    </html>
  );
}
