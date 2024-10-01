// components/Collab.tsx
import React, { useState } from 'react';
import Modal from './Modal';

interface Collaboration {
  id: number;
  title: string;
  description: string;
  imageUrl: string; // Image URL for each collaboration
}

const collaborations: Collaboration[] = [
  {
    id: 1,
    title: 'Education Partnership',
    description: 'Join us to enhance educational opportunities in our community.',
    imageUrl: 'https://via.placeholder.com/300x200', // Example image URL
  },
  {
    id: 2,
    title: 'Community Service Project',
    description: 'Participate in projects that serve our local community.',
    imageUrl: 'https://via.placeholder.com/300x200', // Example image URL
  },
  {
    id: 3,
    title: 'Social Entrepreneurship',
    description: 'Collaborate on innovative solutions for social issues.',
    imageUrl: 'https://via.placeholder.com/300x200', // Example image URL
  },
];

const Collab: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; description: string } | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null); // State for modal image URL

  const handleCardClick = (collab: Collaboration) => {
    setModalContent({ title: collab.title, description: collab.description });
    setModalOpen(true);
    setModalImage(collab.imageUrl); // Set the image URL for the modal
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalContent(null);
    setModalImage(null); // Reset the image URL when closing the modal
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Collaboration Opportunities</h1>
      <p className="text-lg mb-6">
        Welcome to our Collaboration page! We are excited to work with individuals and organizations who share our vision of making a positive impact in our community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> {/* Adjust gap here for space between cards */}
        {collaborations.map((collab) => (
          <div
            key={collab.id}
            className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
            onClick={() => handleCardClick(collab)} // Show modal on card click
          >
            <img
              src={collab.imageUrl}
              alt={collab.title}
              className="w-full h-48 object-cover rounded-lg mb-4" // Card image styling
            />
            <h3 className="text-xl font-semibold mb-2">{collab.title}</h3>
            <p>{collab.description}</p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={modalContent?.title || ''}
        content={modalContent?.description || ''}
        imageUrl={modalImage} // Pass the image URL to the Modal
      />

      {/* Added margin-top to separate sections */}
      <h2 className="text-2xl mt-20 font-semibold mb-2">Why Collaborate With Us?</h2>
      <p className="mb-4">
        Collaborating with us provides an opportunity to leverage your skills and resources for meaningful projects. Together, we can create innovative solutions and drive change.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Get Involved</h2>
      <p className="mb-4">
        If you're interested in collaborating with us, please reach out! We are open to partnerships in various areas, including education, community service, and social entrepreneurship.
      </p>
      <p>
        <strong>Email us at: </strong>
        <a href="mailto:info@crowdstudent.com" className="text-blue-600">info@crowdstudent.com</a>
      </p>
    </div>
  );
};

export default Collab;
