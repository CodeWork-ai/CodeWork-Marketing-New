import AboutHeader from "../components/aboutUs/aboutHeader";
import AboutUs from "../components/aboutUs/aboutUs";
import Head from "next/head";

export default function Page() {
  return (
    <div className="text-white pb-5">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.codework.ai/" }, { "@type": "ListItem", "position": 2, "name": "About-Us", "item": "https://www.codework.ai/ai-powered-technology" }] }), }} />
      </Head>
      <AboutHeader />
      <AboutUs />
    </div>
  );
}