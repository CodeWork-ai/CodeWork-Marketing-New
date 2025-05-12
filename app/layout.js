import "./globals.css";
import Footer from "./components/common/footer";
import Navbar from "./components/common/nav";
import localFont from "next/font/local";

const gilroySemibold = localFont({
  src: "./fonts/gilroy-semibold.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const gilroyRegular = localFont({
  src: "./fonts/gilroy-regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const gilroyMedium = localFont({
  src: "./fonts/gilroy-medium.ttf",
  variable: "--font-gilroy-medium",
  weight: "100 900",
});

export const metadata = {
  title: "CODEWORK",
  description: "Best IT staffing solutions",
  icons: {
    icon: "/favicon.svg",
  },
  // (you generally don’t need to set viewport or charset—they’re
  // automatically included—but you can override if desired via
  // the `viewport` export or Metadata API)
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${gilroyRegular.variable} ${gilroySemibold.variable} ${gilroyMedium.variable}`}
    >
      <body className="bg-white">
        <Navbar className="mb-36 px-10 md:px-20" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
