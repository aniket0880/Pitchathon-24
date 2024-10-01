// components/GridContainer.tsx
import React from 'react';
import Card from './Card';

const GridContainer: React.FC = () => {
  return (
    <>
    <h1 className='text-4xl underline'>Welcome, to our website!</h1>
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">OUR MVP</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="Collab"
          description="Description for project 1. Get involved and support this initiative."
          imageUrl="images/collab-image.jpeg" // Make sure this path is correct
          buttonText="Collab Now"
          buttonLink="/collab" // Ensure this points to the collab page
        />
        <Card
          title="Upload"
          description="Description for project 2. Join us in making a difference."
          imageUrl="\images\upload-image.jpeg"
          buttonText="Upload your work"
          buttonLink="/support" // Ensure this points to the support page
        />
        <Card
          title="Mentorship"
          description="Description for project 3. Your contribution matters."
          imageUrl="images/mentorship-image.jpeg" // Make sure this path is correct
          buttonText="Get Mentorship"
          buttonLink="/mentorship" // Ensure this points to the mentorship page
        />
      </div>
    </div>
    </>
  );
};

export default GridContainer;
