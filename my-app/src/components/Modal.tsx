// components/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  imageUrl?: string | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[600px] transform transition-transform duration-300 slide-in">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &times; {/* Close button */}
        </button>
        {imageUrl && (
          <img src={imageUrl} alt={title} className="w-full h-64 object-cover rounded mb-4" />
        )}
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-lg">{content}</p>
      </div>
    </div>
  );
};

export default Modal;
