"use client";
import React, { useEffect, useRef, useState } from "react";
// API endpoint configuration with backward-compatible fallback
const API_ENDPOINTS = {
  ASK_STREAM: process.env.NEXT_PUBLIC_CHATBOT_ENDPOINT || "https://prod-api.codework.ai/api/v1/ask-stream",
};

// Utility: make URLs clickable anchor tags
const linkifyUrls = (text) => {
  const urlRegex = /(https?:\/\/[^\s<]+)/g;
  return text.replace(urlRegex, (url) => {
    const cleanUrl = url.replace(/[`'\"]/g, "");
    return `<a href="${cleanUrl}" class="text-blue-500" target="_blank" rel="noopener noreferrer">${cleanUrl}</a>`;
  });
};

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

  // Strip any SSE 'data:' prefixes line-by-line and normalize
  responseText = responseText
    .split(/\r?\n/)
    .map((line) => line.replace(/^data:\s*/, "").trim())
    .filter((line) => line && line !== "[DONE]")
    .join("\n");

  // Replace backticked URLs and linkify
  responseText = responseText.replace(/`(https?:\/\/[^`\s]+)`/g, "$1");
  responseText = linkifyUrls(responseText);

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

// Enhanced Typing Animation Component with Brand Colors
const TypingAnimation = () => {
  return (
    <div className="flex items-center space-x-1 p-2 xs:p-2.5 sm:p-3 md:p-3 lg:p-4">
      <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-1.5 flex-shrink-0 overflow-hidden border-2 border-secondary/30 shadow-lg">
        <img 
          src="/chaticon.svg" 
          alt="Chat Bot" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="bg-primary/30 backdrop-blur-xl border border-white/20 rounded-xl p-3 shadow-xl">
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
  const [showPromotion, setShowPromotion] = useState(true); // New state for promotion banner
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

  const toggleChat = () => {
    setIsOpen(!isOpen);
    // Hide promotion when chat is opened
    if (!isOpen) {
      setShowPromotion(false);
    }
  };

  const dismissPromotion = () => {
    setShowPromotion(false);
  };

  // Handle banner click to open chat
  const handleBannerClick = () => {
    setIsOpen(true);
    setShowPromotion(false);
  };

  // Auto-hide promotion after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPromotion(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

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

      const response = await fetch(API_ENDPOINTS.ASK_STREAM, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/event-stream',
        },
        body: JSON.stringify({
          question: question,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let combinedAnswer = '';
      let finalUrl = null;

      // Prefer streaming reader when available
      const reader = response.body && response.body.getReader ? response.body.getReader() : null;
      if (reader) {
        const decoder = new TextDecoder();
        let doneReading = false;

        while (!doneReading) {
          const { value, done } = await reader.read();
          if (done) break;
          const chunkText = decoder.decode(value, { stream: true });

          // Process SSE lines
          const lines = chunkText.split(/\r?\n/);
          for (const rawLine of lines) {
            const line = rawLine.trim();
            if (!line.startsWith('data:')) continue;

            const payload = line.replace(/^data:\s*/, '');
            if (payload === '[DONE]') {
              doneReading = true;
              break;
            }

            try {
              const json = JSON.parse(payload);
              if (json.answer) {
                combinedAnswer += json.answer.endsWith('\n') ? json.answer : json.answer + '\n';
              }
              if (json.url) {
                const clean = String(json.url).replace(/[`'\"]/g, '').trim();
                if (clean) finalUrl = clean;
              }
            } catch {
              // Not JSON, append raw text (without 'data:') and ensure newline
              combinedAnswer += payload + '\n';
            }
          }
        }
      } else {
        // Fallback: non-streaming
        const data = await response.text();
        // Try to parse as JSON, fallback to text
        try {
          const jsonData = JSON.parse(data);
          combinedAnswer = jsonData.answer || jsonData.response || jsonData.message || data;
          if (jsonData.url) {
            const clean = String(jsonData.url).replace(/[`'\"]/g, '').trim();
            if (clean) finalUrl = clean;
          }
        } catch {
          combinedAnswer = data;
        }
      }

      const formattedText = formatBotResponse(combinedAnswer);
      const finalHtml = finalUrl
        ? `${formattedText}<br>Learn more: <a href="${finalUrl}" class="text-blue-500" target="_blank" rel="noopener noreferrer">${finalUrl}</a>`
        : formattedText;

      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: finalHtml,
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);

    } catch (error) {
      console.error("❌ API error:", error);

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
      {/* Enhanced Custom Styles with Brand Colors */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(5, 12, 37, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(29, 223, 234, 0.6);
          border-radius: 3px;
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
            opacity: 0.6;
          }
          100% {
            transform: scale(2.8);
            opacity: 0;
          }
        }

        .wave-container:hover .wave-animation {
          animation: wave 2s infinite;
        }

        .wave-container:hover .wave-animation:nth-child(2) {
          animation-delay: 0.5s;
        }

        .wave-container:hover .wave-animation:nth-child(3) {
          animation-delay: 1s;
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
          animation: slideInLeft 0.5s ease-out;
        }

        .message-slide-right {
          animation: slideInRight 0.5s ease-out;
        }

        /* Enhanced Submit Button Animation */
        @keyframes bounce-submit {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-2px) scale(1.05);
          }
        }

        .bounce-submit {
          animation: bounce-submit 0.8s ease-in-out infinite;
        }

        /* Chat Icon Pulse with Brand Colors */
        @keyframes chat-pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(29, 223, 234, 0.4);
          }
          50% {
            transform: scale(1.08);
            box-shadow: 0 0 35px rgba(29, 223, 234, 0.7);
          }
        }

        .chat-pulse {
          animation: chat-pulse 2.5s ease-in-out infinite;
        }

        /* Floating Background Animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-4px) rotate(1deg); }
          66% { transform: translateY(-2px) rotate(-0.5deg); }
        }

        .float-animation {
          animation: float 4s ease-in-out infinite;
        }

        /* Enhanced Glow Effect */
        .glow-effect {
          box-shadow: 0 0 25px rgba(29, 223, 234, 0.1), 
                      0 0 50px rgba(29, 223, 234, 0.1),
                      0 0 75px rgba(29, 223, 234, 0.1);
        }

        /* Chat Window Animation */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .slide-in-up {
          animation: slideInUp 0.4s ease-out;
        }

        /* Quick Action Hover */
        @keyframes quick-action-hover {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-3px) scale(1.05); }
          100% { transform: translateY(0) scale(1); }
        }

        .quick-action-animate:hover {
          animation: quick-action-hover 0.4s ease-in-out;
        }

        /* Promotion Banner Animations */
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slideOutToRight {
          from {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateX(100px) scale(0.9);
          }
        }

        .promotion-slide-in {
          animation: slideInFromRight 0.6s ease-out;
        }

        .promotion-slide-out {
          animation: slideOutToRight 0.4s ease-in forwards;
        }

        @keyframes gentle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        .gentle-bounce {
          animation: gentle-bounce 2s ease-in-out infinite;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }

        .wiggle-animation {
          animation: wiggle 1s ease-in-out infinite;
        }

        /* Banner Click Hover Effect */
        @keyframes banner-hover {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-2px) scale(1.02); }
          100% { transform: translateY(0) scale(1); }
        }

        .banner-clickable:hover {
          animation: banner-hover 0.3s ease-in-out;
          cursor: pointer;
        }
      `}</style>

      {/* Updated Promotional Banner - With Rounder Corners */}
{showPromotion && !isOpen && (
  <div className="fixed bottom-20 right-4 xs:bottom-24 xs:right-6 sm:bottom-28 sm:right-8 md:bottom-32 md:right-10 lg:bottom-28 lg:right-7 z-40 promotion-slide-in">
    <div 
      onClick={handleBannerClick}
      className="relative bg-gradient-to-r from-primary/95 to-primary/90 backdrop-blur-xl border-2 border-secondary/30 rounded-[25px] p-4 shadow-2xl max-w-[200px] xs:max-w-[290px] sm:max-w-[260px] glow-effect gentle-bounce banner-clickable"
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent banner click when closing
          dismissPromotion();
        }}
        className="absolute -top-2 -right-2 w-6 h-6 bg-secondary hover:bg-secondary/80 text-primary rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 hover:scale-110 shadow-lg border-2 border-white/20 z-10"
      >
        ×
      </button>

      {/* Content - Updated to match your image exactly */}
      <div className="text-white text-center">
        <h4 className="font-mono text-base xs:text-lg mb-0 leading-tight">
          Hi There 👋, Welcome to CODEWORK AI
        </h4>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-2 right-8 w-2 h-2 bg-secondary/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-3 left-3 w-1 h-1 bg-secondary/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>
  </div>
)}

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
            className={`text-black rounded-full w-12 h-12 xs:w-14 xs:h-14 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-[70px] lg:h-[70px] flex items-center justify-center transition-all duration-500 relative z-10 ${
              isOpen ? 'chat-pulse' : 'float-animation'
            } ${!isOpen ? 'glow-effect' : ''}`}
            aria-label="Toggle chat"
          >
            {isOpen ? (
              // Enhanced Close icon with brand gradient
              <span className="w-full h-full flex items-center justify-center rounded-full bg-gradient-to-r from-primary via-secondary/80 to-primary shadow-2xl border-2 border-secondary/30">
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
              // Enhanced Video with brand border
              <div className="w-10 h-10 xs:w-14 xs:h-14 sm:w-14 sm:h-14 md:w-12 md:h-12 lg:w-20 lg:h-20 flex items-center justify-center rounded-full border-3 border-secondary/60 bg-gradient-to-r from-secondary/20 via-secondary/30 to-secondary/20 shadow-2xl backdrop-blur-sm">
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

        {/* Enhanced Chat Window with Brand Colors */}
        {isOpen && (
          <div className="absolute bottom-14 right-0 xs:bottom-16 xs:right-0 sm:bottom-18 sm:right-0 md:bottom-20 md:right-0 lg:bottom-20 lg:right-0 w-[300px] xs:w-[320px] sm:w-[360px] md:w-[360px] lg:w-[360px] xl:w-[370px] h-[450px] xs:h-[470px] sm:h-[500px] md:h-[387px] lg:h-[450px] xl:h-[470px] bg-primary/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col border-2 border-secondary/20 slide-in-up glow-effect">
            
            {/* Enhanced Header with Brand Colors */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white p-4 flex items-center rounded-t-3xl flex-shrink-0 shadow-lg border-b border-secondary/20">
              {/* Enhanced Profile Image */}
              <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-3 flex-shrink-0 overflow-hidden border-2 border-secondary/40 shadow-xl">
                <img 
                  src="/chaticon.svg" 
                  alt="chat icon" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            
              {/* Enhanced Text Content */}
              <div className="flex flex-col min-w-0 flex-1">
                <h3 className="font-semibold text-lg leading-tight text-white drop-shadow-sm">
                  <span className="text-white">CODE</span>WORK AI
                </h3>
                <p className="text-xs opacity-90 leading-tight text-white/80">
                  AI Assistant • <span className="text-secondary">Online</span>
                </p>
              </div>

              {/* Enhanced Status Indicator */}
              <div className="w-4 h-4 bg-secondary rounded-full animate-pulse shadow-lg border-2 border-white/20"></div>
            </div>

            {/* Enhanced Messages Container */}
            <div
              ref={chatContainerRef}
              className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-primary/20 to-primary/40 custom-scrollbar backdrop-blur-sm"
              style={{ 
                height: 'calc(100% - 200px)',
                minHeight: '200px',
                maxHeight: '300px'
              }}
            >
              {messages.map((msg, index) => (
                <div
                  key={msg.id}
                  className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"} ${
                    msg.sender === "user" ? "message-slide-right" : "message-slide-left"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-2 flex-shrink-0 overflow-hidden border-2 border-secondary/30 shadow-lg">
                      <img 
                        src="/chaticon.svg" 
                        alt="Bot" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] rounded-2xl p-2 shadow-lg backdrop-blur-sm ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-secondary to-secondary/80 text-primary text-right border border-secondary/20"
                        : "bg-white/10 border border-white/20 text-white"
                    }`}
                  >
                    <div
                      className={`text-sm leading-relaxed break-words ${
                        msg.sender === "user" ? "text-primary font-medium" : "text-white/90"
                      }`}
                      dangerouslySetInnerHTML={{ __html: msg.text }}
                    />
                  </div>
                </div>
              ))}
            
              {/* Enhanced Typing Animation */}
              {isTyping && (
                <div className="mb-4 flex justify-start message-slide-left">
                  <TypingAnimation />
                </div>
              )}
            </div>
         
            {/* Enhanced Quick Actions */}
            <div className="bg-primary/30 backdrop-blur-sm flex-shrink-0 border-t border-white/10">
              <div
                ref={quickActionsRef}
                className="flex gap-3 overflow-x-auto quick-actions-scroll py-3 px-3"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action)}
                    className="px-2 py-2 bg-secondary/20 border border-secondary/40 text-secondary rounded-xl text-xs whitespace-nowrap hover:bg-secondary/30 hover:border-secondary/60 hover:scale-105 transition-all duration-300 flex-shrink-0 quick-action-animate shadow-sm font-medium backdrop-blur-sm"
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
              className="px-4 pt-3 pb-4 bg-primary/40 backdrop-blur-sm border-t border-white/10 flex items-center gap-3"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                disabled={isTyping}
                className="flex-1 border-2 border-white/20 text-white placeholder-white/60 bg-white/10 backdrop-blur-sm rounded-xl py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 text-sm transition-all disabled:opacity-50 shadow-sm"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isTyping}
                className={`rounded-xl w-10 h-10 flex items-center justify-center transition-all duration-300 flex-shrink-0 shadow-lg backdrop-blur-sm ${
                  !inputMessage.trim() || isTyping
                    ? "bg-white/20 text-white/40 cursor-not-allowed opacity-50 border border-white/20"
                    : "bg-gradient-to-r from-secondary to-secondary/80 text-primary hover:from-secondary/90 hover:to-secondary hover:shadow-xl hover:shadow-secondary/25 hover:scale-110 border border-secondary/20"
                } ${isSubmitting ? 'bounce-submit' : ''}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-300 ${
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

// (moved to top)
