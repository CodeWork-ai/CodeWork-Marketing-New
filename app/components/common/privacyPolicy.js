import React from 'react';
import Link from 'next/link';
const PrivacyPolicy = () => {
  return (
    <div className=" min-h-screen pt-40 text-gray-800 p-6 flex justify-center items-center">
        {/* Logo Section */}
        <div className="absolute top-0  left-4">
        <Link href="/">
          <img
            src="/cw-logo.svg"
            alt="Company Logo"
            className="w-44 h-44 cursor-pointer"
          />
        </Link>
        </div>
      <div className="max-w-3xl w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 mb-4">Last Updated: 22/04/2025</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Codework ("we", "our", or "us") operates this website (the “Site”).
            This page outlines our policies regarding the collection, use, and
            disclosure of Personal Information received from users of the Site.
            By using this Site, you agree to the collection and use of information
            in accordance with this policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Information Collection and Use</h2>
          <p className="text-gray-700 leading-relaxed">
            While using our Site, we may request personally identifiable
            information that can be used to contact or identify you, such as your
            name, email, or other identifiers (“Personal Information”).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Log Data</h2>
          <p className="text-gray-700 leading-relaxed">
            Like many websites, we collect information that your browser sends
            whenever you visit our Site (“Log Data”). This data may include your
            IP address, browser type/version, visited pages, time and date of your
            visit, time spent on pages, and other analytical data. We may use third-party
            services such as Google Analytics to monitor and analyze this information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            Our Site uses cookies—small text files stored by your browser—to improve
            user experience. Cookies may be "session" (deleted after use) or "persistent"
            (stored for future visits). Persistent cookies help us remember preferences
            and analyze user interaction over time.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Data Sharing</h2>
          <p className="text-gray-700 leading-relaxed">
            We only share your data with carefully selected partners, vendors, and
            third-party service providers where it is necessary. These include:
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Marketing Platforms: CRM tools, email automation platforms, advertising networks.</li>
            <li>Analytics Services: Web analysis tools like Google Analytics.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We prioritize the security of your Personal Information. However, no
            transmission method over the internet or method of electronic storage
            is 100% secure. While we strive to protect your data, we cannot guarantee
            absolute security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Your Rights Under the California Consumer Privacy Act (CCPA)</h2>
          <p className="text-gray-700 leading-relaxed">
            Codework complies with the CCPA by granting you rights as a California
            consumer, including:
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>The right to know what personal information is collected and how it is used.</li>
            <li>The right to request deletion of your personal data.</li>
            <li>The right to opt out of the sale of personal information.</li>
            <li>The right to non-discrimination for exercising your privacy rights.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Global Data Subject Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            If you are a resident of the EEA, UK, or California, you may have the
            following rights:
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Right to Access: Request data we hold about you.</li>
            <li>Right to Rectification: Correct inaccurate data.</li>
            <li>Right to Deletion: Request deletion of your data.</li>
            <li>Right to Restrict Processing: Limit how your data is used.</li>
            <li>Right to Data Portability: Request data in a structured, machine-readable format.</li>
            <li>Right to Object: Object to certain types of data processing.</li>
            <li>Right to Withdraw Consent: Revoke previously given consent.</li>
            <li>Right to Non-Discrimination: You will not be penalized for exercising your rights.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy is effective as of April 1, 2019, and remains in effect
            unless modified in future updates. Changes will become active immediately
            upon posting on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy or wish to exercise
            your rights, please contact us at: 
            <span className="font-semibold text-blue-600">info@codework.ai</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
