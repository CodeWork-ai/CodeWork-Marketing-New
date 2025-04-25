import React from 'react';
import Link from 'next/link';

const ContactButton = () => {
  return (
    <div 
      className="relative bg-cover bg-center rounded-lg p-20 text-center flex flex-col justify-center items-center"
      style={{
        backgroundImage: 'url(/contactbutton.svg)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add dark overlay
      }}
    >
      <h2 className="text-3xl font-bold text-white mb-4">
        Request a Customized Solution for Your Business!
      </h2>
      <p className="text-lg font-light text-white mb-6">
        Every business is unique. Request a tailored solution crafted specifically for your organization's challenges and goals.
      </p>
      <Link href="/contact-ai-solutions"> {/* Replace '/contact-landing' with the actual route */}
        <button className="bg-teal-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-teal-600 transition duration-300">
          CONTACT US
        </button>
      </Link>
    </div>
  );
};

export default ContactButton;
