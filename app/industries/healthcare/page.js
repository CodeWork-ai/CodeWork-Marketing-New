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
                    heading="Healthcare: AI-Driven Diagnostics and EHR Management"
                    description="Our AI-powered healthcare solutions revolutionize diagnostics with precision and speed, enabling personalized treatment plans tailored to each patient. By securely managing Electronic Health Records (EHR), we ensure instant access to patient histories while protecting sensitive data. This leads to improved health outcomes, streamlined workflows, and enhanced patient satisfaction. Empowering healthcare providers with cutting-edge technology, we make informed decisions faster, elevating the quality of care. Keywords: AI in healthcare, EHR management, personalized treatment, secure patient data."
                    imageUrl="/healthcare.png"
                    altText="Technology Illustration"
                />
            </div>
        </div>
    );
}
