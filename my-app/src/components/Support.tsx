// components/Support.tsx
import React, { useState } from 'react';
import { db } from '../config/firebase.ts'; // Adjust the path as necessary
import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Support: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (title && description && image) {
      try {
        // Upload image to Firebase Storage
        const storage = getStorage();
        const storageRef = ref(storage, `images/${image.name}`);
        
        // Upload file
        await uploadBytes(storageRef, image);
        
        // Get the download URL
        const imageUrl = await getDownloadURL(storageRef);
        
        // Prepare project data
        const projectData = {
          title,
          description,
          imageUrl, // Store the URL in Firestore
          createdAt: new Date(),
        };

        // Add project data to Firestore
        const docRef = await addDoc(collection(db, 'projects'), projectData);
        console.log('Document written with ID: ', docRef.id); // Log document ID

        // Reset form
        setTitle('');
        setDescription('');
        setImage(null);
        setMessage('Project submitted successfully!');
      } catch (error) {
        console.error('Error adding document: ', error);
        setMessage('There was an error submitting your project.');
      }
    } else {
      setMessage('Please fill all the fields and upload an image.');
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Innovate Hub</h1>
      <p className="text-lg mb-6">
        Share your innovative research and projects with our community. By uploading your work, you contribute to collaborative efforts that empower students and foster creativity.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Submit Your Project Image</h2>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="title">Project Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your project title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="description">Project Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            rows={4}
            placeholder="Describe your project"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="image">Upload Project Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit Project
        </button>
        {message && <p className="mt-4 text-lg text-green-600">{message}</p>}
      </form>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Ways to Support Us</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Donate: Your financial contributions go a long way in funding our initiatives.</li>
        <li>Volunteer: Join us in our efforts to make a difference in the community.</li>
        <li>Spread the Word: Share our mission with your network to help us reach more people.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
      <p>Interested in supporting us? Reach out to learn more about how you can help!</p>
      <p>
        <strong>Email us at: </strong>
        <a href="mailto:info@crowdstudent.com" className="text-blue-600">info@crowdstudent.com</a>
      </p>
    </div>
  );
};

export default Support;
