"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import MobileNavbar from "./mobileNav";

export default function Navbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(null); // Track which dropdown is open
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const backgroundOpacity =
    lastScrollY === 0 ? "bg-opacity-0" : "bg-opacity-100";

  useEffect(() => {
    setIsDropdownOpen(null); // Close dropdown on navigation
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const navLinks = [
    {
      href: "/ai-solutions",
      label: "AI Solutions",
      dropdown: [
        {
          href: "/ai-solutions",
          label: "Expertise",
          description: "Explore our expertise in AI.",
        },
        {
          href: "/ai-services",
          label: "Service",
          description:
            "Learn how our services transform business challenges into opportunities.",
        },
        {
          href: "/ai-training",
          label: "AI Training",
          description:
            "AI training is a process of teaching machines to learn from data.",
        },
      ],
    },
    {
      href: "/our-company-case-studies",
      label: "Resources",
      dropdown: [
        {
          href: "/our-company-case-studies",
          label: "Case Studies",
          description:
            "Explore how Codework transforms challenges into smart software solutions.",
        },
        {
          href: "/our-blog-lists",
          label: "Blogs",
          description:
            "Insights, trends, and tech tips from the AI-driven minds behind Codework.",
        },
        {
          href: "/testimonials",
          label: "Testimonial",
          description:
            "Hear what our clients say about building smarter, faster, and better with Codework.",
        },
      ],
    },
    {
      href: "/industries-you-must-know",
      label: "Industries",
      dropdown: [],
    },
    {
      href: "/about-us",
      label: "About Us",
      dropdown: [
        {
          href: "/event-updates",
          label: "Events & Updates",
          description:
            "Stay updated with our latest events and company news.",
        },
      ],
    },
    { href: "/careers-at-codework", label: "Careers", dropdown: [] },
    {
      href: "/build-your-career-with-codework",
      label: "Our Products",
      dropdown: [],
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full border-2 border-blue-900 border-l-0 border-r-0 border-t-0 z-50 transition-transform duration-300 px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 bg-[#0e007d] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } rounded-b-3xl`}
    >
      <div className="h-20 hidden md:flex items-center justify-between bg-opacity-100">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/Logo.svg"
              alt="Company Logo"
              width={200}
              height={200}
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex">
          <div className="relative flex items-center space-x-4 md:space-x-6 lg:space-x-10 2xl:space-x-14">
            {navLinks.map((item, index) => (
              <div
                key={`${item.href}-${index}`}
                onMouseEnter={() => setIsDropdownOpen(index)}
                onMouseLeave={() => setIsDropdownOpen(null)}
                className="relative"
              >
                <button
                  className={`relative text-white text-base font-regular ease-in-out duration-300 group hover:text-cyan-500 ${
                    pathname === item.href ? "text-cyan-400" : ""
                  }`}
                >
                  <Link href={item.href}>{item.label}</Link>
                  <span
                    className={`absolute bottom-[-6px] left-1/2 h-[2px] bg-cyan-500 transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                      pathname === item.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>
                {/* Dropdown */}
                {isDropdownOpen === index && item.dropdown.length > 0 && (
                  <div
                    className={`absolute bg-white rounded-lg text-black p-4 shadow-xl z-40 min-w-[300px] border border-gray-100 transform ${
                      item.label === "Resources"
                        ? "left-[10%] -translate-x-[10%]"
                        : "left-0"
                    } transition-all duration-200`}
                  >
                    {item.dropdown.map((dropdownItem, idx) => (
                      <Link
                        key={`${dropdownItem.href}-${idx}`}
                        href={dropdownItem.href}
                      >
                        <div className="mb-2 px-4 py-3 group hover:bg-cyan-50 hover:scale-105 transition-all duration-200 rounded-md">
                          <h2 className="relative text-base font-medium text-gray-800 group-hover:text-cyan-600 transition-colors duration-200">
                            {dropdownItem.label}
                            <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-300 ease-in-out transform -translate-x-1/2"></span>
                          </h2>
                          <p className="text-sm text-gray-500 mt-1">
                            {dropdownItem.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* "Get In Touch" Button */}
            <Link href="/contact-ai-solutions">
              <button
                type="button"
                className="relative inline-flex items-center justify-center p-[2px] rounded-full cursor-pointer"
                style={{
                  background: "linear-gradient(to bottom, #5EC2FF, #204ECF)",
                }}
              >
                <div className="bg-white rounded-full px-6 py-2">
                  <span className="bg-gradient-to-b from-[#5EC2FF] to-[#204ECF] bg-clip-text text-transparent font-semibold text-base">
                    Get In Touch
                  </span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex md:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
}
