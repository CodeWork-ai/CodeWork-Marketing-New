"use client"
import Services from "../components/service/service";
import ServiceFooter from "../components/service/serviceFooter";
import ServiceHeader from "../components/service/serviceHeader";

export default function Page() {
    return (
        <div className="text-white pb-5">
            <ServiceHeader />
            <Services/>
            <ServiceFooter/>
        </div>
    );
}