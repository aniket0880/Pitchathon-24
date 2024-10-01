// components/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  imageUrl?: string; // Optional image URL prop
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-lg w-full">
        {imageUrl && ( // Conditionally render the image if provided
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover rounded-lg mb-4" // Image styling
          />
        )}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p>{content}</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
