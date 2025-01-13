"use client";
import IndustriesHeader from "@/app/components/industries/industriesHeader";
import IndustryDetail from "@/app/components/industries/IndustryDetail";

export default function Page() {

    return (
        <div className="text-white pb-5">
            <IndustriesHeader
                heading="Unique AI in Education."
                description="Explore unique insights into how AI in education empowers and transforms student learning experiences for a brighter future. Dive in now!"
            />
            <div>
                <IndustryDetail
                    heading="Education: Adaptive AI Learning and Blockchain Certification"
                    description="Transforming education, our adaptive AI platforms create personalized learning journeys for every student, matching content to individual learning styles. This interactive approach fosters engagement and retention, making education accessible and enjoyable. With blockchain-backed certifications, academic credentials are secure, tamper-proof, and easily verifiable, building trust in institutions. We empower learners and educators alike by promoting transparency and innovation in education. Keywords: personalized learning, adaptive AI, blockchain in education, secure certifications."
                    imageUrl="/education.png"
                    altText="Technology Illustration"
                />
            </div>
        </div>
    );
}
