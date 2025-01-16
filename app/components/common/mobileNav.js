'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MobileNavbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(null);

    useEffect(() => {
        setIsMenuOpen(false); // Close the menu on navigation
        setIsDropdownOpen(null); // Close dropdowns on navigation
    }, [pathname]);

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
            href: "/clients-custom-ai-solutions",
            label: "Clients",
            dropdown: [
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
        {
            href: "/industries/ai-in-healthcare-you-must-know",
            label: "Industries",
            dropdown: [
                {
                    href: "/industries/ai-in-healthcare-you-must-know",
                    label: "HealthCare",
                    description: "Discover the industries and organizations we serve.",
                },
                {
                    href: "unique-ai-in-education",
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
            ],
        },
        {
            href: "/build-your-career-with-codework", label: "AI Community", dropdown: [
                {
                    href: "/build-your-career-with-codework",
                    label: "AI Community",
                    description: "Join our AI community to chat AI !",
                }
            ],
        },
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-black text-white px-4 py-2">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <Image src="/cw-logo.svg" alt="Company Logo" width={150} height={150} />
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
                                className="w-full text-left text-lg font-medium hover:text-[#FF035B]"
                                onClick={() =>
                                    setIsDropdownOpen(isDropdownOpen === index ? null : index)
                                }
                            >
                                {item.label}
                            </button>
                            {/* Dropdown */}
                            {isDropdownOpen === index && item.dropdown.length > 0 && (
                                <div className="mt-2 ml-4 space-y-2">
                                    {item.dropdown.map((dropdownItem) => (
                                        <Link
                                            key={dropdownItem.href}
                                            href={dropdownItem.href}
                                            className="block text-sm hover:text-[#FF035B]"
                                        >
                                            <h2 className="font-semibold">{dropdownItem.label}</h2>
                                            {/* <p className="text-gray-200 text-sm">{dropdownItem.description}</p> */}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link href="/contact-ai-solutions">
                        <button className="w-full px-4 py-2 mt-4 text-center bg-[#FF035B] rounded-md hover:bg-[#e55555]">
                            Get In Touch
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}
