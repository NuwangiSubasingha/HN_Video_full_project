import { motion } from "framer-motion";
import './success.scss'
import { Link } from 'react-router-dom';


const Success = () => {
  return (
    <motion.div
      className="success-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
  className="success-icon"
  initial={{ scale: 0 }}
  animate={{ scale: [0, 1.4, 1] }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
        ✅
      </motion.div>

      <motion.h1
        className="heading success"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Booking Successful
      </motion.h1>

      <motion.p
        className="note"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Once the owner confirms your booking, you'll receive an email.<br />
        Please check your email and pay the advance to complete your booking.<br/>
        Thank you .
      </motion.p>

      <motion.div
        className="btn-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.4 }}
      >
        <Link to="/">
          <button className="home-btn">Go to Home</button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Success;
