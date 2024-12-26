"use client"
import GetInTouchHeader from "../components/getInTouch/getInTouchHeader";
import ContactForm from "../components/getInTouch/form";
import { FlickeringGridDemo } from "../components/getInTouch/flickeringGridBg";
import JoinUsForm from "../components/joinUs/joinUsForm";

export default function Page() {
    return (
        <div className="text-white pb-5">
            {/* <FlickeringGridDemo /> */}
            <GetInTouchHeader />
            <JoinUsForm/>
        </div>
    );
}