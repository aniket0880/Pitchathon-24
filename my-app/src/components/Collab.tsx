// components/Collab.tsx
import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase.ts'; // Adjust the path as necessary
import { collection, getDocs } from 'firebase/firestore';
import Modal from './Modal';

interface Project {
  id: string; // Use string for Firestore document ID
  title: string;
  description: string;
  imageUrl: string; // Image URL for each project
}

const Collab: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; description: string } | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null); // State for modal image URL
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, 'projects'); // Fetch from 'projects' collection
        const projectSnapshot = await getDocs(projectsCollection);
        const projectList = projectSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Project[];

        setProjects(projectList);
      } catch (err) {
        console.error('Error fetching projects: ', err);
        setError('Failed to load projects.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleCardClick = (project: Project) => {
    setModalContent({ title: project.title, description: project.description });
    setModalOpen(true);
    setModalImage(project.imageUrl); // Set the image URL for the modal
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalContent(null);
    setModalImage(null); // Reset the image URL when closing the modal
  };

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Collaboration Opportunities</h1>
      <p className="text-lg mb-6">
        Welcome to our Collaboration page! We are excited to work with individuals and organizations who share our vision of making a positive impact in our community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
            onClick={() => handleCardClick(project)} // Show modal on card click
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={modalContent?.title || ''}
        content={modalContent?.description || ''}
        imageUrl={modalImage} // Pass the image URL to the Modal
      />

      <h2 className="text-2xl mt-20 font-semibold mb-2">Why Collaborate With Us?</h2>
      <p className="mb-4">
        Collaborating with us provides an opportunity to leverage your skills and resources for meaningful projects. Together, we can create innovative solutions and drive change.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Get Involved</h2>
      <p className="mb-4">
        If you're interested in collaborating with us, please reach out! We are open to partnerships in various areas, including education, community service, and social entrepreneurship.
      </p>
      <p>
        <strong>Email us at: </strong>
        <a href="mailto:info@crowdstudent.com" className="text-blue-600">info@crowdstudent.com</a>
      </p>
    </div>
  );
};

export default Collab;
