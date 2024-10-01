import React, { useState } from 'react';

interface Mentor {
  name: string;
  expertise: string;
  bio: string;
}

const mentorshipData: Record<string, Mentor[]> = {
  Technology: [
    {
      name: "Alex Johnson",
      expertise: "Software Engineer",
      bio: "Alex has over 8 years of experience in full-stack development.",
    },
    {
      name: "Monica Lee",
      expertise: "Data Scientist",
      bio: "Monica specializes in machine learning and AI solutions.",
    },
  ],
  HealthcareMedTech: [
    {
      name: "Dr. James Carter",
      expertise: "Biomedical Engineer",
      bio: "Dr. Carter designs medical devices and software for patient care.",
    },
    {
      name: "Dr. Emily Wong",
      expertise: "Health Informatics Specialist",
      bio: "Emily has expertise in improving healthcare through technology.",
    },
  ],
  CreativeArtsDesign: [
    {
      name: "Sophia Martinez",
      expertise: "Graphic Designer",
      bio: "Sophia has worked on multiple branding projects for startups and global brands.",
    },
    {
      name: "Michael Green",
      expertise: "Video Production Specialist",
      bio: "Michael has over 12 years of experience in film and video editing.",
    },
  ],
  EducationEdTech: [
    {
      name: "Dr. Amanda Scott",
      expertise: "EdTech Consultant",
      bio: "Dr. Scott helps institutions integrate technology in classrooms.",
    },
    {
      name: "Jacob Williams",
      expertise: "Online Course Developer",
      bio: "Jacob develops engaging online courses for various educational platforms.",
    },
  ],
  AgricultureFoodTech: [
    {
      name: "Dr. Robert Clark",
      expertise: "Agricultural Technologist",
      bio: "Robert specializes in precision agriculture using modern tech solutions.",
    },
    {
      name: "Laura Turner",
      expertise: "Food Technologist",
      bio: "Laura works on innovations in sustainable food production and preservation.",
    },
  ],
};

const MentorshipPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Mentorship Program
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Category Selection */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <ul>
            {Object.keys(mentorshipData).map((category) => (
              <li key={category}>
                <button
                  onClick={() => handleCategoryClick(category)}
                  className={`w-full text-left px-4 py-2 rounded-lg mb-2 ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                  style={{ display: 'flex', alignItems: 'center', width: '100%', flexDirection: 'column' }} // Flex column to stack image and text
                >
                  {/* Placeholder for Images */}
                  {category === "Technology" && <img src="images/technology.jpeg" alt="Technology Icon" className="mb-2" />}
                  {category === "HealthcareMedTech" && <img src="images/HealthcareMedTech.jpeg" alt="Healthcare Icon" className="mb-2" />}
                  {category === "CreativeArtsDesign" && <img src="images/CreativeArtsDesign.jpeg" alt="Creative Arts Icon" className="mb-2" />}
                  {category === "EducationEdTech" && <img src="images/EducationEd.jpeg" alt="Education Icon" className="mb-2" />}
                  {category === "AgricultureFoodTech" && <img src="images/Agriculture.jpeg" alt="Agriculture Icon" className="mb-2" />}

                  <span>{category}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mentor Details */}
        <div className="col-span-2 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            {selectedCategory ? `${selectedCategory} Mentors` : 'Select a Category'}
          </h2>
          {selectedCategory && (
            <div className="space-y-6">
              {mentorshipData[selectedCategory as keyof typeof mentorshipData].map(
                (mentor, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">{mentor.name}</h3>
                    <p className="text-gray-700">{mentor.expertise}</p>
                    <p className="text-gray-600 mt-2">{mentor.bio}</p>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorshipPage;
