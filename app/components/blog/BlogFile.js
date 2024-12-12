"use client";

import HeroSection from "./HeroSection";
import FeaturedBlogs from "./FeaturedBlogs";
import CategoriesSection from "./CategoriesSection";
import LatestBlogs from "./LatestBlogs";
import NewsletterSubscription from "./NewsletterSubscription";

export default function BlogFile() {
  return (
    <div className="text-gray-100">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Blogs Section */}
      <FeaturedBlogs />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Latest Blogs Section */}
      <LatestBlogs />

      {/* Newsletter Subscription */}
      <NewsletterSubscription />
    </div>
  );
}
