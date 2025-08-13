"use client";

import Link from "next/link";
import { FiSearch, FiLogOut, } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";


export default function Homepage() {
  const pathname = usePathname();
  const router = useRouter();
  const [userInitial, setUserInitial] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentYear = new Date().getFullYear();
 
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const email = localStorage.getItem("userEmail");
    setIsLoggedIn(!!token);
    if (email) {
      setUserInitial(email[0].toUpperCase());
    }
  }, []);

  useEffect(() => {
    // Close dropdown if clicked outside
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Products", path: "/Homepage/Products" },
    { name: "Contacts", path: "/Homepage/Us" },
  ];

  const handleLoginClick = () => {
    router.push("/PageLogin");
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setDropdownOpen(false);
    router.push("/PageLogin");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div>
      {/* HEADER */}
      <header className="bg-white w-full shadow-sm">
  <div className="container mx-auto px-6 flex items-center justify-between">
    {/* Logo: naturally aligned to the left */}
    <Link href="/">
      <img
        src="/image.png"
        alt="Logo"
        className="h-[80px] w-40 object-contain mr-110"
      />
    </Link>

    {/* Search Bar */}
    <form onSubmit={handleSearch} className="relative flex items-center ml-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 pr-8 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700"
      />
      <button type="submit" className="absolute left-2 text-gray-500 hover:text-gray-700">
        <FiSearch className="w-5 h-5 text-blue-400" />
      </button>
    </form>

    {/* Nav Links */}
    <nav className="hidden md:flex space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className={`text-gray-700 hover:text-gray-900 ${
            pathname === item.path ? "font-bold" : ""
          }`}
        >
          <h1 className="p-2 text-black font-serif hover:border-b-2 hover:border-purple-700">
            {item.name}
          </h1>
        </Link>
      ))}
    </nav>
          {/* Right Side */}
         {/* <div
            className="flex items-center space-x-4 relative"
            ref={dropdownRef}
          >
            {!isLoggedIn ? (
              <button
                onClick={handleLoginClick}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white font-serif hover:bg-blue-700 transition"
              >
                Login
              </button>
            ) : (
              <>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center hover:bg-blue-700 transition-all transform hover:scale-110"
                >
                  {userInitial}
                </button>

                {dropdownOpen && (
                  <div className="absolute top-12 right-0 w-58 bg-white shadow-lg rounded-lg border">
                    <div className="px-4 py-2 border-b font-serif text-gray-700">
                      {localStorage.getItem("userEmail")}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full px-4 py-2 text-red-600 hover:bg-gray-100 font-serif"
                    >
                      <FiLogOut className="w-4 h-4" /> Logout
                    </button>
                  </div>
                )}
              </>
            )}
          </div>*/}
        </div>
      </header>
      {/* HERO SECTION */}
      <div className="w-full h-[500px] bg-cover bg-center text-white flex flex-col md:flex-row items-center justify-between p-10 bg-gray-200">
        {/* Left */}
        <div className="max-w-lg text-left">
          <h1 className="text-5xl font-bold text-purple-700 mb-4 font-serif">
            ✨ Pure
          </h1>
          <p className="text-lg font-medium text-purple-500 font-serif">
            Products you Love. Quality we Trust.
          </p>
          <button className="mt-6 px-6 py-2 border font-serif border-purple-400 bg-purple-700 hover:bg-purple-900 hover:text-white transition rounded hover:scale-110">
            Shop Now
          </button>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 mt-22 mb-9 gap-6  font-serif text-pink-700 ">
          {[
            { name: "Wooden Comp", img: "./wc1.jpg" },
            { name: "Menwear", img: "./cs.jpg" },
            { name: "Polythene Covers", img: "./cover.png" },
            { name: "Shorts", img: "./shorts.jpg" },
          ].map((item) => (
            <div
              key={item.name}
              className=" backdrop-blur-sm bg-orange-200 border-4 border-purple-400 rounded-xl p-2 flex flex-col items-center text-center hover:scale-105 transition transform cursor-pointer font-serif"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-36 w-36 object-cover rounded-lg mb-2"
              />
              <p className="text-sm font-semibold text-pink-600">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-widest text-pink-600 font-serif">
              About Lovio
            </h2>
            <div className="w-12 h-1 bg-gray-800 mx-auto md:mx-0"></div>
            <p className="text-gray-700 font-serif">
              Lovio is revolutionizing the online reselling and white-label
              industry. Our work focuses on using cutting-edge AI and data
              analytics to transform complex manual processes into highly
              efficient, profitable operations for our partners.
            </p>
            <p className="text-gray-700 font-serif">
              Our culture is defined by a trailblazing spirit and thrives on
              innovation, collaboration, and fast-paced execution.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              className="w-full max-w-md object-cover rounded"
              src="./ban2.webp"
              alt="Brand display"
            />
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6">
          <div className="flex justify-center md:justify-start">
            <img
              className="w-full max-w-md object-cover rounded"
              src="./load.gif"
              alt="About Lovio"
            />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-widest text-purple-600 font-serif">
              Lovio Vision
            </h2>
            <div className="w-12 h-1 bg-gray-800 mx-auto md:mx-0" />
            <p className="text-gray-700 font-serif">
              Our mission is to empower online selling by integrating
              cutting-edge AI and data analytics into the reselling and
              white-label business model.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 ">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-widest text-blue-600 font-serif">
              Lovio Mission
            </h2>
            <div className="w-12 h-1 bg-gray-800 mx-auto md:mx-0"></div>
            <p className="text-gray-700 font-serif">
              Our vision is to be the pioneer in building a futuristic,
              efficient, and intelligent e-commerce ecosystem.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              className="w-full max-w-md object-cover rounded"
              src="./pan1.jpg"
              alt="Brand display"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-pink-600 to-blue-600 py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-300 font-serif">
            © {currentYear} by{" "}
            <span className="font-semibold">Online Shop</span>. Powered and
            secured by{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-gray-100 font-serif"
            >
              Lovio
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
