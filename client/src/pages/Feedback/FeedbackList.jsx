// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import Slider from "react-slick";
// // import { motion } from "framer-motion";
// // import "../../pages/Feedback/slick.scss"
// // import "../../pages/Feedback/slick-theme.scss";



// // const AllFeedbackList = () => {
// //   const [feedbacks, setFeedbacks] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchAllFeedbacks = async () => {
// //       try {
// //         const res = await axios.get("/api/feedback");
// //         setFeedbacks(res.data);
// //       } catch (error) {
// //         console.error("Error fetching feedback:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchAllFeedbacks();
// //   }, []);

// //   if (loading) return <p>Loading feedback...</p>;
// //   if (feedbacks.length === 0) return <p>No feedback available.</p>;

// //   const settings = {
// //   dots: true,           // Show navigation dots below
// //   infinite: true,       // Loop slides infinitely
// //   speed: 500,           // Transition speed in ms (0.5 seconds)
// //   slidesToShow: 1,      // Show one slide at a time
// //   slidesToScroll: 1,    // Scroll one slide per swipe/arrow
// //   autoplay: true,       // Enable auto-slide
// //   autoplaySpeed: 4000,  // Auto slide interval (4 seconds)
// //   arrows: false,        // Hide arrows (optional)
// //   pauseOnHover: true,   // Pause auto-slide on mouse hover
// //   cssEase: "ease-in-out"// Smooth slide easing
  
// // };


// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-green-100 to-cyan-200 py-10 px-4 flex flex-col items-center">
// //       <div className="w-full max-w-2xl px-4">
// //         <div className="mb-10 text-center">
// //           <motion.h1
// //             initial={{ opacity: 0, y: -20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="text-5xl font-extrabold text-gray-800 drop-shadow-md"
// //           >
// //             TESTIMONIALS
// //           </motion.h1>

// //           <motion.h2
// //             initial={{ opacity: 0, x: -50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6, delay: 0.3 }}
// //             className="text-2xl font-[Comic_Sans_MS] text-gray-600 drop-shadow-md"
// //           >
// //             WHAT OUR CLIENTS SAY
// //           </motion.h2>
// //         </div>

// //       <Slider {...settings}>
// //           {feedbacks.map((fb) => (
// //             <div key={fb._id} className="px-4">
// //               <div className="p-6 bg-white rounded-xl shadow-md text-center">
// //                 <p className="text-sm text-gray-600 mb-2">
// //                   <strong>{fb.userName}</strong> on{" "}
// //                   {new Date(fb.date).toLocaleDateString()} (Package:{" "}
// //                   {fb.packageId?.name || "Unknown"})
// //                 </p>
// //                 <p className="text-lg italic text-gray-800">"{fb.comment}"</p>
// //               </div>
// //             </div>
// //           ))}
// //         </Slider>

// //       </div>
// //     </div>
// //   );
// // };

// // export default AllFeedbackList;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import "../../pages/Feedback/slick.scss"
// import "../../pages/Feedback/slick-theme.scss";
// import FeedbackForm from "../Feedback/FeedbackForm";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";


// const AllFeedbackList = () => {
//   const [feedbacks, setFeedbacks] = useState([]);
//   const [loading, setLoading] = useState(true);
//  const navigate = useNavigate();
//   const user = useSelector((state) => state.auth.user);
//    const [reloadFeedback, setReloadFeedback] = useState(false);

//   useEffect(() => {
//     const fetchAllFeedbacks = async () => {
//       try {
//         const res = await axios.get("/api/feedback");
//         setFeedbacks(res.data);
//       } catch (error) {
//         console.error("Error fetching feedback:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAllFeedbacks();
//   }, []);

//  const handleWriteFeedback = () => {
//     if (!user) {
//       alert('Please login');
//       navigate('/login');
//     } else {
//       navigate(`/FeedbackForm`);
//     }
//   };

  

//   if (loading) return <p>Loading feedback...</p>;
//   if (feedbacks.length === 0) return <p>No feedback available.</p>;

