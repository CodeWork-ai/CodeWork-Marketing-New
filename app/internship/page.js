"use client"
import InternshipForm from "../components/internship/internshipForm";
import InternshipHeader from "../components/internship/internshipHeader";
import InternshipProgram from "../components/internship/internshipProgram";

export default function Page() {
    return (
        <div className="text-white pb-5">
            {/* <FlickeringGridDemo /> */}
            <InternshipHeader />
            <InternshipProgram/>
            <InternshipForm/>
        </div>
    );
}