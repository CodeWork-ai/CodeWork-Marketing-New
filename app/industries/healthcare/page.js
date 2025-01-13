"use client";
import IndustriesHeader from "@/app/components/industries/industriesHeader";
import IndustryDetail from "@/app/components/industries/IndustryDetail";

export default function Page() {

    return (
        <div className="text-white pb-5">
            <IndustriesHeader
                heading="AI in Healthcare"
                description="Discover exciting secrets about AI in healthcare and how it's transforming patient care, diagnosis, and treatment. Get empowered with the latest insights!"
            />
            <div>
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
