// components/Card.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  link: string; // Add link prop for navigation
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, buttonText, link }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg p-4">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link to={link}> {/* Wrap button in Link for navigation */}
        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default Card;
