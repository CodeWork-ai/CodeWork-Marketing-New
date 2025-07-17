"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MobileNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  useEffect(() => {
    // Close the menu and any open dropdown when the route changes
    setIsMenuOpen(false);
    setIsDropdownOpen(null);
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
      ],
    },
    {
      href: "/our-company-case-studies",
      label: "Resources",
      dropdown: [
        {
          href: "/our-company-case-studies",
          label: "Case Studies",
          description: "Discover the industries and organizations we serve.",
        },
        {
          href: "/our-blog-lists",
          label: "Blogs",
          description:
            "Explore detailed insights from our successful projects.",
        },
        {
          href: "/testimonials",
          label: "Testimonial",
          description: "Discover the industries and organizations we serve.",
        },
      ],
    },
    {
      href: "/industries-you-must-know",
      label: "Industries",
      dropdown: [],
    },
    { href: "/about-us", label: "About Us", dropdown: [] },
    { href: "/careers-at-codework", label: "Career", dropdown: [] },
    {
      href: "/build-your-career-with-codework",
      label: "Our Product",
      dropdown: [],
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white text-black px-4 py-2">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/Logo.svg" alt="Company Logo" width={150} height={150} />
        </Link>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl focus:outline-none md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mt-4 space-y-4">
          {navLinks.map((item, index) => (
            <div key={item.href}>
              <button
                className="w-full text-left text-lg font-medium hover:text-[#03ffff]"
                onClick={() => {
                  if (item.dropdown.length > 0) {
                    // Toggle dropdown
                    setIsDropdownOpen(
                      isDropdownOpen === index ? null : index
                    );
                  } else {
                    // No dropdown: navigate directly
                    router.push(item.href);
                  }
                }}
              >
                {item.label}
              </button>

              {/* Dropdown Items */}
              {isDropdownOpen === index && item.dropdown.length > 0 && (
                <div className="mt-2 ml-4 space-y-2">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.href}
                      href={dropdownItem.href}
                      className="block text-sm hover:text-[#03eaff]"
                    >
                      <h2 className="font-semibold">
                        {dropdownItem.label}
                      </h2>
                      {/* <p className="text-gray-200 text-sm">
                        {dropdownItem.description}
                      </p> */}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/contact-ai-solutions">
            <button className="w-full px-4 py-2 mt-4 text-center bg-[#03f7ff] rounded-md hover:bg-[#03f7ff]">
              Get In Touch
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
