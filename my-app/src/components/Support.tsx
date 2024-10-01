// components/Support.tsx
import React, { useState } from 'react';

const Support: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<File | null>(null); // For image uploads
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    if (title && description && file && image) {
      setMessage('Project submitted successfully!');
      // Reset form
      setTitle('');
      setDescription('');
      setFile(null);
      setImage(null);
    } else {
      setMessage('Please fill all the fields and upload both a file and an image.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
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

      <h2 className="text-2xl font-semibold mb-4">Submit Your Research or Project</h2>
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
          <label className="block text-lg font-medium mb-2" htmlFor="file">Upload Your Research File</label>
          <input
            type="file"
            id="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-md"
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
