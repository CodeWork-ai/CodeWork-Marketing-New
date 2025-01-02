"use client"
import Services from "../components/service/service";
import ServiceFooter from "../components/service/serviceFooter";
import ServiceHeader from "../components/service/serviceHeader";

export default function Page() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.codework.ai/" }, { "@type": "ListItem", "position": 2, "name": "Service", "item": "https://www.codework.ai/service" }] }), }} />
            <div className="text-white pb-5">
                <ServiceHeader />
                <Services />
                <ServiceFooter />
            </div>
        </>
    );
}