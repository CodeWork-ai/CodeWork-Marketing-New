import React from "react";

const FeatureHighlights = () => {
  const features = [
    {
      title: "Punctual Deliveries",
      description: "Codework completes projects on time, ensuring smooth operations and consistent progress."
    },
    {
      title: "Transparent Pricing",
      description: "With no hidden charges, every project is handled clearly and honestly."
    },
    {
      title: "Support You Can Count On",
      description: "Our friendly team is dedicated to providing exceptional assistance every step of the way."
    }
  ];

  return (
    <div className="p-2 font-sans">
      <h2 className="text-center text-2xl font-bold mb-6">Why Choose Us?</h2>
      <div className="space-y-6">
        {features?.map((feature, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-base md:text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-200 text-sm md:text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureHighlights;
