import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = ({ packageId, user, onSubmitted }) => {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
const [reloadFeedback, setReloadFeedback] = useState(false);

  const handleSubmit = async () => {
    try {
      await axios.post('/api/feedback', {
        packageId,
        comment,
        name,
      }, {
        headers: { Authorization: `Bearer ${user.token}` }, // if using JWT
      });

      setMessage('Feedback submitted!');
      setComment('');
      onSubmitted(); // refresh feedback list
    } catch (error) {
      setMessage('Failed to submit feedback.');
    }
  };
  
 const handleFeedbackSubmitted = () => {
    setReloadFeedback(!reloadFeedback);
  };

  return (
    
    <div className="mt-4 border p-4 rounded bg-white">
      <h3 className="text-3xl font-extrabold text-center text-gray-900 mb-12 tracking-tight drop-shadow-md">Write Something On Us </h3>
 <label className="block text-gray-700 mb-1">Enter your name</label>
  <input
    type="text"
    className="w-full border p-2 mb-4 text-gray-900"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Couple's Name or Team name"
  />
      <textarea
        className="w-full border p-2 mb-2 text-gray-900"
        rows="3"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your feedback..."
      />
      <button onClick={handleSubmit} className="bg-[#2B7A78] text-white px-4 py-2 rounded">
        Submit
      </button>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
};

export default FeedbackForm;
