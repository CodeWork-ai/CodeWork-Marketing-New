import React from "react";
import { FaCloud, FaMobileAlt, FaCode, FaCogs, FaBrain, FaLaptopCode, FaUserPlus, FaShieldAlt, FaTools, FaLock } from "react-icons/fa";
import Link from "next/link"; 

const services = [
  {
    icon: <FaBrain className="text-indigo-500 text-4xl" />,
    title: "AI Model Training",
    description:
      "Optimizing machine learning models with expertise in deep learning, neural networks, and computer vision.",
    color: "text-indigo-500",
    link: "/ai-model-training"
  },
  {
    icon: <FaCode className="text-blue-500 text-4xl" />,
    title: "Software Development",
    description:
      "Creating robust and scalable software to meet business needs with speed and accuracy.",
    color: "text-blue-500",
    link: "/software-development-service"
  },
  {
    icon: <FaCogs className="text-green-500 text-4xl" />,
    title: "Custom Software Development",
    description:
      "Tailored software solutions to match specific business processes and goals.",
    color: "text-green-500",
    link: "/custom-software-development"
  },
  {
    icon: <FaMobileAlt className="text-yellow-500 text-4xl" />,
    title: "Mobile Software Development",
    description:
      "Intuitive iOS and Android apps designed for exceptional user engagement.",
    color: "text-yellow-500",
    link: "/mobile-software-development"
  },
  {
    icon: <FaLaptopCode className="text-red-500 text-4xl" />,
    title: "Web Designing",
    description:
      "Stunning and user-friendly websites providing a seamless user experience.",
    color: "text-red-500",
    link: "/web-design-service"
  },
  {
    icon: <FaCloud className="text-purple-500 text-4xl" />,
    title: "Cloud Computing",
    description:
      "Secure and scalable solutions leveraging AWS, Azure, and API integrations.",
    color: "text-purple-500",
    link: "/cloud-computing"
  },
  {
    icon: <FaUserPlus className="text-teal-500 text-4xl" />,
    title: "IT Staff Augmentation",
    description:
      "Building reliable offshore teams with skilled professionals to scale your projects.",
    color: "text-teal-500",
    link: "/it-staff-service"
  },
  {
    icon: <FaShieldAlt className="text-orange-500 text-4xl" />,
    title: "Cybersecurity Services",
    description:
      "Protect your business with advanced cybersecurity solutions, ensuring data integrity and safety.",
    color: "text-orange-500",
    link: "/cybersecurity-service"
  },
  {
    icon: <FaLock className="text-purple-300 text-4xl"/>,
    title: "Penetration Testing",
    description:
      "Identify vulnerabilities before attackers do with our comprehensive penetration testing services.",
    color: "text-purple-300",
    link: "/penetration-testing"
  },
  {
    icon: <FaTools className="text-gray-200 text-4xl" />,
    title: "DevOps Solutions",
    description:
      "Streamline development and operations with our efficient DevOps practices and tools.",
    color: "text-gray-200",
    link: "/devops-solutions"
  }
];

const ServiceCard = ({ icon, title, description, color, link }) => {  
  return (
    <div className="flex flex-col items-center text-center p-6 bg-black bg-opacity-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <Link href={link} passHref>
        <div className="w-full h-full cursor-pointer flex flex-col items-center">
          <div className="mb-4 animate-bounce flex justify-center">{icon}</div>
          <h3 className={`text-xl font-semibold mb-2 ${color}`}>{title}</h3>
          <p className="text-gray-200">{description}</p>
        </div>
      </Link>
    </div>
  );
};

const Services = () => {
  return (
    <section className="bg-black bg-opacity-25 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-200 text-center mb-8 animate-fade-in">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              link={service.link}  
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
