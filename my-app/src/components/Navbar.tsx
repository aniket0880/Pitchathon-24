import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          CrowdStudent
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-700 hover:text-blue-600"
            >
              Services
            </button>
            {isDropdownOpen && (
              <div className="bg-white shadow-md rounded-md absolute left-0 mt-2 w-40">
                <Link to="/service1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Service 1</Link>
                <Link to="/service2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Service 2</Link>
                <Link to="/service3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Service 3</Link>
              </div>
            )}
          </div>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
