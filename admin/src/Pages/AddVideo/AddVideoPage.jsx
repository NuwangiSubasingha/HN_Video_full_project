// AddVideoPage.jsx
import React, { useState } from 'react';
import axios from 'axios';

function AddVideoPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('video', videoFile);

    try {
      await axios.post('http://localhost:5000/api/videos', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Video uploaded successfully!');
      setTitle('');
      setDescription('');
      setVideoFile(null);
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    }
  };

  return (
  <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-cyan-200 px-4">
  <form
    onSubmit={handleSubmit}
    className="bg-white shadow-2xl rounded-3xl p-10 max-w-2xl w-full transition-transform duration-500 ease-in-out transform hover:scale-[1.02] animate-fade-in"
  >
    <h2 className="text-4xl font-bold text-green-700 mb-8 text-center drop-shadow">
      Add New Video
    </h2>

    <input
      type="text"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      required
      className="block w-full p-4 mb-6 text-lg text-black rounded-xl border border-green-500 focus:ring-2 focus:ring-green-400 outline-none transition"
    />

    <textarea
      placeholder="Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      required
      className="block w-full p-4 mb-6 text-lg text-black rounded-xl border border-green-500 focus:ring-2 focus:ring-green-400 outline-none transition min-h-[120px]"
    />

    <input
      type="file"
      accept="video/*"
      onChange={(e) => setVideoFile(e.target.files[0])}
      required
      className="block w-full mb-8 text-md"
    />

    <button
      type="submit"
      className="w-full py-3 bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] hover:from-[#3AAFA9] hover:to-[#2B7A78] text-[#FEFFFF] font-semibold rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
    >
      Upload Video
    </button>
  </form>

  <style>
    {`
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 0.6s ease-out;
      }
    `}
  </style>
</div>
  );

}

export default AddVideoPage;
