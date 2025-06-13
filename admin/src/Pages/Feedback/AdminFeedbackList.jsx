import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllFeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllFeedbacks = async () => {
    try {
      const res = await axios.get('/api/feedback'); // fetch all feedback
      setFeedbacks(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching feedback:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllFeedbacks();
  }, []);

  if (loading) return <p>Loading feedback...</p>;

  if (feedbacks.length === 0) return <p>No feedback available.</p>;

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-4">All Customer Feedback</h3>
      {feedbacks.map((fb) => (
  <div key={fb._id} className="border-b pb-2 mb-2">
    <p className="text-sm text-gray-600">
      <strong>{fb.userName}</strong> on {new Date(fb.date).toLocaleDateString()} (Package: {fb.packageId?.name || 'Unknown'})
    </p>
    <p>{fb.comment}</p>
  </div>
))}

    </div>
  );
};

export default AllFeedbackList;
