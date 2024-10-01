import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Collaborative Projects",
      description: "Work together with peers on innovative projects to gain real-world experience.",
      icon: "💡", // Replace with actual icon or image if needed
    },
    {
      title: "Funding Opportunities",
      description: "Connect with potential investors to bring your ideas to life and secure funding.",
      icon: "💰", // Replace with actual icon or image if needed
    },
    {
      title: "Mentorship Programs",
      description: "Get guidance from experienced professionals to help you navigate your journey.",
      icon: "👨‍🏫", // Replace with actual icon or image if needed
    },
    {
      title: "Networking Events",
      description: "Join events to meet like-minded individuals and expand your professional network.",
      icon: "🌐", // Replace with actual icon or image if needed
    },
  ];

  return (
    <div className="bg-gray-100 py-20 mt-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
