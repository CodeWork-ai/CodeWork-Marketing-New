"use client";
import React, { useEffect, useRef, useState } from "react";

const formatBotResponse = (text) => {
  let responseText = text;

  // Handle JSON response format
  try {
    const parsed = JSON.parse(text);
    responseText = parsed.answer || parsed.response || parsed.message || text;
  } catch (e) {
    // If not valid JSON, check for partial JSON format like "{'answer': 'content'}"
    if (text.includes("{'answer':") || text.includes('{"answer":')) {
      // Extract content between quotes after 'answer':
      const match = text.match(/['"]answer['"]:\\s*['"]([^'"]*)['"]/);
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
    .replace(/\\*\\*/g, '') // Remove Markdown bold
    .replace(/\\\\n/g, '<br>') // Replace escaped newlines with <br>
    .replace(/\\n/g, '<br>') // Replace actual newlines with <br>
    .replace(/\\{'answer':\\s*'/g, '') // Remove {'answer': ' prefix
    .replace(/\\{"answer":\\s*"/g, '') // Remove {"answer": " prefix
    .replace(/'\\}$/g, '') // Remove trailing '}
    .replace(/"\\}$/g, '') // Remove trailing "}
    .trim();
};

// Enhanced Typing Animation Component
const TypingAnimation = () => {
  return (
    <div className="flex items-center space-x-1 p-2 xs:p-2.5 sm:p-3 md:p-3 lg:p-4">
      <div className="w-3 h-3 xs:w-6 xs:h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 rounded-full bg-white flex items-center justify-center mr-1 xs:mr-1.5 sm:mr-2 flex-shrink-0 overflow-hidden border-2 border-secondary/30 shadow-lg">
        <img 
          src="/chaticon.svg" 
          alt="Chat Bot" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="bg-gradient-to-r from-secondary/20 via-secondary/30 to-secondary/20 rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl p-2 xs:p-2.5 sm:p-3 md:p-3 lg:p-3 shadow-lg backdrop-blur-sm border border-secondary/20">
        <div className="flex space-x-1">
          <div className="w-[6px] h-[6px] bg-secondary rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0ms' }}></div>
          <div className="w-[6px] h-[6px] bg-secondary rounded-full animate-bounce shadow-sm" style={{ animationDelay: '150ms' }}></div>
          <div className="w-[6px] h-[6px] bg-secondary rounded-full animate-bounce shadow-sm" style={{ animationDelay: '300ms' }}></div>
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
  const chatContainerRef = useRef(null);
  const quickActionsRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  // Quick Actions Data
  const quickActions = [
    "Services",
    "Products", 
    "AI Solutions",
    "Contact Us",
  ];

  // Scroll to bottom when new message arrives
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // API call function
  const sendMessageToAPI = async (question) => {
    try {
      setIsTyping(true);
      setIsSubmitting(true);

      const response = await fetch(`https://prod-api.codework.ai/api/v1/chatbot?question=${encodeURIComponent(question)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.text(); 
      
      // Try to parse as JSON, fallback to text
      let botResponse;
      try {
        const jsonData = JSON.parse(data);
        botResponse = jsonData.answer || jsonData.response || jsonData.message || data;
      } catch (e) {
        botResponse = data;
      }

      const formattedText = formatBotResponse(botResponse);
      
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: formattedText,
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);

    } catch (error) {
      console.error("❌ API error:", error);
      
      // Add error message to chat
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: "Sorry, I'm having trouble connecting right now. Please try again later.",
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsTyping(false);
      setIsSubmitting(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newMessage]);
    
    // Send message to API
    await sendMessageToAPI(inputMessage);
    
    setInputMessage("");
  };

  const handleQuickAction = async (action) => {
    const newMessage = {
      id: messages.length + 1,
      text: action,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newMessage]);
    
    // Send action to API
    await sendMessageToAPI(action);
  };

  return (
    <>
      {/* Enhanced Custom Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(29, 223, 234, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(29, 223, 234, 0.6);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(29, 223, 234, 0.8);
        }

        /* Hide scrollbar for quick actions */
        .quick-actions-scroll::-webkit-scrollbar {
          display: none;
        }
        .quick-actions-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Enhanced Wave Animation with Brand Colors */
        @keyframes wave {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .wave-container:hover .wave-animation {
          animation: wave 1.8s infinite;
        }

        .wave-container:hover .wave-animation:nth-child(2) {
          animation-delay: 0.4s;
        }

        .wave-container:hover .wave-animation:nth-child(3) {
          animation-delay: 0.8s;
        }

        /* Message Slide In Animation */
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .message-slide-left {
          animation: slideInLeft 0.4s ease-out;
        }

        .message-slide-right {
          animation: slideInRight 0.4s ease-out;
        }

        /* Enhanced Submit Button Animation */
        @keyframes bounce-submit {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          25% {
            transform: translateY(-3px) scale(1.08);
          }
          50% {
            transform: translateY(-1px) scale(1.04);
          }
          75% {
            transform: translateY(-0.5px) scale(1.02);
          }
        }

        .bounce-submit {
          animation: bounce-submit 0.6s ease-in-out infinite;
        }

        /* Chat Icon Pulse */
        @keyframes chat-pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(29, 223, 234, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(29, 223, 234, 0.6);
          }
        }

        .chat-pulse {
          animation: chat-pulse 2s ease-in-out infinite;
        }

        /* Floating Background Animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        /* Glow Effect */
        .glow-effect {
          box-shadow: 0 0 20px rgba(29, 223, 234, 0.3), 
                      0 0 40px rgba(29, 223, 234, 0.2),
                      0 0 60px rgba(29, 223, 234, 0.1);
        }

        /* Quick Action Hover */
        @keyframes quick-action-hover {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-2px) scale(1.05); }
          100% { transform: translateY(0) scale(1); }
        }

        .quick-action-animate:hover {
          animation: quick-action-hover 0.3s ease-in-out;
        }
      `}</style>

      {/* Chatbot positioned at bottom */}
      <div className="fixed bottom-4 right-4 xs:bottom-6 xs:right-6 sm:bottom-8 sm:right-8 md:bottom-6 md:right-10 lg:bottom-3 lg:right-7 z-50">
        {/* Enhanced Chat Button with Wave Animation */}
        <div 
          className="relative wave-container"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Enhanced Wave Layers with Brand Colors */}
          <div className="absolute inset-0 rounded-full bg-secondary opacity-0 wave-animation pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full bg-secondary opacity-0 wave-animation pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full bg-secondary opacity-0 wave-animation pointer-events-none"></div>
        
          <button
            onClick={toggleChat}
            className={`text-black rounded-full w-12 h-12 xs:w-14 xs:h-14 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-[70px] lg:h-[70px] flex items-center justify-center transition-all duration-300 relative z-10 ${
              isOpen ? 'chat-pulse' : 'float-animation'
            } ${!isOpen ? 'glow-effect' : ''}`}
            aria-label="Toggle chat"
          >
            {isOpen ? (
              // Enhanced Close icon with brand gradient
              <span className="w-full h-full flex items-center justify-center rounded-full bg-gradient-to-r from-primary via-secondary/80 to-primary shadow-xl border-2 border-secondary/30">
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
                  className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-transform duration-300 hover:rotate-90"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </span>
            ) : (
              // Video with enhanced border
              <div className="w-10 h-10 xs:w-14 xs:h-14 sm:w-14 sm:h-14 md:w-12 md:h-12 lg:w-20 lg:h-20 flex items-center justify-center rounded-full border-3 border-secondary/50 bg-gradient-to-r from-secondary/10 to-secondary/20 shadow-2xl">
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

        {/* Enhanced Chat Window */}
        {isOpen && (
          <div className="absolute bottom-14 right-0 xs:bottom-16 xs:right-0 sm:bottom-18 sm:right-0 md:bottom-20 md:right-0 lg:bottom-20 lg:right-0 w-[300px] xs:w-[320px] sm:w-[360px] md:w-[360px] lg:w-[360px] xl:w-[370px] h-[450px] xs:h-[470px] sm:h-[500px] md:h-[387px] lg:h-[450px] xl:h-[470px] bg-white rounded-2xl xs:rounded-2xl sm:rounded-3xl md:rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden flex flex-col border-2 border-secondary/20 animate-in slide-in-from-bottom-4 duration-300 glow-effect">
            
            {/* Enhanced Header with Brand Colors */}
            <div className="bg-gradient-to-r from-primary via-secondary/90 to-primary text-white p-3 xs:p-3 sm:p-4 md:p-3 lg:p-2.5 flex items-center rounded-t-2xl xs:rounded-t-2xl sm:rounded-t-3xl md:rounded-t-2xl lg:rounded-t-3xl flex-shrink-0 shadow-lg">
              {/* Enhanced Profile Image */}
              <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-9 md:h-9 lg:w-8 lg:h-8 xl:w-12 xl:h-12 rounded-full bg-white flex items-center justify-center mr-3 xs:mr-3 sm:mr-4 md:mr-3 lg:mr-2.5 flex-shrink-0 overflow-hidden border-2 border-white shadow-lg">
                <img 
                  src="/chaticon.svg" 
                  alt="Codework AI" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            
              {/* Enhanced Text Content */}
              <div className="flex flex-col min-w-0 flex-1">
                <h3 className="font-bold text-sm xs:text-base sm:text-lg md:text-base lg:text-sm xl:text-xl leading-tight truncate text-white drop-shadow-sm">Codework</h3>
                <p className="text-xs xs:text-sm sm:text-sm md:text-sm lg:text-xs xl:text-base opacity-90 leading-tight truncate text-white/90">AI Assistant</p>
              </div>

              {/* Status Indicator */}
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse shadow-sm"></div>
            </div>

            {/* Enhanced Messages Container */}
            <div
              ref={chatContainerRef}
              className="flex-1 p-2 xs:p-3 sm:p-4 md:p-3 lg:p-2.5 xl:p-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-white custom-scrollbar"
              style={{ 
                height: 'calc(100% - 200px)',
                minHeight: '200px',
                maxHeight: '300px'
              }}
            >
              {messages.map((msg, index) => (
                <div
                  key={msg.id}
                  className={`mb-2 xs:mb-2.5 sm:mb-3 md:mb-2.5 lg:mb-2 xl:mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"} ${
                    msg.sender === "user" ? "message-slide-right" : "message-slide-left"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-9 xl:h-9 rounded-full bg-white flex items-center justify-center mr-1.5 xs:mr-2 sm:mr-2.5 md:mr-2 lg:mr-1.5 flex-shrink-0 overflow-hidden border-2 border-secondary/30 shadow-md">
                      <img 
                        src="/chaticon.svg" 
                        alt="Bot" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] xs:max-w-[85%] sm:max-w-[80%] md:max-w-[80%] rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-lg lg:rounded-lg p-2 xs:p-2.5 sm:p-3 md:p-2.5 lg:p-1.5 shadow-md ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-secondary/90 to-secondary text-primary text-right border border-secondary/20"
                        : "bg-gradient-to-r from-white to-gray-50 border border-gray-200"
                    }`}
                  >
                    <div
                      className={`text-xs xs:text-sm sm:text-sm md:text-xs lg:text-xs xl:text-sm leading-relaxed break-words ${
                        msg.sender === "user" ? "text-primary font-medium" : "text-gray-800"
                      }`}
                      dangerouslySetInnerHTML={{ __html: msg.text }}
                    />
                  </div>
                </div>
              ))}
            
              {/* Enhanced Typing Animation */}
              {isTyping && (
                <div className="mb-2 xs:mb-3 sm:mb-3 md:mb-3 lg:mb-4 xl:mb-4 flex justify-start message-slide-left">
                  <TypingAnimation />
                </div>
              )}
            </div>
         
            {/* Enhanced Quick Actions */}
            <div className="bg-gradient-to-r from-gray-50 to-white flex-shrink-0 border-t border-gray-100">
              <div
                ref={quickActionsRef}
                className="flex gap-2 overflow-x-auto quick-actions-scroll py-2 px-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action)}
                    className="px-3 py-1.5 bg-gradient-to-r from-secondary/10 to-secondary/20 border border-secondary/30 text-secondary rounded-full text-xs whitespace-nowrap hover:from-secondary/20 hover:to-secondary/30 hover:border-secondary/50 transition-all duration-300 flex-shrink-0 quick-action-animate shadow-sm font-medium"
                    disabled={isTyping}
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced Input Form */}
            <form
              onSubmit={handleSendMessage}
              className="px-4 xs:px-4 sm:px-5 md:px-5 lg:px-4 xl:px-6 pt-4 xs:pt-4 sm:pt-4 md:pt-3 lg:pt-3 pb-4 bg-gradient-to-r from-white to-gray-50 border-t border-gray-100 flex items-center gap-3 xs:gap-3 sm:gap-4 md:gap-4 lg:gap-3"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type Something..."
                disabled={isTyping}
                className="flex-1 border-2 border-secondary/20 text-primary placeholder-gray-500 placeholder-opacity-80 rounded-full py-2 xs:py-2 sm:py-2.5 md:py-2.5 lg:py-1.5 px-4 xs:px-4 sm:px-5 md:px-5 lg:px-4 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 text-sm xs:text-sm sm:text-base md:text-base lg:text-sm transition-all disabled:opacity-50 shadow-sm bg-white"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isTyping}
                className={`rounded-full w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-9 lg:h-9 flex items-center justify-center transition-all duration-300 flex-shrink-0 shadow-lg ${
                  !inputMessage.trim() || isTyping
                    ? "bg-gradient-to-r from-gray-300 to-gray-400 text-white cursor-not-allowed opacity-50"
                    : "bg-gradient-to-r from-secondary to-secondary/80 text-primary hover:from-secondary/90 hover:to-secondary hover:shadow-xl hover:scale-105"
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
