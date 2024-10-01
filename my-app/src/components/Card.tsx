// components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, buttonText, onButtonClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      {/* Heading */}
      <h2 className="text-xl font-bold p-4">{title}</h2>
      {/* Image */}
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      {/* Description */}
      <p className="p-4 text-gray-700">{description}</p>
      {/* Button */}
      <button 
        className="bg-blue-600 text-white py-2 rounded mb-4 mx-4"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