//   const settings = {
//   dots: true,           // Show navigation dots below
//   infinite: true,       // Loop slides infinitely
//   speed: 500,           // Transition speed in ms (0.5 seconds)
//   slidesToShow: 1,      // Show one slide at a time
//   slidesToScroll: 1,    // Scroll one slide per swipe/arrow
//   autoplay: true,       // Enable auto-slide
//   autoplaySpeed: 4000,  // Auto slide interval (4 seconds)
//   arrows: false,        // Hide arrows (optional)
//   pauseOnHover: true,   // Pause auto-slide on mouse hover
//   cssEase: "ease-in-out"// Smooth slide easing
  
// };
//     const handleFeedbackSubmitted = () => {
//     setReloadFeedback(!reloadFeedback);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-100 to-cyan-200 py-10 px-4 flex flex-col items-center">
//       <div className="w-full max-w-2xl px-4">
//         <div className="mb-10 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-5xl font-extrabold text-gray-800 drop-shadow-md"
//           >
//             TESTIMONIALS
//           </motion.h1>

//           <motion.h2
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="text-2xl font-[Comic_Sans_MS] text-gray-600 drop-shadow-md"
//           >
//             WHAT OUR CLIENTS SAY
//           </motion.h2>
//         </div>

//       <Slider {...settings}>
//           {feedbacks.map((fb) => (
//             <div key={fb._id} className="px-4">
//               <div className="p-6 bg-white rounded-xl shadow-md text-center">
//                 <p className="text-sm text-gray-600 mb-2">
//                   <strong>{fb.userName}</strong> on{" "}
//                   {new Date(fb.date).toLocaleDateString()} (Package:{" "}
//                   {fb.packageId?.name || "Unknown"})
//                 </p>
//                 <p className="text-lg italic text-gray-800">"{fb.comment}"</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//          < br/> 
// {/* 
//                 <button
//                   onClick={handleWriteFeedback}
//                   className="bg-[#2B7A78] border-2 border-[#3AAFA9] text-[#FEFFFF] py-2 px-6 rounded-lg shadow-md hover:bg-[#3AAFA9] text-base font-medium"
//                 >
//                   Write Something On Us
//                 </button> */}
//                {/* Feedback section */}
//               <div className="mt-10">
//                 {user && (
//                   <>
//                     <h2 className="text-xl font-bold mb-2">Leave a Feedback</h2>
//                     <FeedbackForm /*packageId={pkg._id}*/ user={user} onSubmitted={handleFeedbackSubmitted} />
//                   </>
//                 )}

//                 {/* <FeedbackList packageId={pkg._id} reloadTrigger={reloadFeedback} /> */}
//               </div>
//       </div>
//     </div>
//   );
// };

// export default AllFeedbackList;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import "../../pages/Feedback/slick.scss";
// import "../../pages/Feedback/slick-theme.scss";
// import FeedbackForm from "../Feedback/FeedbackForm";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const AllFeedbackList = () => {
//   const [feedbacks, setFeedbacks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [reloadFeedback, setReloadFeedback] = useState(false);

//   const navigate = useNavigate();
//   const user = useSelector((state) => state.auth.user);

//   useEffect(() => {
//     const fetchAllFeedbacks = async () => {
//       try {
//         const res = await axios.get("/api/feedback");
//         setFeedbacks(res.data);
//       } catch (error) {
//         console.error("Error fetching feedback:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAllFeedbacks();
//   }, [reloadFeedback]);

//   const handleWriteFeedback = () => {
//     if (!user) {
//       alert("Please login");
//       navigate("/login");
//     } else {
//       setShowForm(true);
//     }
//   };

//   const handleFeedbackSubmitted = () => {
//     setReloadFeedback(!reloadFeedback);
//     setShowForm(false); // Optionally hide form after submission
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: false,
//     pauseOnHover: true,
//     cssEase: "ease-in-out",
//   };

//   if (loading) return <p>Loading feedback...</p>;
//   if (feedbacks.length === 0) return <p>No feedback available.</p>;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-100 to-cyan-200 py-10 px-4 flex flex-col items-center">
//       <div className="w-full max-w-2xl px-4">
//         <div className="mb-10 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-5xl font-extrabold text-gray-800 drop-shadow-md"
//           >
//             TESTIMONIALS
//           </motion.h1>

