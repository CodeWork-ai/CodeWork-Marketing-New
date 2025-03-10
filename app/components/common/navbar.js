'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ShinyButton from "@/components/ui/shiny-button";
import MobileNavbar from "./mobileNav";

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

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
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

    const navLinks = [
        {
            href: "/empowering-innovation-ai-advanced-technologies",
            label: "AI Solutions",
            dropdown: [
                { href: "/empowering-innovation-ai-advanced-technologies", label: "Expertise", description: "Explore our expertise in AI." },
                { href: "/driving-innovation-cutting-edge-ai-services", label: "Service", description: "Learn how our services transform business challenges into opportunities." },
            ],
        },
        {
            href: "/ai-in-healthcare-you-must-know",
            label: "Industries",
            dropdown: [
                {
                    href: "/ai-in-healthcare-you-must-know",
                    label: "HealthCare",
                    description: "Discover the industries and organizations we serve.",
                },
                {
                    href: "/unique-ai-in-education",
                    label: "Education",
                    description: "Discover the industries and organizations we serve.",
                },
                {
                    href: "/ai-in-ecommerce",
                    label: "E-commerce",
                    description: "Discover the industries and organizations we serve.",
                },
                {
                    href: "/new-ai-in-finance",
                    label: "Finance",
                    description: "Discover the industries and organizations we serve.",
                },
                {
                    href: "/ai-in-cybersecurity",
                    label: "Data Security",
                    description: "Discover the industries and organizations we serve.",
                },
            ],
        },
        {
            href: "/ai-powered-technology", label: "Company",
            dropdown: [
                {
                    href: "/ai-powered-technology",
                    label: "About Us",
                    description: "Learn about our mission, vision, and journey in AI innovation.",
                },
                {
                    href: "/team",
                    label: "Our Team",
                    description: "Meet the experts driving our success in AI solutions.",
                },
                {
                    href: "/careers-at-codework",
                    label: "Careers",
                    description: "Join our team and shape the future of AI with us.",
                },
                {
                    href: "/contact-ai-solutions",
                    label: "Contact Us",
                    description: "Reach out to us for inquiries, collaborations, or support.",
                },
                {
                    href: "/blog-lists",
                    label: "Our Blogs",
                    description: "Reach out to us for inquiries, collaborations, or support.",
                },
                {
                    href: "/clients-custom-ai-solutions",
                    label: "Our Clients",
                    description: "Discover the industries and organizations we serve.",
                },
                {
                    href: "/ai-business-solutions",
                    label: "Case Studies",
                    description: "Explore detailed insights from our successful projects.",
                },
            ],
        },
        { href: "/build-your-career-with-codework", label: "AI Community", dropdown: [] },
    ];

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 bg-[#07070e] ${backgroundOpacity} ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >

            <div className="h-20 hidden md:flex items-center justify-between bg-opacity-100">
                <Link href="/">
                    <div className="flex items-center">
                        <Image
                            src="/cw-logo.svg"
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
                                key={item.href}
                                className=""
                                onMouseEnter={() => setIsDropdownOpen(index)}
                                onMouseLeave={() => setIsDropdownOpen(null)}
                            >
                                <button
                                    className={`hover:text-[#FF035B] ease-in-out duration-150 text-sm lg:text-base 2xl:text-lg ${pathname === item.href ? "text-[#FF035B]" : "text-gray-50"
                                        }`}
                                >
                                    <Link href={item.href}>{item.label}</Link>
                                </button>
                                {/* Dropdown */}
                                {isDropdownOpen === index && item.dropdown.length > 0 && (
                                    <div className="absolute bg-black bg-opacity-80 rounded-md text-white p-1 shadow-lg z-40">
                                        {item.dropdown.map((dropdownItem) => (
                                            <Link key={dropdownItem.href} href={dropdownItem.href}>
                                                <div className="mb-1 rounded-md px-4 py-2 hover:text-red-400">
                                                    <h2 className="text-lg font-thin">{dropdownItem.label}</h2>
                                                    {/* <p className="text-lg">{dropdownItem.description}</p> */}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link href="/contact-ai-solutions">
                            <ShinyButton className="border border-white">
                                Get In Touch
                            </ShinyButton>
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
