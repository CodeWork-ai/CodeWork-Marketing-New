"use client";
import IndustriesHeader from "@/app/components/industries/industriesHeader";
import IndustryDetail from "@/app/components/industries/IndustryDetail";

export default function Page() {

    return (
        <>
            <div className="text-white pb-5">
                <IndustriesHeader
                    heading="AI in Data Security"
                    description="AI in data security refers to the use of artificial intelligence to detect, prevent, and respond to cybersecurity threats by analyzing patterns, identifying vulnerabilities, and automating protective measures."
                />
                <div>
                    <IndustryDetail
                        heading="Data Security: Advanced Threat Detection and Decentralized Protection"
                        description="Protect sensitive information with our advanced anomaly detection and decentralized security protocols. Our technology proactively identifies threats, ensuring robust data protection. By employing encryption and decentralized methods, we safeguard your information from breaches and cyberattacks. With our solutions, businesses can confidently manage data, maintaining compliance and building user trust. Keywords: data security, anomaly detection, decentralized security, information protection."
                        imageUrl="/data-privacy.png"
                        altText="Technology Illustration"
                    />
                </div>
            </div>
        </>
    );
}
