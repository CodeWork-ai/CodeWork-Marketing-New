"use client";
import { useEffect, useRef } from "react";
import IndustriesHeader from "@/app/components/industries/industriesHeader";
import IndustryDetail from "@/app/components/industries/IndustryDetail";
import Head from "next/head";

export default function Page() {
    const detailRef = useRef(null);

    useEffect(() => {
        if (detailRef.current) {
            detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    return (
        <>
        <Head>
          <meta name="Innovative AI and Blockchain Solutions for Industry Transformation | Codework" content="Explore Codework's innovative AI and blockchain solutions that drive efficiency, transform industries, and unlock new possibilities. Tailored for various sectors, our cutting-edge technologies deliver exceptional value and keep businesses ahead of the curve." />
          <title>Innovative AI and Blockchain Solutions for Industry Transformation | Codework"</title>
        </Head>
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
        </>
    );
}
