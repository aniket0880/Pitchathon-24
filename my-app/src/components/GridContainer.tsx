// components/GridContainer.tsx
import React from 'react';
import Card from './Card';

const GridContainer: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">OUR MVP</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Collab"
          description="Description for project 1. Get involved and support this initiative."
          imageUrl="\images\collab-image.jpeg"
          buttonText="Collab Now"
          onButtonClick={() => console.log('Project 1 button clicked!')}
        />
        <Card
          title="idk"
          description="Description for project 2. Join us in making a difference."
          imageUrl="https://source.unsplash.com/random/300x200?project2"
          buttonText="Support Now"
          onButtonClick={() => console.log('Project 2 button clicked!')}
        />
        <Card
          title="Mentorship"
          description="Description for project 3. Your contribution matters."
          imageUrl="images\mentorship-image.jpeg"
          buttonText="Get Mentorship"
          onButtonClick={() => console.log('Project 3 button clicked!')}
        />
      </div>
    </div>
  );
};

export default GridContainer;
