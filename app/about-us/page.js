import AboutHeader from "../components/aboutUs/aboutHeader";
import AboutUs from "../components/aboutUs/aboutUs";

export default function Page() {
  return (
    <div className="text-white pb-5">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.codework.ai/" }, { "@type": "ListItem", "position": 2, "name": "About-Us", "item": "https://www.codework.ai/about-us" }] }), }} />
      <AboutHeader />
      <AboutUs />
    </div>
  );
}