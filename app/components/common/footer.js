"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaArrowRight,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
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
    { href: "/ai-services", label: "Services" },
    { href: "/our-blog-lists", label: "Blogs" },
  ];

  const educationLinks = [
    { href: "/testimonials", label: "Testimonials" },
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
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 sm:py-8">
        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <Link
                    href={item.href}
                    className={`hover:text-blue-600 transition duration-150 text-xs sm:text-sm ${
                      pathname === item.href
                        ? "text-blue-600"
                        : "text-[#1A3C5E]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <ul className="space-y-2 sm:pt-0 lg:pt-9 xl:pt-9">
              {contactLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`hover:text-blue-600 transition duration-150 text-xs sm:text-sm ${
                      pathname === item.href
                        ? "text-blue-600"
                        : "text-[#1A3C5E]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <ul className="space-y-2 sm:pt-0 lg:pt-9 xl:pt-9">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`hover:text-blue-600 transition duration-150 text-xs sm:text-sm ${
                      pathname === item.href
                        ? "text-blue-600"
                        : "text-[#1A3C5E]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonials & Expertise */}
          <div>
            <ul className="space-y-2 sm:pt-0 lg:pt-9 xl:pt-9">
              {educationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`hover:text-blue-600 transition duration-150 text-xs sm:text-sm ${
                      pathname === item.href
                        ? "text-blue-600"
                        : "text-[#1A3C5E]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries & Case Studies */}
          <div>
            <ul className="space-y-2 sm:pt-0 lg:pt-9 xl:pt-9">
              {dataSecurityLinks.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <Link
                    href={item.href}
                    className={`hover:text-blue-600 transition duration-150 text-xs sm:text-sm ${
                      pathname === item.href
                        ? "text-blue-600"
                        : "text-[#1A3C5E]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row — Updated for mobile alignment */}
        <div className="mt-6 sm:mt-8 flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-16 w-full text-left">
          {/* Get In Touch */}
          <div>
            <h3 className="text-base lg:pt-9 sm:pt-0 xl:pt-9  sm:text-lg font-semibold mb-3 sm:mb-4">
              Get In Touch
            </h3>
            <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                <FaPhone size={14} className="text-white sm:text-base" />
              </div>
              <p className="text-xs sm:text-sm">+91 75989 81500</p>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                <FaEnvelope size={14} className="text-white sm:text-base" />
              </div>
              <p className="text-xs sm:text-sm">sales@codework.ai</p>
            </div>
          </div>

          {/* India */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              India
            </h3>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                <FaMapMarkerAlt size={16} className="text-white" />
              </div>
              <p className="text-xs sm:text-sm">
                Level 3, Akshaya HQ, OMR, <br />
                Kazhipattur, Chennai, <br />
                Tamilnadu, 603103.
              </p>
            </div>
          </div>

          {/* USA */}
          <div>
            <h3 className="text-base  lg:pt-6 sm:pt-0 xl:pt-6 sm:text-lg font-semibold mb-3 sm:mb-4">
              USA
            </h3>
            <div className="flex items-start space-x-4 ">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                <FaMapMarkerAlt size={16} className="text-white" />
              </div>
              <p className="text-xs sm:text-sm">
                 6, River Oaks Cir W,
                <br />
                Buffalo Grove, IL 60089, USA
              </p>
            </div>
            <div className="text-sm flex items-center justify-start">
              <a
                href="https://thecodeworx.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-500 hover:text-gray-500 ml-12 "
              >
                codeworkx
              </a>
            </div>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Connect With Us
            </h3>
            <Link href="/contact-ai-solutions">
              <button className="bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-full py-1.5 sm:py-2 px-4 sm:px-6 flex items-center space-x-2 text-xs sm:text-base">
                <span>Get In Touch</span>
                <FaArrowRight size={14} className="sm:text-base" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300">
        <div className="w-full bg-black text-white flex flex-col items-center sm:flex-row sm:items-center sm:justify-between py-6 sm:py-6 px-4 sm:px-6 md:px-6 lg:px-6 xl:px-6">
          {/* Logo */}
          <div className="flex items-center mb-4 sm:mb-0">
            <Link href="/">
              <Image
                src="/Logo.svg"
                alt="Company Logo"
                width={180}
                height={180}
              />
            </Link>
          </div>

          {/* ISO Logos */}
          <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-0">
            <Image
              src="/iso/iso1.svg"
              alt="ISO Logo 1"
              width={32}
              height={32}
              className="rounded-full sm:w-10 sm:h-10"
            />
            <Image
              src="/iso/iso2.svg"
              alt="ISO Logo 2"
              width={32}
              height={32}
              className="rounded-full sm:w-10 sm:h-10"
            />
          </div>

          {/* Copyright + Privacy */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0">
            <p className="text-[10px] sm:text-xs">
              2024 PRO CODE WORK IT SOLUTIONS Pvt. Ltd. All rights reserved.
            </p>
            <span className="hidden sm:inline">•</span>
            <Link
              href="/privacy-policy"
              className="text-[10px] sm:text-xs hover:text-blue-400"
            >
              PRIVACY POLICY
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 sm:space-x-6 items-center">
            {socialMedia.map(({ label, Icon, link }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                  <Icon size={16} className="text-white sm:text-xl" />
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
