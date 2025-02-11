'use client'
import React, { useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import ShinyButton from "@/components/ui/shiny-button";
import NewsletterForm from "./newsLetter";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const socialMedia = [
        { label: "Twitter", Icon: FaXTwitter, link: "https://www.x.com/CodeworkAi" },
        { label: "LinkedIn", Icon: FaLinkedin, link: "https://www.linkedin.com/company/codeworkai/" },
        { label: "Facebook", Icon: FaFacebook, link: "https://www.facebook.com/share/vZSfbuXSPqAQpz1T/" },
        { label: "Instagram", Icon: FaInstagram, link: "https://www.instagram.com/codework.ai?igsh=dng2NXU0cnppNGRq" },
    ];

    const routeLink = [
        { href: "/empowering-innovation-ai-advanced-technologies", label: "Expertise" },
        // { href: "/solution", label: "Expertise" },
        { href: "/driving-innovation-cutting-edge-ai-services", label: "Services" },
        { href: "/clients-custom-ai-solutions", label: "Our Clients" },
        // { href: "/blog", label: "Blog" },
        { href: "/ai-business-solutions", label: "Case Studies" },
        { href: "/ai-powered-technology", label: "About Us" },
        { href: "/team", label: "Our Team" },
        { href: "/careers-at-codework", label: "Careers" },
        { href: "/contact-ai-solutions", label: "Contact Us" },
        { href: "/build-your-career-with-codework", label: "AI Community" },
        { href: "/ai-in-healthcare-you-must-know", label: "Healthcare" },
        { href: "/unique-ai-in-education", label: "Education" },
        { href: "/ai-in-ecommerce", label: "E-commerce" },
        { href: "/new-ai-in-finance", label: "Finance" },
        { href: "/ai-in-cybersecurity", label: "Data Security" },
    ]
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === "/") {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return (
        <footer className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-8 bg-black bg-opacity-70 text-white">
            <div className="hidden lg:flex w-full gap-x-4">
                {/* Logo and Contact Info */}
                <div className="w-2/12">
                    <Link href="/">
                        <div className="flex items-center mb-5">
                            <Image
                                src="/cw-logo.svg"
                                alt="Company Logo"
                                width={150}
                                height={150}
                                className="mx-auto md:mx-0"
                            />
                        </div>
                    </Link>
                    <div className="space-y-2 text-center md:text-left">
                        <p className="text-gray-200">+91 75989 81500</p>
                        {/* <p className="text-gray-200">+91 75989 81500</p> */}
                        <p className="text-gray-200">sales@codework.ai</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex w-5/12">
                    <div className="w-full">
                    <h3 className="text-lg font-semibold mb-4 text-start text-gray-200">Quick Links</h3>
                    <div className="w-full flex">
                        <div className="w-1/3">
                            <ul className="space-y-3">
                                {routeLink.slice(0, 4).map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={`hover:text-[#FF035B] transition duration-150 text-sm md:text-base ${pathname === item.href ? "text-[#FF035B]" : "text-gray-200"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-1/3">
                            <ul className="space-y-3">
                                {routeLink.slice(9, 14).map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={`hover:text-[#FF035B] transition duration-150 text-sm md:text-base ${pathname === item.href ? "text-[#FF035B]" : "text-gray-200"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-1/3">
                            <ul className="space-y-3">
                                {routeLink.slice(4, 9).map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={`hover:text-[#FF035B] transition duration-150 text-sm md:text-base ${pathname === item.href ? "text-[#FF035B]" : "text-gray-200"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Get in Touch */}
                <div className="w-3/12"><NewsletterForm /></div>

                {/* Additional Section */}
                <div className="w-2/12 flex justify-end space-y-5">
                <div className="w-full">
                    <div className="w-full">
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Follow Us</h3>
                        <div className="flex space-x-4">
                            <ul className="flex space-x-2 h-14">
                                {socialMedia.map(({ label, Icon, link }) => (
                                    <a key={label} alt={label} href={link} target="_blank" rel="noopener noreferrer">
                                        <li className="flex items-center justify-center text-gray-200 w-10 h-10 rounded-full shadow-lg hover:text-white transition">
                                            <Icon size={20} />
                                        </li>
                                    </a>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full">
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Connect with Us</h3>
                        <Link href="/contact-ai-solutions">
                            <ShinyButton className="w-full md:w-[170px] border border-white py-2">
                                Get In Touch
                            </ShinyButton>
                        </Link>
                    </div>
                    </div>
                </div>

            </div>
            <div className="lg:hidden grid grid-cols-1 md:grid-cols-4 gap-x-8 space-y-5">
                {/* Logo and Contact Info */}
                <div className="mb-3">
                    <Link href="/">
                        <div className="flex items-center mb-5">
                            <Image
                                src="/cw-logo.svg"
                                alt="Company Logo"
                                width={150}
                                height={150}
                                className="mx-auto md:mx-0"
                            />
                        </div>
                    </Link>
                    <div className="space-y-2 text-center md:text-left">
                        <p className="text-gray-200">+91 75989 81500</p>
                        <p className="text-gray-200">+91 95661 76914</p>
                        {/* <p className="text-gray-200">+91 75989 81500</p> */}
                        <p className="text-gray-200">sales@codework.ai</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="mb-3 lg:mb-0">
                    <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
                    <ul className="space-y-1">
                        {[  
                            { href: "/empowering-innovation-ai-advanced-technologies", label: "Expertise" },
                            // { href: "/solution", label: "Expertise" },
                            { href: "/driving-innovation-cutting-edge-ai-services", label: "Services" },
                            { href: "/clients-custom-ai-solutions", label: "Our Clients" },
                            // { href: "/blog", label: "Blog" },
                            { href: "/ai-business-solutions", label: "Case Studies" },
                            { href: "/ai-powered-technology", label: "About Us" },
                            { href: "/team", label: "Our Team" },
                            { href: "/careers-at-codework", label: "Careers" },
                            { href: "/contact-ai-solutions", label: "Contact Us" },
                            { href: "/build-your-career-with-codework", label: "AI Community" },
                            { href: "/ai-in-healthcare-you-must-know", label: "Healthcare" },
                            { href: "/unique-ai-in-education", label: "Education" },
                            { href: "/ai-in-ecommerce", label: "E-commerce" },
                            { href: "/new-ai-in-finance", label: "Finance" },
                            { href: "/ai-in-cybersecurity", label: "Data Security" },
                        ].map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`hover:text-[#FF035B] transition duration-150 text-sm md:text-base ${pathname === item.href ? "text-[#FF035B]" : "text-gray-200"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Get in Touch */}
                <div className="mb-3 lg:mb-0"><NewsletterForm /></div>

                {/* Additional Section */}
                <div className="space-y-5 mb-3 lg:mb-0">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Follow Us</h3>
                        <div className="flex space-x-4">
                            <ul className="flex space-x-2 h-14">
                                {socialMedia.map(({ label, Icon, link }) => (
                                    <a key={label} alt={label} href={link} target="_blank" rel="noopener noreferrer">
                                        <li className="flex items-center justify-center text-gray-200 w-10 h-10 rounded-full shadow-lg hover:text-white transition">
                                            <Icon size={20} />
                                        </li>
                                    </a>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Connect with Us</h3>
                        <Link href="/contact-ai-solutions">
                            <ShinyButton className="w-full md:w-[170px] border border-white py-2">
                                Get In Touch
                            </ShinyButton>
                        </Link>
                    </div>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                <p className="text-gray-200 text-sm">© 2024 Pro Codework. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
