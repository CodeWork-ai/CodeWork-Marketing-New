"use client"
import JoinUsForm from "../components/joinUs/joinUsForm";
import JoinUsHeader from "../components/joinUs/joinUsHeader";

export default function Page() {
    return (
        <div className="text-white pb-5">
            {/* <FlickeringGridDemo /> */}
            <JoinUsHeader />
            <JoinUsForm/>
        </div>
    );
}