//           <motion.h2
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="text-2xl font-[Comic_Sans_MS] text-gray-600 drop-shadow-md"
//           >
//             WHAT OUR CLIENTS SAY
//           </motion.h2>
//         </div>

//         <Slider {...settings}>
//           {feedbacks.map((fb) => (
//             <div key={fb._id} className="px-4">
//               <div className="p-6 bg-white rounded-xl shadow-md text-center">
//                 <p className="text-sm text-gray-600 mb-2">
//                   <strong>{fb.userName}</strong> on{" "}
//                   {new Date(fb.date).toLocaleDateString()} (Package:{" "}
//                   {fb.packageId?.name || "Unknown"})
//                 </p>
//                 <p className="text-lg italic text-gray-800">"{fb.comment}"</p>
//               </div>
//             </div>
//           ))}
//         </Slider>

//         {/* Feedback Button and Form Section */}
//         <div className="mt-10 text-center">
//           {!showForm ? (
//             <button
//               onClick={handleWriteFeedback}
//               className="bg-[#2B7A78] border-2 border-[#3AAFA9] text-[#FEFFFF] py-2 px-6 rounded-lg shadow-md hover:bg-[#3AAFA9] text-base font-medium transition"
//             >
//               Leave a Feedback
//             </button>
//           ) : (
//             <>
//               <h2 className="text-xl font-bold mb-4">Leave a Feedback</h2>
//               <FeedbackForm
//                 // packageId={pkg._id}
//                 user={user}
//                 onSubmitted={handleFeedbackSubmitted}
//               />
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllFeedbackList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "../../pages/Feedback/slick.scss";
import "../../pages/Feedback/slick-theme.scss";
import FeedbackForm from "../Feedback/FeedbackForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AllFeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [reloadFeedback, setReloadFeedback] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchAllFeedbacks = async () => {
      try {
        const res = await axios.get("/api/feedback");
        setFeedbacks(res.data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllFeedbacks();
  }, [reloadFeedback]);

  const handleWriteFeedback = () => {
    if (!user) {
      alert("Please login");
      navigate("/login");
    } else {
      setShowModal(true);
    }
  };

  const handleFeedbackSubmitted = () => {
    setReloadFeedback(!reloadFeedback);
    setShowModal(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    cssEase: "ease-in-out",
  };

  if (loading) return <p>Loading feedback...</p>;
  if (feedbacks.length === 0) return <p>No feedback available.</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-cyan-200 py-10 px-4 flex flex-col items-center">
      <div className="w-full max-w-2xl px-4">
        <div className="mb-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-gray-800 drop-shadow-md"
          >
            TESTIMONIALS
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl font-[Comic_Sans_MS] text-gray-600 drop-shadow-md"
          >
            WHAT OUR CLIENTS SAY
          </motion.h2>
        </div>

     <div className="mt-20">
  {/* <Slider {...settings}>
    {feedbacks.map((fb) => (
      <div key={fb._id} className="px-6">
        <div className="p-10 bg-white rounded-2xl shadow-2xl w-[600px] h-[300px] mx-auto text-center flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-5">{fb.name}</h3><br />
          <p className="text-md italic text-gray-700">"{fb.comment}"</p>
        </div>
      </div>
    ))}
  </Slider> */}
  <Slider {...settings}>
  {feedbacks.map((fb) => (
    <div key={fb._id} className="px-6">
      <div className="p-10 bg-white rounded-2xl shadow-2xl w-[600px] h-[300px] mx-auto text-center flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-[#205b96] mb-5">{fb.name}</h3>
        <p className="text-md italic text-gray-700">"{fb.comment}"</p>
      </div>
    </div>
  ))}
</Slider>

</div>


        {/* Feedback Button */}
        <div className="mt-16 text-center">
          <button
            onClick={handleWriteFeedback}
            className="bg-[#2B7A78] border-2 border-[#3AAFA9] text-[#FEFFFF] py-2 px-6 rounded-lg shadow-md hover:bg-[#3AAFA9] text-base font-medium transition"
          >
            Write Something On Us
          </button>
        </div>
      </div>

      {/* Feedback Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Leave a Feedback</h2>
            <FeedbackForm user={user} onSubmitted={handleFeedbackSubmitted} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllFeedbackList;
