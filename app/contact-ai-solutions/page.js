"use client"
import GetInTouchHeader from "../components/getInTouch/getInTouchHeader";
import ContactForm from "../components/getInTouch/form";
import ContactLanding from "../components/getInTouch/contactLanding";
import ContactSupport from "../components/getInTouch/contactSupport";
import ContactButton from "../components/getInTouch/contactButton";
import Client from "../components/getInTouch/client";

export default function Page() {
    return (
        <div className="text-white pb-5">
            <ContactLanding/>
            <ContactSupport/>
            <ContactButton/>
            <Client/>
            {/* <GetInTouchHeader />
            <ContactForm /> */}
            
            
        </div>
    );
}