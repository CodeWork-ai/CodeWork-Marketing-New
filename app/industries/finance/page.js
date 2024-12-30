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
                    heading="Finance: AI-Powered Fraud Detection and Risk Analysis"
                    description="Revolutionizing financial systems, our AI solutions provide accurate fraud detection, credit risk analysis, and streamlined payment processes. These innovations enhance operational efficiency, minimize risks, and boost customer trust. By automating complex financial tasks, we save time and ensure precision, supporting smarter financial decisions. Our technology fosters a secure, efficient, and reliable financial ecosystem. Keywords: AI in finance, fraud detection, credit risk analysis, secure payments."
                    imageUrl="/finance.png"
                    altText="Technology Illustration"
                />
            </div>
        </div>
    );
}
