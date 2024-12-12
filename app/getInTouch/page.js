"use client"
import GetInTouchHeader from "../components/getInTouch/getInTouchHeader";
import ContactForm from "../components/getInTouch/form";
import { FlickeringGridDemo } from "../components/getInTouch/flickeringGridBg";

export default function Page() {
    return (
        <div className="text-white pb-5">
            {/* <FlickeringGridDemo /> */}
            <GetInTouchHeader />
            <ContactForm />
        </div>
    );
}