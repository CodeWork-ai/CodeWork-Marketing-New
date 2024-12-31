"use client"
import Services from "../components/service/service";
import ServiceFooter from "../components/service/serviceFooter";
import ServiceHeader from "../components/service/serviceHeader";
import Head from "next/head";

export default function Page() {
    return (
        <>
            <Head>
                <meta name="AI Services" content="Driving innovation through cutting-edge AI services at Codework. Leverage advanced AI solutions to transform your business and stay ahead in the digital era." />
                <title>AI Services | Cutting-Edge Innovation</title>
            </Head>
            <div className="text-white pb-5">
                <ServiceHeader />
                <Services />
                <ServiceFooter />
            </div>
        </>
    );
}