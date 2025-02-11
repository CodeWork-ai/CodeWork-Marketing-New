"use client";
import IndustriesHeader from "@/app/components/industries/industriesHeader";
import IndustryDetail from "@/app/components/industries/IndustryDetail";

export default function Page() {

    return (
        <div className="text-white pb-5">
            <IndustriesHeader
                heading="New AI in Finance"
                description="Find out how new AI technologies in finance are empowering decisions and paving the way for a brighter, more efficient financial future."
            />
            <div>
                <IndustryDetail
                    heading="Finance: AI-Powered Fraud Detection and Risk Analysis"
                    description="Revolutionizing financial systems, our AI solutions provide accurate fraud detection, credit risk analysis, and streamlined payment processes. These innovations enhance operational efficiency, minimize risks, and boost customer trust. By automating complex financial tasks, we save time and ensure precision, supporting smarter financial decisions. Our technology fosters a secure, efficient, and reliable financial ecosystem."
                    imageUrl="/finance.png"
                    altText="Technology Illustration"
                />
            </div>
        </div>
    );
}
