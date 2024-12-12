'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import ShinyButton from "@/components/ui/shiny-button";

export default function Navbar() {
    const pathname = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        setIsDropdownOpen(false);
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

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 bg-opacity-40 bg-black transition-transform duration-300 px-4 sm:px-4 md:px-10 lg:px-14 xl:px-20 ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="h-20 flex items-center justify-between bg-opacity-30">
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
                    <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-10 2xl:space-x-14">
                        {[
                            { href: "/aiSolution", label: "AI Solutions" },
                            // { href: "/solution", label: "Expertise" },
                            { href: "/vision", label: "Vision" },
                            { href: "/projects", label: "Projects" },
                            // { href: "/blog", label: "Blog" },
                            { href: "/group", label: "Groups" },
                        ].map((item) => (
                            <button
                                key={item.href}
                                className={`hover:text-[#fd6262] ease-in-out duration-150 text-sm lg:text-base 2xl:text-lg ${pathname === item.href
                                        ? "text-[#fd6262]"
                                        : "text-gray-50"
                                    }`}
                            >
                                <Link href={item.href}>{item.label}</Link>
                            </button>
                        ))}
                        <Link href="/getInTouch">
                            <ShinyButton className="border border-white">
                                Get In Touch
                            </ShinyButton>
                        </Link>
                    </div>
                </div>
                <div className="xs:flex md:hidden">
                    <div className="w-full">
                        <div className="relative inline-block text-left">
                            <div className="flex items-center justify-center">
                                <button
                                    onClick={() =>
                                        setIsDropdownOpen(!isDropdownOpen)
                                    }
                                    type="button"
                                    className=""
                                    id="menu-button"
                                    aria-expanded="true"
                                    aria-haspopup="true"
                                >
                                    <FiMenu className="w-7 h-7 text-white hover:text-[#fd6262]" />
                                </button>
                            </div>
                            {isDropdownOpen && (
                                <div
                                    className="fixed right-14 sm:right-10 w z-10 mt-2 w-32 origin-top-right rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                    tabIndex="-1"
                                >
                                    <div className="z-2" role="none">
                                        <a
                                            href="/aiSolution"
                                            className="block px-6 py-2 text-sm text-gray-700 hover:bg-black hover:text-[#fd6262]"
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="menu-item-1"
                                        >
                                            AI Solutions
                                        </a>
                                        {/* <a
                                            href="/solution"
                                            className="block px-6 py-2 text-sm text-gray-700 hover:bg-black hover:text-[#fd6262]"
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="menu-item-1"
                                        >
                                            Expertise
                                        </a> */}
                                        <a
                                            href="/vision"
                                            className="block px-6 py-2 text-sm text-gray-700 hover:bg-black hover:text-[#fd6262]"
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="menu-item-2"
                                        >
                                            Vision
                                        </a>
                                        <a
                                            href="/projects"
                                            className="block px-6 py-2 text-sm text-gray-700 hover:bg-black hover:text-[#fd6262]"
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="menu-item-3"
                                        >
                                            Projects
                                        </a>
                                        {/* <a
                                            href="/blog"
                                            className="block px-6 py-2 text-sm text-gray-700 hover:bg-black hover:text-[#fd6262]"
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="menu-item-4"
                                        >
                                            Blog
                                        </a> */}
                                        <a
                                            href="/group"
                                            className="block px-6 py-2 text-sm text-gray-700 hover:bg-black hover:text-[#fd6262]"
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="menu-item-4"
                                        >
                                            Groups
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
