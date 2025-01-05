'use client'
import React from "react";
import { RiRobot3Fill } from "react-icons/ri";
import { useState } from "react";
import ShineBorder from "../../../components/ui/shine-border";

export default function ChatIcon() {
    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    return (
        <div>
            {/* Chat Icon */}
            <button
                onClick={toggleChat}
                className="fixed z-50 bottom-5 right-5 text-[#fd6262] hover:text-black bg-black border-2 hover:bg-[#fd6262] border-[#fd6262] hover:border-black rounded-full w-14 h-14 flex justify-center items-center shadow-lg transition"
            >
                <RiRobot3Fill className="w-10 h-10" />
            </button>

            {/* Chat Widget */}
            {showChat && (

                <div className="fixed bottom-24 right-5 w-[300px] md:w-[400px] h-[500px] border border-black rounded-lg shadow-lg overflow-hidden z-50">
                    <ShineBorder
                        className="relative flex p-0 h-full w-[300px] md:w-[400px] bg-opacity-50 items-center overflow-hidden rounded-lg md:shadow-xl"
                        color={["#f04f57", "#f04f57"]}
                    >
                        <iframe
                            src="https://www.chatbase.co/chatbot-iframe/tL6iVeFPS1U2MvGq8Ec3V"
                            className="w-[300px] md:w-[400px] h-full bg-black rounded-lg"
                        ></iframe>
                        </ShineBorder>
                        <div className="fixed flex items-center justify-center text-center bottom-24 right-5 w-[300px] md:w-[400px] h-10 bg-black text-gray-400 text-xs rounded-b-lg shadow-lg overflow-hidden z-50">
                            Powered by CodeWork
                        </div>
                    
                </div>

            )}
        </div>
    )
}

