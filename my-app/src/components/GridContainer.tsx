// components/GridContainer.tsx
import React from 'react';
import Card from './Card';
import HeroSection from './HeroSection';
import HighlightSection from './HighlightSection';
import FeaturesSection from './FeaturesSection';

const GridContainer: React.FC = () => {
  return (
    <>
    <HeroSection/>
    <HighlightSection/>
    <FeaturesSection/>

    <div className="max-w-screen-xl mx-auto px-4 py-8">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-[500px]">
        <Card
          title="Collab"
          description="Team up to innovate and create impactful projects.."
          imageUrl="\images\collab3.jpeg" // Make sure this path is correct
          buttonText="Collab Now"
          buttonLink="/collab" // Ensure this points to the collab page
        />
        <Card
          title="Upload"
          description="Share your projects and research with the world!"
          imageUrl="\images\upload-image.jpeg"
          buttonText="Upload your work"
          buttonLink="/support" // Ensure this points to the support page
        />
        <Card
          title="Mentorship"
          description="Connect with experts to guide your journey."
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
