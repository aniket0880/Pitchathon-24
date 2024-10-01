// components/Collab.tsx
import React from 'react';

const Collab: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Collaboration Opportunities</h1>
      <p className="text-lg mb-6">
        Welcome to our Collaboration page! We are excited to work with individuals and organizations who share our vision of making a positive impact in our community.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Why Collaborate With Us?</h2>
      <p className="mb-4">
        Collaborating with us provides an opportunity to leverage your skills and resources for meaningful projects. Together, we can create innovative solutions and drive change.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Get Involved</h2>
      <p className="mb-4">
        If you're interested in collaborating with us, please reach out! We are open to partnerships in various areas, including education, community service, and social entrepreneurship.
      </p>
      <p>
        <strong>Email us at: </strong><a href="mailto:info@crowdstudent.com" className="text-blue-600">info@crowdstudent.com</a>
      </p>
    </div>
  );
};

export default Collab;
