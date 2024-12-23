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
                // {
                //     href: "/team",
                //     label: "Team",
                //     description: "Meet the experts driving our success in AI solutions.",
                // },
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
        <div
            className={`fixed top-0 left-0 w-full z-50 bg-opacity-0 bg-black transition-transform duration-300 px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 ${isVisible ? "translate-y-0" : "-translate-y-full"
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
                                    className={`hover:text-[#fd6262] ease-in-out duration-150 text-sm lg:text-base 2xl:text-lg ${pathname === item.href ? "text-[#fd6262]" : "text-gray-50"
                                        }`}
                                >
                                    <Link href={item.href}>{item.label}</Link>
                                </button>
                                {/* Dropdown */}
                                {isDropdownOpen === index && item.dropdown.length > 0 && (
                                    <div className="absolute left-0 right-0 w-full bg-black rounded-md bg-opacity-80 text-white p-4 shadow-lg z-40">
                                        {item.dropdown.map((dropdownItem) => (
                                            <Link key={dropdownItem.href} href={dropdownItem.href}>
                                                <div className="mb-4 rounded-md px-2 py-2 hover:bg-gradient-to-r hover:from-[#ff3333] hover:to-[#070707]">
                                                    <h2 className="text-xl font-semibold">{dropdownItem.label}</h2>
                                                    <p className="text-lg">{dropdownItem.description}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link href="/getInTouch">
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
