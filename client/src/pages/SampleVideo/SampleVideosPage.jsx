// SampleVideosPage.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';

// function SampleVideosPage() {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/videos')
//       .then(res => setVideos(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-200 to-cyan-200 py-10 px-4 flex flex-col items-center">
//       <motion.div
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//         className="p-6 w-full max-w-6xl"
//       >
//         <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-md text-center mb-6">
//           Recent Highlights
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {videos.map((video, index) => (
//             <motion.div
//               key={video._id}
//              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer min-h-[400px]"

//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//               whileHover={{ scale: 1.02 }}
//             >
              
//               <video
//                 width="100%"
//                 controls
//                 className="rounded-lg shadow-inner"
//               >
//                 <source src={`http://localhost:5000${video.videoUrl}`} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//               <h3 className="text-2xl font-extrabold text-transparen text-gray-800 mb-2 text-center">{video.title}</h3>
//            <p className="mt-3 text-sm text-gray-700 font-medium leading-relaxed tracking-wide">
//   {video.description}
// </p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default SampleVideosPage;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function SampleVideosPage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/videos')
      .then(res => setVideos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-green-100 via-cyan-100 to-blue-100 py-10 px-6 flex flex-col items-center"
    >
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-7xl"
      >
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center text-gray-900 mb-12 tracking-tight drop-shadow-md"
        >
          🎬 Recent Highlights
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {videos.map((video, index) => (
            <motion.div
              key={video._id}
              className="backdrop-blur-xl bg-white/60 p-6 rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer min-h-[500px]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="rounded-lg overflow-hidden mb-4 shadow-md"
              >
                <video
                  controls
                  className="w-full h-80 object-cover rounded-xl shadow-inner"
                >
                  <source src={`http://localhost:5000${video.videoUrl}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>

              <h3
                className="text-2xl font-bold mb-3 text-center"
                style={{
                  color: '#7B3F00', // deeper charm brown
                  fontFamily: 'Georgia, serif',
                  letterSpacing: '0.5px'
                }}
              >
                {video.title}
              </h3>

              <p
                className="text-base text-gray-800 font-medium text-justify leading-relaxed tracking-wide"
                style={{
                  fontFamily: '"Comic Sans MS", cursive, sans-serif',
                  color: '#333'
                }}
              >
                {video.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SampleVideosPage;
