// components/Card.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string; // Ensure this prop is present
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, buttonText, buttonLink }) => {
  const navigate = useNavigate(); // Use navigate for routing

  const handleButtonClick = () => {
    navigate(buttonLink); // Navigate to the buttonLink
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden min-h-72 h-full">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <button 
          className="bg-black text-white font-semibold py-2 px-4 rounded transition duration-300 hover:bg-gray-800"
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
