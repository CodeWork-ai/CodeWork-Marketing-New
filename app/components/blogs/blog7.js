// pages/blog3.jsx
import React from "react";
import Image from "next/image";
import { FiClock } from "react-icons/fi";

const Blog7 = () => {
  return (
    <div className="bg-gradient-to-b from-[#FBF8E6] to-[#EBF9FF] py-12 pt-40">
      <div className="max-w-screen-lg mx-auto">
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Revolutionizing Virtual Colonoscopy: The Tech Behind Radi Insight 3D’s 3D Imaging Breakthrough
        </h1>

        {/* FEATURE IMAGE */}
        <div className="relative w-full h-[400px] border-4 border-cyan-300 border-t-0 border-l-0 rounded-lg overflow-hidden mb-6">
          <Image
            src="/blog/blog7.jpg"
            alt="Radi Insight 3D Virtual Colonoscopy"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* META (avatar, category, date) */}
        <div className="flex items-center text-sm text-gray-500 mb-10 space-x-3">
          <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-extrabold">
            F
          </div>
          <span className="uppercase">Felista Johnbritto</span>
          <span>•</span>
          <div className="flex items-center">
            <FiClock className="mr-1" />
            <span>29 May 2025</span>
          </div>
        </div>

        {/* INTRODUCTION */}
        <p className="text-gray-700 text-xl leading-relaxed mb-6">
          Colorectal cancer remains one of the leading causes of cancer-related deaths globally. The introduction of virtual colonoscopy through CT colonography offers a non-invasive, patient-friendly diagnostic alternative. Radi Insight 3D emerges as a next-generation platform integrating DICOM-to-3D visualization, automated study workflows, and AI-driven segmentation, redefining how radiologists and imaging technicians collaborate.
        </p>

        {/* Bridging the Gap */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bridging the Gap in Digital Diagnostic Workflows</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Despite advancements in digital health, fragmented systems, limited interoperability, and the complexity of DICOM data have hindered the scalable implementation of virtual colonoscopy. Radi Insight 3D addresses this gap by developing a seamless, integrated ecosystem powered by middleware connectors and intelligent data orchestration.
        </p>

        {/* Key Technologies */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Technologies Driving Radi Insight 3D</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-1">
          <li>
            <strong>Advanced DICOM-to-3D Model Conversion:</strong> Radi Insight 3D converts axial, coronal, and sagittal scan views into an immersive 3D fly-through, significantly enhancing the detection of abnormalities during screenings.
          </li>
          <li>
            <strong>Secure and Scalable API-Driven DICOM Ingestion:</strong> Using a fully scripted and audited pipeline, Radi Insight 3D automates bulk retrieval of DICOM studies from PACS systems, ensuring speed and regulatory compliance.
          </li>
          <li>
            <strong>Role-Based Workflow Management:</strong> A granular access system ensures that administrators, operations managers, assistants, radiologists, and technicians work within secure, clearly defined boundaries, enhancing data protection and efficiency.
          </li>
          <li>
            <strong>Vendor Integration via Custom Middleware:</strong> Radi Insight 3D integrates effortlessly with PowerShare, PowerScribe, and Viatronix through custom adapters that standardize data formats and manage token authentication, ensuring smooth and efficient communication.
          </li>
          <li>
            <strong>AI-Driven Organ Segmentation:</strong> A customized 3D U-Net model, trained using Dice and boundary-aware loss functions, delivers accurate segmentation of the colon lumen and outer walls, even across scans of varying quality.
          </li>
        </ul>

        {/* Engineering for Accuracy */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Engineering for Medical-Grade Accuracy</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The intricacies of colorectal anatomy, combined with image noise and patient-specific variations, pose major technical challenges. Radi Insight 3D’s segmentation model and data augmentation strategies enable consistent output, reducing false negatives and increasing screening reliability.
        </p>

        {/* Conclusion */}
        <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Radi Insight 3D represents a milestone in medical imaging innovation, enabling scalable, high-precision virtual colonoscopies. The platform fulfills the vision of intelligent colorectal cancer screening by integrating domain-focused AI, secure system integration, and user-friendly role-based workflows.
        </p>
      </div>
    </div>
  );
};

export default Blog7;
