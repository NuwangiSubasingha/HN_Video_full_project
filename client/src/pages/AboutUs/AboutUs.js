// import React from "react";
// import { motion } from "framer-motion";
// import "./aboutUs.scss";
// import aboutPic from "../../assets/aboutPic.jpg";

// const AboutUs = () => {
//   return (
//     <motion.section
//       className="about-container"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <motion.div
//         className="image-section"
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <img src={aboutPic} alt="About us" />
//       </motion.div>

//       <motion.div
//         className="text-section"
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2>GET TO KNOW US</h2>
//         <h1>A LITTLE BETTER.</h1>
//         <h3>WE ARE A REPUTED VIDEOGRAPHER IN SRI LANKA.</h3>

//         <p>
//           The job of a videographer is more than just filming.
//           At HN Video, we help you relive those cherished moments over and over again through
//           our cinematic storytelling approach. We ensure your memories are beautifully preserved.
//         </p>

//         <p>
//           Since our start in 2009, we've grown to become a leading name in Sri Lanka’s videography scene.
//           We've embraced new trends and technologies to meet the evolving needs of clients from weddings
//           and dancing events to other personal and professional celebrations.
//         </p>

//         <p>
//           We've made it easier than ever to connect with us by introducing an online booking system.
//           Clients can now explore our services, check availability, and secure bookings all in just a few clicks.
//         </p>

//         <p>
//           Our videography style is modern, natural, and unobtrusive. We don’t direct events—we let the moments
//           unfold organically and capture them as they are: real, emotional, and timeless.
//         </p>

//         <div className="signature">HN Video</div>
//         <div className="subtitle">BEST VIDEOGRAPHER IN SRI LANKA.</div>
//       </motion.div>
//     </motion.section>
//   );
// };

// export default AboutUs;

import React from "react";
import { motion } from "framer-motion";
import "./aboutUs.scss";
import aboutPic from "../../assets/aboutPic.jpg";

const AboutUs = () => {
  return (
    
    <motion.section
      className="about-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="image-section"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={aboutPic} alt="About us" />
      </motion.div>

      <motion.div
        className="text-section"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>GET TO KNOW US</h2>
        <h1>A LITTLE BETTER.</h1>
        <h3>WE ARE A REPUTED VIDEOGRAPHER IN SRI LANKA.</h3>

        <p>
          The job of a videographer is more than just filming.
          At HN Video, we help you relive those cherished moments over and over again through
          our cinematic storytelling approach. We ensure your memories are beautifully preserved.
        </p>

        <p>
          Since our start in 2009, we've grown to become a leading name in Sri Lanka’s videography scene.
          We've embraced new trends and technologies to meet the evolving needs of clients from weddings
          and dancing events to other personal and professional celebrations.
        </p>

        <p>
          We've made it easier than ever to connect with us by introducing an online booking system.
          Clients can now explore our services, check availability, and secure bookings all in just a few clicks.
        </p>

        <p>
          Our videography style is modern, natural, and unobtrusive. We don’t direct events—we let the moments
          unfold organically and capture them as they are: real, emotional, and timeless.
        </p>

        <div className="signature">HN Video</div>
        <div className="subtitle">BEST VIDEOGRAPHER IN SRI LANKA.</div>
      </motion.div>
    </motion.section>
  );
};

export default AboutUs;
