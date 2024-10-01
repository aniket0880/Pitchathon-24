// components/Mentorship.tsx
import React from 'react';

const Mentorship: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Mentorship Program</h1>
      <p className="text-lg mb-6">
        Our Mentorship Program is designed to guide and support individuals looking to grow personally and professionally.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Why Join Our Mentorship Program?</h2>
      <p className="mb-4">
        We believe that everyone deserves guidance. Our mentors are experienced professionals dedicated to sharing their knowledge and helping you achieve your goals.
      </p>
      <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
      <p className="mb-4">
        Participants will be paired with a mentor based on their interests and goals. Together, they will create a personalized plan to foster growth and development.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Get Started</h2>
      <p>
        Ready to take the next step? Apply for our Mentorship Program today!
      </p>
      <p>
        <strong>Email us at: </strong><a href="mailto:info@crowdstudent.com" className="text-blue-600">info@crowdstudent.com</a>
      </p>
    </div>
  );
};

export default Mentorship;
