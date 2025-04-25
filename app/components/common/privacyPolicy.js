// pages/privacy-policy.jsx
"use client";
import React from "react";
import Link from "next/link";
import {
  FaShieldAlt,
  FaCookieBite,
  FaChartLine,
  FaLock,
  FaGlobe,
  FaEdit,
  FaShareAlt,
} from "react-icons/fa";

const PrivacyPolicyPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-32 pb-16 px-6 flex justify-center">
    {/* Logo */}
    <div className="absolute top-0 left-4">
      <Link href="/">
        <img
          src="/logo.svg"
          alt="Company Logo"
          className="w-36 h-36 cursor-pointer"
        />
      </Link>
    </div>

    <div className="w-full max-w-3xl">
      {/* Hero */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
          Privacy Policy
        </h1>
        <p className="mt-2 text-gray-600">Last Updated: April 22, 2025</p>
      </header>

      <div className="prose lg:prose-lg prose-blue max-w-none">
        {/* Introduction */}
        <section id="introduction" className="p-6 rounded-lg mb-8 bg-gray-50">
          <h2 className="flex items-center text-2xl font-semibold mb-4">
            <FaShieldAlt className="mr-2 text-teal-500 animate-pulse" />
            Introduction
          </h2>
          <p>
            Codework (“we”, “our”, or “us”) operates this website (the “Site”).
            This page outlines our policies regarding the collection, use, and
            disclosure of Personal Information received from users of the Site.
            By using this Site, you agree to the collection and use of
            information in accordance with this policy.
          </p>
          <p>
            Codework is committed to safeguarding your Personal Data and
            privacy. We ensure that any personal data collected will be managed
            in strict compliance with applicable data protection legislation. If
            you are a resident of the European Union (or a country that has
            implemented local laws aligned with the GDPR), this includes the
            General Data Protection Regulation (“GDPR”) and relevant national
            legislation.
          </p>
        </section>

        {/* Information Collection */}
        <section
          id="information-collection"
          className="p-6 rounded-lg mb-8 bg-white"
        >
          <h2 className="flex items-center text-2xl font-semibold mb-4">
            <FaCookieBite className="mr-2 text-teal-500 animate-pulse" />
            Information Collection & Use
          </h2>
          <p>
            While using our Site, we may request personally identifiable
            information that can be used to contact or identify you, such as
            your name, email, or other identifiers (“Personal Information”).
          </p>
        </section>

        {/* Log Data */}
        <section id="log-data" className="p-6 rounded-lg mb-8 bg-gray-50">
          <h2 className="flex items-center text-2xl font-semibold mb-4">
            <FaChartLine className="mr-2 text-teal-500 animate-pulse" />
            Log Data
          </h2>
          <p>
            Like many websites, we collect information that your browser sends
            whenever you visit our Site (“Log Data”). This data may include your
            IP address, browser type/version, visited pages, time and date of
            your visit, time spent on pages, and other analytical data. We may
            use third-party services such as Google Analytics to monitor and
            analyze this information.
          </p>
          <br></br>
          <p>
          Your Personal Information may also be used to contact you with newsletters, informational content, or updates related to Codework’s services and offerings.
          </p>
        </section>

        ...
{/* Cookies */}
<section id="cookies" className="p-6 rounded-lg mb-8 bg-white">
  <h2 className="flex items-center text-2xl font-semibold mb-4">
    <FaCookieBite className="mr-2 text-teal-500 animate-pulse" />
    Cookies
  </h2>
  <p>
    Our Site uses cookies—small text files stored by your browser—to improve user experience. Cookies may be "session" (deleted after use) or "persistent" (stored for future visits). Persistent cookies help us remember preferences and analyze user interaction over time.
  </p>
  <p className="mt-4">
    We may also use cookies placed by third-party providers like Google to analyze web traffic or show targeted advertising. You can learn more about managing cookies through:
  </p>
  <ul className="list-disc ml-6 mt-2">
    <li>
      <a href="https://www.eucookie.eu/" target="_blank" rel="noreferrer">
        EU Cookie Guide
      </a>
    </li>
    <li>
      <a href="https://ico.org.uk/for-organisations/guide-to-pecr/" target="_blank" rel="noreferrer">
        UK ICO Guide
      </a>
    </li>
    <li>
      <a href="https://www.allaboutcookies.org/" target="_blank" rel="noreferrer">
        All About Cookies
      </a>
    </li>
  </ul>
  <p className="mt-4">
    To opt out of Google Analytics cookies, visit:&nbsp;
    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">
      Google Analytics Opt-out Add-on
    </a>
  </p>
</section>

{/* Data Sharing */}
<section id="data-sharing" className="p-6 rounded-lg mb-8 bg-white">
  <h2 className="flex items-center text-2xl font-semibold mb-4">
    <FaShareAlt className="mr-2 text-teal-500 animate-pulse" />
    Data Sharing
  </h2>
  <p>
    We only share your data with carefully selected partners, vendors, and third-party service providers where it is necessary. These include:
  </p>
  <ul className="list-disc ml-6 mt-2">
    <li>Marketing Platforms: CRM tools, email automation platforms, advertising networks.</li>
    <li>Analytics Services: Web analysis tools like Google Analytics.</li>
  </ul>
  <p className="mt-4">
    We share only the necessary information and ensure our partners do not use your data beyond the intended purpose.
  </p>
  <p className="mt-4">
    We may also share Personal Data in the following scenarios:
  </p>
  <ul className="list-disc ml-6 mt-2">
    <li>Compliance with legal obligations or valid government requests.</li>
    <li>Protection against fraud, spam, or unauthorized access.</li>
    <li>When you explicitly consent to the sharing of your data.</li>
  </ul>
</section>

        {/* Security */}
        <section id="security" className="p-6 rounded-lg mb-8 bg-white">
          <h2 className="flex items-center text-2xl font-semibold mb-4">
            <FaLock className="mr-2 text-teal-500 animate-pulse" />
            Security
          </h2>
          <p>
            We prioritize the security of your Personal Information. However, no
            transmission method over the internet or method of electronic
            storage is 100% secure. While we strive to protect your data, we
            cannot guarantee absolute security.
          </p>
        </section>

        {/* CCPA Rights */}
        <section id="ccpa-rights" className="p-6 rounded-lg mb-8 bg-gray-50">
          <h2 className="flex items-center text-2xl font-semibold mb-4">
            <FaEdit className="mr-2 text-teal-500 animate-pulse" />
            Your Rights Under the California Consumer Privacy Act (CCPA)
          </h2>
          <p>
            Codework complies with the CCPA by granting you rights as a
            California consumer, including:
          </p>
          <ul>
            <li>
              The right to know what personal information is collected and how
              it is used.
            </li>
            <li>The right to request deletion of your personal data.</li>
            <li>The right to opt out of the sale of personal information.</li>
            <li>
              The right to non-discrimination for exercising your privacy
              rights.
            </li>
          </ul>
        </section>

        {/* Global Rights */}
        <section id="global-rights" className="p-6 rounded-lg mb-8 bg-white">
          <h2 className="flex items-center text-2xl font-semibold mb-4">
            <FaGlobe className="mr-2 text-teal-500 animate-pulse" />
            Global Data Subject Rights
          </h2>
          <p>
            If you are a resident of the EEA, UK, or California, you may have
            the following rights:
          </p>
          <ul>
            <li>Right to Access: Request data we hold about you.</li>
            <li>Right to Rectification: Correct inaccurate data.</li>
            <li>Right to Deletion: Request deletion of your data.</li>
            <li>Right to Restrict Processing: Limit how your data is used.</li>
            <li>
              Right to Data Portability: Request data in a structured,
              machine-readable format.
            </li>
            <li>
              Right to Object: Object to certain types of data processing.
            </li>
            <li>Right to Withdraw Consent: Revoke previously given consent.</li>
            <li>
              Right to Non-Discrimination: You will not be penalized for
              exercising your rights.
            </li>
          </ul>
          <br></br>
          <p>
          To exercise any of these rights, please contact our Data Protection Officer at itsupport@codework.ai. We may require identity verification and may be restricted from fulfilling some requests due to legal obligations.

If you are unsatisfied with how we handle your data, you may file a complaint with your local data protection authority.
          </p>
        </section>

        {/* Changes */}
        <section id="changes" className="p-6 rounded-lg mb-8 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Privacy Policy
          </h2>
          <p>
            This Privacy Policy is effective as of April 1, 2019, and remains in
            effect unless modified in future updates. Changes will become active
            immediately upon posting on this page.
          </p>
          <br></br>
          <p>We recommend reviewing this page periodically. Continued use of our Site after policy changes constitutes your acceptance of those changes. If major changes occur, we will notify you via email or through a prominent notice on our website.</p>
        </section>

        {/* Contact */}
        <section id="contact" className="p-6 rounded-lg mb-8 bg-white">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or wish to
            exercise your rights, please contact us at:&nbsp;
            <span className="font-semibold text-blue-600">
              info@codework.ai
            </span>
          </p>
        </section>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  </div>
);

export default PrivacyPolicyPage;
