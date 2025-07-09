"use client";
import React, { useEffect, useRef, useState } from "react";

const formatBotResponse = (text) => {
  let responseText = text;

  // Handle JSON response format
  try {
    const parsed = JSON.parse(text);
    responseText = parsed.answer || text;
  } catch (e) {
    // If not valid JSON, check for partial JSON format like "{'answer': 'content'}"
    if (text.includes("{'answer':") || text.includes('{"answer":')) {
      // Extract content between quotes after 'answer':
      const match = text.match(/['"]answer['"]:\s*['"]([^'"]*)['"]/);
      if (match && match[1]) {
        responseText = match[1];
      } else {
        // Try to extract everything after 'answer': until the end
        const answerIndex = text.indexOf("'answer': '") || text.indexOf('"answer": "');
        if (answerIndex !== -1) {
          const startIndex = text.indexOf("'", answerIndex + 10) || text.indexOf('"', answerIndex + 10);
          if (startIndex !== -1) {
            responseText = text.substring(startIndex + 1);
            // Remove trailing quotes and braces
            responseText = responseText.replace(/['"}]*$/, '');
          }
        }
      }
    }
  }

  return responseText
    .replace(/\*\*/g, '') // Remove Markdown bold
    .replace(/\\n/g, '<br>') // Replace escaped newlines with <br>
    .replace(/\n/g, '<br>') // Replace actual newlines with <br>
    .replace(/\{'answer':\s*'/g, '') // Remove {'answer': ' prefix
    .replace(/\{"answer":\s*"/g, '') // Remove {"answer": " prefix
    .replace(/'\}$/g, '') // Remove trailing '}
    .replace(/"\}$/g, '') // Remove trailing "}
    .trim();
};

// Typing Animation Component
const TypingAnimation = () => {
  return (
    <div className="flex items-center space-x-1 p-2 xs:p-2.5 sm:p-3 md:p-3 lg:p-4">
      <div className="w-3 h-3 xs:w-6 xs:h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 rounded-full bg-white flex items-center justify-center mr-1 xs:mr-1.5 sm:mr-2 flex-shrink-0 overflow-hidden border-2 border-gray-200">
        <img 
          src="/chaticon.svg" 
          alt="Chat Bot" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="bg-gradient-to-r from-purple-100 to-cyan-200 rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl p-2 xs:p-2.5 sm:p-3 md:p-3 lg:p-3">
        <div className="flex space-x-1">
          <div className="w-[6px] h-[6px] bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-[6px] h-[6px] bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-[6px] h-[6px] bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi, How can I help you",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const socketRef = useRef(null);
  const chatContainerRef = useRef(null);
  const quickActionsRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  // Quick Actions Data
  const quickActions = [
    "Services",
    "Products", 
    "AI Solutions",
    "Contact Us",
    "About Us",
    "industries",
  ];

  // Scroll to bottom when new message arrives
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // WebSocket connection
  useEffect(() => {
    socketRef.current = new WebSocket("ws://localhost:8000/api/v1/chatbot");

    socketRef.current.onopen = () => {
      console.log("✅ WebSocket connected");
    };

    socketRef.current.onmessage = (event) => {
      setIsTyping(false); // Stop typing animation
      setIsSubmitting(false); // Stop submit animation
      const formattedText = formatBotResponse(event.data);
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: formattedText,
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    };

    socketRef.current.onerror = (err) => {
      console.error("❌ WebSocket error:", err);
      setIsTyping(false);
      setIsSubmitting(false);
    };

    socketRef.current.onclose = () => {
      console.warn("⚠️ WebSocket closed");
      setIsTyping(false);
      setIsSubmitting(false);
    };

    return () => {
      socketRef.current?.close();
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(true); // Start typing animation
    setIsSubmitting(true); // Start submit animation

    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(inputMessage);
    }

    setInputMessage("");
  };

  const handleQuickAction = (action) => {
    const newMessage = {
      id: messages.length + 1,
      text: action,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(true); // Start typing animation
    setIsSubmitting(true); // Start submit animation
  
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(action);
    }
  };

  return (
    <>
      {/* Custom Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }

        /* Hide scrollbar for quick actions */
        .quick-actions-scroll::-webkit-scrollbar {
          display: none;
        }
        .quick-actions-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Wave Animation - Only on Hover for Chat Icon */
        @keyframes wave {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }

        .wave-container:hover .wave-animation {
          animation: wave 1.5s infinite;
        }

        .wave-container:hover .wave-animation:nth-child(2) {
          animation-delay: 0.3s;
        }

        .wave-container:hover .wave-animation:nth-child(3) {
          animation-delay: 0.6s;
        }

        /* Bouncing Wave Animation for Typing Dots */
        @keyframes wave-bounce {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(-6px) scale(1.2);
            opacity: 0.7;
          }
        }

        .animate-wave-bounce {
          animation: wave-bounce 0.8s ease-in-out infinite;
        }

        /* Bounce Animation for Submit Button */
        @keyframes bounce-submit {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          25% {
            transform: translateY(-4px) scale(1.05);
          }
          50% {
            transform: translateY(-2px) scale(1.02);
          }
          75% {
            transform: translateY(-1px) scale(1.01);
          }
        }

        .bounce-submit {
          animation: bounce-submit 0.8s ease-in-out infinite;
        }

        /* Chat Icon Bounce */
        @keyframes chat-bounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .chat-bounce {
          animation: chat-bounce 0.3s ease-in-out;
        }
      `}</style>

      {/* Chatbot positioned at bottom - Moved slightly down and right */}
      <div className="fixed bottom-4 right-4 xs:bottom-6 xs:right-6 sm:bottom-8 sm:right-8 md:bottom-6 md:right-10 lg:bottom-3 lg:right-7 z-50">
        {/* Chat Button with Wave Animation on Hover - Made smaller */}
        <div 
          className="relative wave-container"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Wave Layers - Only animate on hover */}
          <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-0 wave-animation pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-0 wave-animation pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-0 wave-animation pointer-events-none"></div>
        
          <button
            onClick={toggleChat}
            className={`text-black rounded-full w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center transition-all duration-300 relative z-10 ${
              isOpen ? 'chat-bounce' : ''
            }`}
            aria-label="Toggle chat"
          >
            {isOpen ? (
              // Close icon when chat is open - Gradient background, smaller size
              <span className="w-full h-full flex items-center justify-center rounded-full bg-gradient-to-r from-purple-300 to-cyan-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-transform duration-300"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </span>
            ) : (
              // Chat icon when chat is closed - Use video for animation
              <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-20 lg:h-20 flex items-center justify-center">
                <video
                  src="/bot.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-full"
                  aria-label="Open Chat"
                />
              </div>
            )}
          </button>
        </div>

        {/* Chat Window */}
        {isOpen && (
          <div className="absolute bottom-14 right-0 xs:bottom-16 xs:right-0 sm:bottom-18 sm:right-0 md:bottom-20 md:right-0 lg:bottom-20 lg:right-0 w-[300px] xs:w-[320px] sm:w-[360px] md:w-[360px] lg:w-[360px] xl:w-[370px] h-[450px] xs:h-[470px] sm:h-[500px] md:h-[387px] lg:h-[450px] xl:h-[470px] bg-white rounded-2xl xs:rounded-2xl sm:rounded-3xl md:rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden flex flex-col border border-gray-200 animate-in slide-in-from-bottom-4 duration-300">
            {/* Header - Reduced height for laptop */}
            <div className="bg-gradient-to-r from-[#C5BAFF] to-[#80DAFD] text-[#1E3D59] p-3 xs:p-3 sm:p-4 md:p-3 lg:p-2.5 flex items-center rounded-t-2xl xs:rounded-t-2xl sm:rounded-t-3xl md:rounded-t-2xl lg:rounded-t-3xl flex-shrink-0">
              {/* Profile Image - Replaced with actual image */}
              <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-9 md:h-9 lg:w-8 lg:h-8 xl:w-12 xl:h-12 rounded-full bg-white flex items-center justify-center mr-3 xs:mr-3 sm:mr-4 md:mr-3 lg:mr-2.5 flex-shrink-0 overflow-hidden border-2 border-white">
                <img 
                  src="/chaticon.svg" 
                  alt="Codework AI" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            
              {/* Text Content - Smaller for laptop */}
              <div className="flex flex-col min-w-0 flex-1">
                <h3 className="font-bold text-sm xs:text-base sm:text-lg md:text-base lg:text-sm xl:text-xl leading-tight truncate">Codework</h3>
                <p className="text-xs xs:text-sm sm:text-sm md:text-sm lg:text-xs xl:text-base opacity-90 leading-tight truncate">AI Assistant</p>
              </div>
            </div>

            {/* Messages Container - Increased height */}
            <div
              ref={chatContainerRef}
              className="flex-1 p-2 xs:p-3 sm:p-4 md:p-3 lg:p-2.5 xl:p-4 overflow-y-auto bg-gray-50 custom-scrollbar"
              style={{ 
                height: 'calc(100% - 200px)', // Adjusted for quick actions
                minHeight: '200px',
                maxHeight: '300px'
              }}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-2 xs:mb-2.5 sm:mb-3 md:mb-2.5 lg:mb-2 xl:mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-9 xl:h-9 rounded-full bg-white flex items-center justify-center mr-1.5 xs:mr-2 sm:mr-2.5 md:mr-2 lg:mr-1.5 flex-shrink-0 overflow-hidden border-2 border-gray-200">
                      <img 
                        src="/chaticon.svg" 
                        alt="Bot" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] xs:max-w-[85%] sm:max-w-[80%] md:max-w-[80%] rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-lg lg:rounded-lg p-2 xs:p-2.5 sm:p-3 md:p-2.5 lg:p-1.5 ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-[#C5BAFF] to-[#80DAFD] text-[#1E3D59] text-right"
                        : "bg-gradient-to-r from-blue-100 to-blue-200"
                    }`}
                  >
                    <div
                      className={`text-xs xs:text-sm sm:text-sm md:text-xs lg:text-xs xl:text-sm leading-relaxed break-words ${
                        msg.sender === "user" ? "text-[#1E3D59]" : "text-gray-800"
                      }`}
                      dangerouslySetInnerHTML={{ __html: msg.text }}
                    />
                  </div>
                </div>
              ))}
            
              {/* Typing Animation */}
              {isTyping && (
                <div className="mb-2 xs:mb-3 sm:mb-3 md:mb-3 lg:mb-4 xl:mb-4 flex justify-start">
                  <TypingAnimation />
                </div>
              )}
            </div>
         
            {/* Quick Actions - Reduced height */}
            <div className="bg-white flex-shrink-0">
              <div
                ref={quickActionsRef}
                className="flex gap-2 overflow-x-auto quick-actions-scroll py-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action)}
                    className="px-3 py-1 border border-purple-500 text-purple-500 rounded-full text-xs whitespace-nowrap hover:bg-purple-100 transition-all duration-300 flex-shrink-0"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
            {/* Input Form - Reduced input height and smaller submit button */}
            <form
              onSubmit={handleSendMessage}
              className=" px-4 xs:px-4 sm:px-5 md:px-5 lg:px-4 xl:px-6 pt-8 xs:pt-8 sm:pt-8 md:pt-3 lg:pt-3  bg-white border-t border-gray-100 flex items-center gap-3 xs:gap-3 sm:gap-4 md:gap-4 lg:gap-3 "
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type Something"
                className="flex-1 border border-gray-300 text-black placeholder-gray-500 placeholder-opacity-80 rounded-full py-2 xs:py-2 sm:py-2.5 md:py-2.5 lg:py-1.5 px-4 xs:px-4 sm:px-5 md:px-5 lg:px-4 focus:outline-none focus:ring-2 focus:ring-[#C5BAFF] text-sm xs:text-sm sm:text-base md:text-base lg:text-sm transition-all"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className={`rounded-full w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-9 lg:h-9 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                  !inputMessage.trim()
                    ? "bg-gradient-to-r from-[#C5BAFF] to-[#80DAFD] text-white cursor-not-allowed opacity-50"
                    : "bg-gradient-to-r from-[#C5BAFF] to-[#80DAFD] text-white hover:from-[#C5BAFF] hover:to-[#7bdaff] hover:shadow-lg"
                } ${isSubmitting ? 'bounce-submit' : ''}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-4 lg:h-4 transition-transform duration-300 ${
                    isSubmitting ? 'rotate-12' : ''
                  }`}
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatBot;