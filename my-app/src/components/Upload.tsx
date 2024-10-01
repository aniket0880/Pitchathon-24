// components/Support.tsx
import React from 'react';

const Support: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Support Us</h1>
      <p className="text-lg mb-6">
        Your support is crucial to our mission. By contributing to our projects, you help us create lasting change and empower individuals in need.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Ways to Support Us</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Donate: Your financial contributions go a long way in funding our initiatives.</li>
        <li>Volunteer: Join us in our efforts to make a difference in the community.</li>
        <li>Spread the Word: Share our mission with your network to help us reach more people.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
      <p>
        Interested in supporting us? Reach out to learn more about how you can help!
      </p>
      <p>
        <strong>Email us at: </strong><a href="mailto:info@crowdstudent.com" className="text-blue-600">info@crowdstudent.com</a>
      </p>
    </div>
  );
};

export default Support;
