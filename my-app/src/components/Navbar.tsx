// components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="w-full flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          CrowdStudent
        </Link>
        <div className="flex-grow" /> {/* This will push the right items to the end */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-gray-700 font-bold text-2xl transition duration-300 hover:shadow-md hover:bg-gray-100 hover:text-black px-2 py-1 rounded"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-gray-700 font-bold text-2xl transition duration-300 hover:shadow-md hover:bg-gray-100 hover:text-black px-2 py-1 rounded"
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-700 font-bold text-2xl transition duration-300 hover:shadow-md hover:bg-gray-100 hover:text-black px-2 py-1 rounded"
          >
            Contact
          </Link>
          <SignedOut>
            <SignInButton 
              className="text-gray-700 font-bold text-2xl transition duration-300 hover:shadow-md hover:bg-gray-100 hover:text-black px-2 py-1 rounded"
            >
              Log In
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
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
