// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
// import Image from "next/image";

// const ChatBot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       text: "Minimum text check, Hide check icon",
//       sender: "bot",
//       timestamp: "7:20",
//     },
//     {
//       id: 2,
//       text: "Rapidly build stunning Web Apps with Frest✨\nDeveloper friendly, Highly customizable & Carefully crafted HTML Admin Dashboard Template.",
//       sender: "bot",
//       timestamp: "7:20",
//     },
//     {
//       id: 3,
//       text: "More no. of lines text and showing complete list of features like time stamp + check icon READ",
//       sender: "bot",
//       timestamp: "7:20",
//     },
//   ]);
//   const [inputMessage, setInputMessage] = useState("");
//   const chatContainerRef = useRef(null);

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     if (inputMessage.trim() === "") return;

//     const newMessage = {
//       id: messages.length + 1,
//       text: inputMessage,
//       sender: "user",
//       timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//     };

//     setMessages([...messages, newMessage]);
//     setInputMessage("");

//     // Simulate bot response
//     setTimeout(() => {
//       const botResponse = {
//         id: messages.length + 2,
//         text: "Thank you for your message. This is a demo response from the chatbot.",
//         sender: "bot",
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//       };
//       setMessages((prevMessages) => [...prevMessages, botResponse]);
//     }, 1000);
//   };

//   useEffect(() => {
//     // Scroll to bottom when messages change
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [messages]);

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       {/* Chat Button */}
//       <button
//         onClick={toggleChat}
//         className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300"
//         aria-label="Open chat"
//       >
//         {isOpen ? <FaTimes size={20} /> : <FaRobot size={24} />}
//       </button>

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col transition-all duration-300 border border-gray-200">
//           {/* Chat Header */}
//           <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
//             <div className="flex items-center">
//               <div className="bg-white rounded-full p-1 mr-3">
//                 <FaRobot className="text-blue-600" size={20} />
//               </div>
//               <div>
//                 <h3 className="font-medium">Main Title</h3>
//                 <div className="flex items-center text-xs">
//                   <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
//                   <span>Online</span>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={toggleChat}
//               className="text-white hover:text-gray-200 transition-colors"
//               aria-label="Close chat"
//             >
//               <FaTimes size={18} />
//             </button>
//           </div>

//           {/* Chat Messages */}
//           <div
//             ref={chatContainerRef}
//             className="flex-1 p-4 overflow-y-auto max-h-96 bg-gray-50"
//           >
//             {messages.map((message) => (
//               <div
//                 key={message.id}
//                 className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
//               >
//                 {message.sender === "bot" && (
//                   <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mr-2">
//                     <FaRobot className="text-white" size={16} />
//                   </div>
//                 )}
//                 <div
//                   className={`max-w-[80%] rounded-lg p-3 ${message.sender === "user" ? "bg-blue-100 text-gray-800" : "bg-gray-200 text-gray-800"}`}
//                 >
//                   <div className="whitespace-pre-line">{message.text}</div>
//                   <div className="text-xs text-gray-500 mt-1 flex items-center justify-end">
//                     {message.timestamp}
//                     {message.sender === "bot" && (
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-3 w-3 ml-1 text-green-500"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     )}
//                   </div>
//                 </div>
//                 {message.sender === "user" && (
//                   <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center ml-2 overflow-hidden">
//                     <Image
//                       src="/user-avatar.png"
//                       alt="User"
//                       width={32}
//                       height={32}
//                       className="object-cover"
//                       onError={(e) => {
//                         e.target.src = "https://via.placeholder.com/32";
//                       }}
//                     />
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Quick Actions */}
//           <div className="bg-gray-100 p-2 flex justify-center space-x-2 text-sm">
//             <button className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
//               👋 What is WappGPT?
//             </button>
//             <button className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
//               💰 Pricing
//             </button>
//             <button className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
//               📚 FAQs
//             </button>
//           </div>

//           {/* Chat Input */}
//           <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-200 flex items-center">
//             <input
//               type="text"
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               placeholder="Type your message here..."
//               className="flex-1 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//             <button
//               type="submit"
//               className="ml-2 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition-colors"
//               aria-label="Send message"
//             >
//               <FaPaperPlane size={16} />
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBot;