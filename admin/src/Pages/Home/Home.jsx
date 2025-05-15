import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import video1 from "../../assets/v1.mp4";
import video2 from "../../assets/v2.mp4";

const videos = [video1, video2];

const Home = () => {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleEnded = () => {
      setFade(true); // trigger fade before switching
      setTimeout(() => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
        setFade(false);
      }, 800); // match fade transition
    };

    const handleLoadedData = () => {
      videoElement.play().catch((err) => console.warn("Play interrupted:", err));
    };

    videoElement.addEventListener("ended", handleEnded);
    videoElement.addEventListener("loadeddata", handleLoadedData);

    return () => {
      videoElement.removeEventListener("ended", handleEnded);
      videoElement.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videos[currentVideo];
    }
  }, [currentVideo]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fade overlay for transition */}
      <div className={`absolute w-full h-full bg-black z-20 transition-opacity duration-700 ${fade ? "opacity-70" : "opacity-0"}`} />

      {/* Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover transform scale-105 transition-transform duration-[3000ms] ease-in-out"
        muted
        autoPlay
        playsInline
      />

      {/* Gradient Overlay with Glassmorphism */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#17252A]/70 to-transparent backdrop-blur-sm z-10" />

      {/* Content */}
      <div className="relative z-30 h-full flex flex-col justify-center items-center text-white text-center px-4">
        {/* Title with animation and glow effect */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-[#FEFFFF] drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
        >
          Welcome to <span className="text-[#3AAFA9]">HN VIDEO</span>
        </motion.h1>

        {/* Description text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-xl text-[#DEF2F1]"
        >
          Watch the magic of visuals loop endlessly.
        </motion.p>

        {/* Explore Now Button with Animation */}
        <Link to="/packages">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="group relative mt-8 px-8 py-3 bg-[#2B7A78] text-[#FEFFFF] font-semibold rounded-full overflow-hidden shadow-xl transition-all duration-300 hover:bg-[#3AAFA9]"
          >
            <span className="relative z-10">Packages</span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#FEFFFF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
