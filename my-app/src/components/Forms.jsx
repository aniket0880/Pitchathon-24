import React, { useState } from 'react';

const ImageUploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0], // Store the first selected file
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) {
      newErrors.title = 'Title is required';
    }
    if (!formData.description) {
      newErrors.description = 'Description is required';
    }
    if (!formData.image) {
      newErrors.image = 'Image is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', formData);
      // Here you can handle the form submission, e.g., send data to an API
      setFormData({ title: '', description: '', image: null }); // Reset form
      setErrors({}); // Clear errors
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
          {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              rows="4"
            />
          </label>
          {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            Image:
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              style={{ marginTop: '5px' }}
            />
          </label>
          {errors.image && <p style={{ color: 'red' }}>{errors.image}</p>}
        </div>

        <button type="submit" style={{ padding: '10px 15px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ImageUploadForm;
