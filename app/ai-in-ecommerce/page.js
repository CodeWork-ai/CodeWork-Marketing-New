"use client";
import IndustriesHeader from "@/app/components/industries/industriesHeader";
import IndustryDetail from "@/app/components/industries/IndustryDetail";

export default function Page() {

    return (
        <div className="text-white pb-5">
            <IndustriesHeader
                heading="Secrets of AI in E-commerce"
                description="Discover the secrets of integrating AI in e-commerce and unlock remarkable success for your business with our expert strategies and insights."
            />
            <div>
                <IndustryDetail
                    heading="E-commerce: Predictive Analytics for Smarter Shopping"
                    description="Redefine the online shopping experience with our predictive analytics solutions. We deliver personalized product recommendations that increase customer satisfaction and drive sales. Our secure payment gateways ensure seamless transactions, building trust with shoppers. By analysing customer behaviour, we create intuitive, tailored experiences that keep buyers coming back. Businesses benefit from higher conversion rates, while customers enjoy stress-free shopping. Keywords: e-commerce analytics, personalized shopping, secure transactions, predictive AI."
                    imageUrl="/ecommercebot.png"
                    altText="Technology Illustration"
                />
            </div>
        </div>
    );
}
