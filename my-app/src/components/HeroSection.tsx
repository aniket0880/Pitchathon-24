import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative text-white py-32 px-4 md:px-8">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/3253862-uhd_3840_2160_25fps.mp4" // Replace this with the correct path
      />
      
      {/* Overlay for darkening the video */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full text-center"> {/* Center items and text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-semibold mb-4 opacity-90">Welcome to Our Platform</h1>
          <p className="text-lg md:text-xl mb-6 opacity-100">Empowering students and entrepreneurs to build and collaborate on projects.</p>
          <a 
            href="/collab" 
            className="bg-black text-white py-4 px-8 rounded-full text-lg transition duration-300 shadow-md hover:shadow-lg hover:bg-gray-800 mt-12"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
