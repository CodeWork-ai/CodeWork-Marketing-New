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
            href: "/expertise",
            label: "AI Solutions",
            dropdown: [
                { href: "/expertise", label: "Expertise", description: "Explore our expertise in AI." },
                { href: "/service", label: "Service", description: "Learn how our services transform business challenges into opportunities." },
            ],
        },
        {
            href: "/clients",
            label: "Clients",
            dropdown: [
                {
                    href: "/clients",
                    label: "Clients",
                    description: "Discover the industries and organizations we serve.",
                },
                {
                    href: "/case-study",
                    label: "Case Studies",
                    description: "Explore detailed insights from our successful projects.",
                },
            ],
        },
        { href: "/ai-community", label: "AI Community", dropdown: [] },
        {
            href: "/company", label: "Company",
            dropdown: [
                {
                    href: "/about-us",
                    label: "About Us",
                    description: "Learn about our mission, vision, and journey in AI innovation.",
                },
                {
                    href: "/careers",
                    label: "Careers",
                    description: "Join our team and shape the future of AI with us.",
                },
                {
                    href: "/getInTouch",
                    label: "Contact Us",
                    description: "Reach out to us for inquiries, collaborations, or support.",
                },
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
                                className="w-full text-left text-lg font-medium hover:text-[#fd6262]"
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
                                            className="block text-sm hover:text-[#fd6262]"
                                        >
                                            <h2 className="font-semibold">{dropdownItem.label}</h2>
                                            <p className="text-gray-300 text-sm">{dropdownItem.description}</p>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link href="/getInTouch">
                        <button className="w-full px-4 py-2 mt-4 text-center bg-[#fd6262] rounded-md hover:bg-[#e55555]">
                            Get In Touch
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}
