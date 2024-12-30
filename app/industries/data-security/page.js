"use client";
import { useEffect, useRef } from "react";
import IndustriesHeader from "@/app/components/industries/industriesHeader";
import IndustryDetail from "@/app/components/industries/IndustryDetail";

export default function Page() {
    const detailRef = useRef(null);

    useEffect(() => {
        if (detailRef.current) {
            detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    return (
        <div className="text-white pb-5">
            <IndustriesHeader />
            <div ref={detailRef}>
                <IndustryDetail
                    heading="Data Security: Advanced Threat Detection and Decentralized Protection"
                    description="Protect sensitive information with our advanced anomaly detection and decentralized security protocols. Our technology proactively identifies threats, ensuring robust data protection. By employing encryption and decentralized methods, we safeguard your information from breaches and cyberattacks. With our solutions, businesses can confidently manage data, maintaining compliance and building user trust. Keywords: data security, anomaly detection, decentralized security, information protection."
                    imageUrl="/data-privacy.png"
                    altText="Technology Illustration"
                />
            </div>
        </div>
    );
}
