// app/layout.js
import "./globals.css";
import Footer from "./components/common/footer";
import Navbar from "./components/common/nav";
import localFont from "next/font/local";

// 1) Regular (400)
const gilroyRegular = localFont({
  src: "./fonts/gilroy-regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-gilroy-regular",
  display: "swap",
});

// 2) Medium (500)
const gilroyMedium = localFont({
  src: "./fonts/gilroy-medium.ttf",
  weight: "500",
  style: "normal",
  variable: "--font-gilroy-medium",
  display: "swap",
});

// 3) SemiBold (600)
const gilroySemibold = localFont({
  src: "./fonts/gilroy-semibold.ttf",
  weight: "600",
  style: "normal",
  variable: "--font-gilroy-semibold",
  display: "swap",
});

export const metadata = {
  title: "CODEWORK",
  description: "Best IT staffing solutions",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    // Make sure this <html> is NOT self‐closed!
    <html
      lang="en"
      className={`${gilroyRegular.variable} ${gilroyMedium.variable} ${gilroySemibold.variable}`}
    >
      {/* And now the <body> lives INSIDE that <html> */}
      <body className="bg-white">
        <Navbar className="mb-36 px-10 md:px-20" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
