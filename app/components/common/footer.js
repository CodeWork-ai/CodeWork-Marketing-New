"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {  FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaArrowRight, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsGlobe2 } from "react-icons/bs";

const Footer = () => {
  const socialMedia = [
    {
      label: "Twitter",
      Icon: FaSquareXTwitter,
      link: "https://www.x.com/CodeworkAi",
    },
    {
      label: "LinkedIn",
      Icon: FaLinkedin,
      link: "https://www.linkedin.com/company/codeworkai/",
    },
    {
      label: "Facebook",
      Icon: FaFacebook,
      link: "https://www.facebook.com/share/vZSfbuXSPqAQpz1T/",
    },
    {
      label: "Instagram",
      Icon: FaInstagram,
      link: "https://www.instagram.com/codework.ai?igsh=dng2NXU0cnppNGRq",
    },
  ];

  const quickLinks = [
    { href: "/about-us", label: "About Us" },
    { href: "/about-us", label: "Our Team" },
  ];

  const contactLinks = [
    { href: "/contact-ai-solutions", label: "Contact Us" },
    { href: "/build-your-career-with-codework", label: "AI Community" },
  ];

  const serviceLinks = [
    {
      href: "/ai-services",
      label: "Services",
    },
    { href: "/our-blog-lists", label: "Blogs" },
  ];

  const educationLinks = [
    { href: "/testimonials", label: "Testimonials " },
    { href: "/ai-solutions", label: "Expertise" },
  ];

  const dataSecurityLinks = [
    { href: "/industries-you-must-know", label: "Industries" },
    { href: "/our-company-case-studies", label: "Case Studies" },
  ];

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <footer className="w-full bg-gradient-to-b from-[#ffffff] to-[rgba(200,200,255,0.9)] text-[#1A3C5E]">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-8">
        {/* Top Row: 5 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* 1. QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <Link
                    href={item.href}
                    className={`
                      hover:text-blue-600 transition duration-150 text-sm
                      ${pathname === item.href ? "text-blue-600" : "text-[#1A3C5E]"}
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. CONTACT US */}
          <div>
            <h3 className="text-lg font-semibold mb-4"></h3>
            <ul className="space-y-2">
              {contactLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      hover:text-blue-600 transition duration-150 text-sm
                      ${pathname === item.href ? "text-blue-600" : "text-[#1A3C5E]"}
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-4"></h3>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      hover:text-blue-600 transition duration-150 text-sm
                      ${pathname === item.href ? "text-blue-600" : "text-[#1A3C5E]"}
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. TESTIMONIALS */}
          <div>
            <h3 className="text-lg font-semibold mb-4"></h3>
            <ul className="space-y-2">
              {educationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      hover:text-blue-600 transition duration-150 text-sm
                      ${pathname === item.href ? "text-blue-600" : "text-[#1A3C5E]"}
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. INDUSTRIES */}
          <div>
            <h3 className="text-lg font-semibold mb-4"></h3>
            <ul className="space-y-2">
              {dataSecurityLinks.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <Link
                    href={item.href}
                    className={`
                      hover:text-blue-600 transition duration-150 text-sm
                      ${pathname === item.href ? "text-blue-600" : "text-[#1A3C5E]"}
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row: Get In Touch + Company Details + Connect with Us */}
        <div className="mt-10 flex items-start justify-between">
          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                <FaPhone size={16} className="text-white" />
              </div>
              <p className="text-sm">+91 75989 81500</p>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                <FaEnvelope size={16} className="text-white" />
              </div>
              <p className="text-sm">sales@codework.ai</p>
            </div>
            <div className="flex items-left ">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                <FaMapMarkerAlt size={16} className="text-white" />
              </div>
              <p className="text-sm  pl-3">
                Level 3, Akshaya HQ, OMR, <br />
                Kazhipattur, Chennai, <br />
                Tamilnadu, 603103.
              </p>
            </div>
          </div>

          {/* New Company Details Section */}
          <div className="text-center">
            <h3 className="text-lg text-left font-semibold mb-4">US Location</h3>
            <div className="flex items-start justify-center space-x-4 mt-1">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center mt-1">
                <FaMapMarkerAlt size={16} className="text-white" />
              </div>
              <p className="text-sm text-left max-w-xs">
                Codeworkx LLC 6,<br />
                 RIVER OAKS CIR W,<br />
                BUFFALO GROVE, IL 60089, USA
              </p>
            </div>
          <div className="text-sm mt-3 flex items-center justify-start">
  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center mr-2">
    <BsGlobe2 size={16} className="text-white" />
  </div>
  Website:{" "}
  <a
    href="https://thecodeworx.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold text-blue-500 hover:text-gray-500"
  >
    codeworkx
  </a>
</div>

          </div>

          {/* Connect with Us */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <Link href="/contact-ai-solutions">
              <button className="bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-full py-2 px-6 flex items-center space-x-2">
                <span>Get In Touch</span>
                <FaArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300">
        <div className="w-full bg-black text-white flex flex-col sm:flex-row items-center justify-between py-8 px-4 sm:px-6 md:px-12 lg:px-12 xl:px-12">
          {/* Left: main company logo */}
          <div className="flex items-center mb-4 sm:mb-0">
            <Link href="/">
              <Image src="/Logo.svg" alt="Company Logo" width={170} height={120} />
            </Link>
          </div>

          {/* Middle: ISO logos */}
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <Image src="/iso/iso1.svg" alt="ISO Logo 1" width={40} height={40} className="rounded-full" />
            <Image src="/iso/iso2.svg" alt="ISO Logo 2" width={40} height={40} className="rounded-full" />
          </div>

          {/* Right: copyright + privacy */}
          <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 mb-4 sm:mb-0">
            <p className="text-xs">2024 PRO CODEWORK. ALL RIGHTS RESERVED.</p>
            <span className="hidden sm:inline">•</span>
            <Link href="/privacy-policy" className="text-xs hover:text-blue-400">
              PRIVACY POLICY
            </Link>
          </div>

          {/* Far right: social icons */}
          <div className="flex space-x-6 items-center">
            {socialMedia.map(({ label, Icon, link }) => (
              <a key={label} href={link} target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                  <Icon size={20} className="text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
