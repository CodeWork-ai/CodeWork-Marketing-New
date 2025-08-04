"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import MobileNavbar from "./mobileNav";
import { IoChevronDown } from "react-icons/io5";

export default function Navbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownTimeoutRef = useRef(null);

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

  const backgroundOpacity = lastScrollY === 0 ? "bg-opacity-0" : "bg-opacity-100";

  useEffect(() => {
    setIsDropdownOpen(null);
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // Debounced dropdown handlers
  const handleMouseEnter = (index) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(index);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(null);
    }, 300);
  };

  const navLinks = [
    {
      href: "",
      label: "AI Solutions",
      dropdown: [
        {
          href: "/ai-solutions",
          label: "Expertise",
        },
        {
          href: "/ai-services",
          label: "Services",
        },
        {
          href: "/ai-training",
          label: "AI Training",
        },
        
      ],
      dropdownImage: "/navmenu1.jpg"
    },
    {
      href: "",
      label: "Resources",
      dropdown: [
        {
          href: "/our-company-case-studies",
          label: "Case Studies",
        },
        {
          href: "/our-blog-lists",
          label: "Blogs",
        },
        {
          href: "/testimonials",
          label: "Testimonials",
        },
        {
          href: "/industries-you-must-know",
          label: "Industries",
        },
      ],
      dropdownImage: "/navmenu2.jpg"
    },
    { href: "", label: "About Us", dropdown: [
      
      {
          href: "/about-us",
          label: "Our Team ",
        },
      {
          href: "/industries-you-must-know",
          label: "Events ",
        },
        {
          href: "/industries-you-must-know",
          label: "Updates",
        },
    ] },
    { href: "/careers-at-codework", label: "Careers", dropdown: [] },
    {
      href: "/build-your-career-with-codework",
      label: "Our Products",
      dropdown: [],
    },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 px-2 sm:px-4 md:px-6 lg:px-10 xl:px-14 2xl:px-20 bg-primary ${backgroundOpacity} ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Desktop Navigation */}
        <div className="h-16 sm:h-18 md:h-20 hidden md:flex items-center justify-between bg-opacity-100">
          <Link href="/">
            <div className="flex items-center flex-shrink-0">
              <Image
                src="/Logo.svg"
                alt="Company Logo"
                width={160}
                height={160}
                className="w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 h-auto"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="relative flex items-center space-x-2 md:space-x-3 lg:space-x-6 xl:space-x-8 2xl:space-x-10">
              {navLinks.map((item, index) => (
                <div
                  key={`${item.href}-${index}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className="relative"
                >
                  <button
                    className={`relative text-white text-xs sm:text-sm lg:text-sm font-sans ease-in-out duration-300 group hover:text-secondary flex items-center gap-1 whitespace-nowrap px-1 py-2 ${
                      pathname === item.href ? "text-secondary" : ""
                    }`}
                  >
                    <Link href={item.href} className="block">
                      {item.label}
                    </Link>
                    
                    {/* React Icons Dropdown Arrow */}
                    {item.dropdown.length > 0 && (
                      <IoChevronDown 
                        className={`text-xs sm:text-sm transition-transform duration-300 flex-shrink-0 ${
                          isDropdownOpen === index ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    )}
                    
                    <span
                      className={`absolute bottom-0 left-1/2 h-[2px] bg-secondary transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                        pathname === item.href
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Get In Touch Button */}
          <div className="flex-shrink-0 ml-2 lg:ml-4">
            <Link href="/contact-ai-solutions">
              <style jsx>{`
                .button-wrapper::before {
                  animation: spin-gradient 4s linear infinite;
                }
                @keyframes spin-gradient {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              `}</style>
              
              <div className="relative inline-block p-0.5 rounded-full overflow-hidden hover:scale-105 transition duration-300 active:scale-100 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,_#1ddfea,_#1ddfea30,_#1ddfea)] button-wrapper">
                <button 
                  type="button"
                  className="relative z-10 bg-primary text-white rounded-full px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 font-semibold text-xs sm:text-sm lg:text-base whitespace-nowrap"
                >
                  Get In Touch
                </button>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden h-16">
          <MobileNavbar />
        </div>
      </div>

      {/* Responsive Dropdown with Smooth Drawer Animation */}
      <div 
        className={`fixed top-16 sm:top-18 md:top-20 left-0 w-full bg-primary shadow-2xl z-40 overflow-hidden transition-all duration-500 ease-out ${
          isDropdownOpen !== null && navLinks[isDropdownOpen]?.dropdown.length > 0
            ? 'h-[40vh] sm:h-[45vh] md:h-[50vh] opacity-100 visible' 
            : 'h-0 opacity-0 invisible'
        }`}
        onMouseEnter={() => {
          if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
          }
        }}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isDropdownOpen !== null && navLinks[isDropdownOpen]?.dropdown.length > 0
            ? 'translateY(0)' 
            : 'translateY(-20px)',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {isDropdownOpen !== null && navLinks[isDropdownOpen]?.dropdown.length > 0 && (
          <div className="h-full flex items-center py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center h-full">
                
                {/* Left Side - Responsive Image */}
                <div className="relative flex items-center justify-center md:justify-start h-full order-2 md:order-1 lg:col-span-1">
                  <div className="relative overflow-hidden rounded-xl shadow-xl group w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px]">
                    <Image
                      src={navLinks[isDropdownOpen].dropdownImage || "/landingpages/default.jpg"}
                      alt={`${navLinks[isDropdownOpen].label} visual`}
                      width={250}
                      height={180}
                      className="w-full h-28 sm:h-32 md:h-36 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
                    
                    {/* Floating Badge */}
                   
                  </div>
                </div>

                {/* Right Side - Responsive Menu */}
                <div className="flex flex-col justify-center h-full order-1 md:order-2 md:col-span-1 lg:col-span-2 text-center md:text-left">
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {navLinks[isDropdownOpen].label}
                    </h3>
                    <div className="w-10 sm:w-12 h-0.5 bg-secondary rounded-full mx-auto md:mx-0"></div>
                  </div>

                  {/* Responsive Menu List - Updated Text Colors */}
                  <div className="grid gap-1 sm:gap-2 w-full max-w-sm sm:max-w-md mx-auto md:mx-0">
                    {navLinks[isDropdownOpen].dropdown.map((dropdownItem, idx) => (
                      <Link
                        key={`${dropdownItem.href}-${idx}`}
                        href={dropdownItem.href}
                        className="group"
                      >
                        <div className="px-3 sm:px-4 py-1.5 sm:py-2 group hover:bg-secondary/10 hover:scale-105 transition-all duration-200 rounded-md">
                          <h2 className="relative text-sm sm:text-base font-sans text-white group-hover:text-secondary transition-colors duration-200">
                            {dropdownItem.label}
                            <span className="absolute bottom-[-2px] left-1/2 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-300 ease-in-out transform -translate-x-1/2"></span>
                          </h2>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
