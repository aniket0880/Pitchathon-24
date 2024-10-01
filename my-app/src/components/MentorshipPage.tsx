import React, { useState } from 'react';

interface Mentor {
  name: string;
  expertise: string;
  bio: string;
}

const mentorshipData: Record<string, Mentor[]> = {
  Health: [
    {
      name: "Dr. Sarah Johnson",
      expertise: "Nutritionist",
      bio: "Sarah has over 10 years of experience helping people with their diets."
    },
    {
      name: "Dr. John Doe",
      expertise: "Physical Therapist",
      bio: "John is a certified physical therapist specializing in rehabilitation."
    }
  ],
  Fitness: [
    {
      name: "Mike Anderson",
      expertise: "Personal Trainer",
      bio: "Mike has trained hundreds of clients to achieve their fitness goals."
    },
    {
      name: "Lisa Thompson",
      expertise: "Yoga Instructor",
      bio: "Lisa is a registered yoga instructor with a focus on mental well-being."
    }
  ],
  MentalHealth: [
    {
      name: "Jane Smith",
      expertise: "Psychologist",
      bio: "Jane specializes in cognitive behavioral therapy."
    },
    {
      name: "Carl Davis",
      expertise: "Counselor",
      bio: "Carl has been a counselor for over 15 years, helping people with anxiety."
    }
  ]
};

const MentorshipPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Mentorship Program</h1>

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
                    selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {category}
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
              {mentorshipData[selectedCategory as keyof typeof mentorshipData].map((mentor, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">{mentor.name}</h3>
                  <p className="text-gray-700">{mentor.expertise}</p>
                  <p className="text-gray-600 mt-2">{mentor.bio}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorshipPage;
