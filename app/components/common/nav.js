'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import MobileNavbar from "./mobileNav";
// import MobileNavbar from "./mobileNav";

export default function Navbar() {
    const pathname = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(null); // Track which dropdown is open
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // Update visibility for sliding effect
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Determine background opacity based on scroll position
    const backgroundOpacity = lastScrollY === 0 ? "bg-opacity-0" : "bg-opacity-100";

    useEffect(() => {
        setIsDropdownOpen(null); // Close dropdown on navigation
    }, [pathname]);

    useEffect(() => {
        if (pathname === "/") {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    // Nav links data
    const navLinks = [
        {
            href: "/ai-solutions",
            label: "AI Solutions",
            dropdown: [
                { href: "/ai-solutions", label: "Expertise", description: "Explore our expertise in AI." },
                { href: "/ai-services", label: "Service", description: "Learn how our services transform business challenges into opportunities." },
            ],
        },
        { href: "/our-company-case-studies", label: "Resources", dropdown: [
               
            {
                href: "/our-company-case-studies",
                label: "Case Studies",
                description: "Discover the industries and organizations we serve.",
            },
            {
                href: "/blog-lists",
                label: "Blogs",
                description: "Discover the industries and organizations we serve.",
            },
            {
                href: "/testimonials",
                label: "Testimonial",
                description: "Discover the industries and organizations we serve.",
            },

        ] },
        {
            href: "/industries-you-must-know",
            label: "Industries",
            dropdown: [
            ]
        },
        { href: "/about-us", label: "About Us", dropdown: [] },
        { href: "/careers-at-codework", label: "Career ", dropdown: [] },
        { href: "/build-your-career-with-codework", label: "AI Community", dropdown: [] },
    ];

    return (
        <div
            className={`fixed top-0 left-0 w-full border-2 border-blue-300 border-l-0 border-r-0 border-t-0 z-50 transition-transform duration-300 px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 bg-[#ffffff] ${backgroundOpacity} ${isVisible ? "translate-y-0" : "-translate-y-full"} rounded-b-3xl`}
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
                            >
                                <button
                                    className={`relative text-black text-base font-regular ease-in-out duration-300 group hover:text-cyan-400 ${pathname === item.href ? "text-cyan-400" : ""}`}
                                >
                                    <Link href={item.href}>{item.label}</Link>
                                    <span
                                        className={`absolute bottom-[-6px] left-1/2 h-[2px] bg-cyan-400 transition-all duration-300 ease-in-out transform -translate-x-1/2 ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"}`}
                                    ></span>
                                </button>
                                {/* Dropdown */}
                                {isDropdownOpen === index && item.dropdown.length > 0 && (
                                    <div className="absolute bg-white bg-opacity-80 rounded-md text-black p-1 shadow-lg z-40">
                                        {item.dropdown.map((dropdownItem, idx) => (
                                            <Link key={`${dropdownItem.href}-${idx}`} href={dropdownItem.href}>
                                                <div className="mb-1 rounded-md px-4 py-2 group hover:text-cyan-400">
                                                    <h2 className="relative text-base font-regular text-center transition-colors duration-300 ease-in-out">
                                                        {dropdownItem.label}
                                                        <span className="absolute bottom-[-6px] left-1/2 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300 ease-in-out transform -translate-x-1/2"></span>
                                                    </h2>
                                                    {/* <p className="text-lg">{dropdownItem.description}</p> */}
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
                                style={{ background: "linear-gradient(to bottom, #5EC2FF, #204ECF)" }}
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
                <MobileNavbar/>
            </div>
        </div>
    );
}
