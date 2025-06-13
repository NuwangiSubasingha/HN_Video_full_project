// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const ContactUs = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//       {/* Contact Info Card with Animation */}
//       <motion.div
//         className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl mb-8"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           CONTACT US
//         </h1>
// <h3 className="text-2xl  mb-6 text-center text-gray-800">
//           GET IN TOUCH WITH US
//         </h3>

//         <motion.div
//           className="space-y-4 text-gray-700 text-lg"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: {},
//             visible: {
//               transition: {
//                 staggerChildren: 0.2,
//               },
//             },
//           }}
//         >
//           {[
//             {
//               icon: "📍",
//               title: "Company Address",
//               text: "No:200/1, Weweldeniya RD, Lindara, Mirigama",
//             },
//             {
//               icon: "📞",
//               title: "Phone",
//               text: "0710509800",
//             },
//             {
//               icon: "📧",
//               title: "Email",
//               text: "kalaniimesha2@gmail.com",
//             },
//             {
//               icon: "🕒",
//               title: "Business Hours",
//               text:
//                 "Monday – Friday: 9:00 AM – 6:00 PM\nSaturday: 10:00 AM – 2:00 PM\nSunday & Poya Day: Closed",
//             },
//           ].map((item, i) => (
//             <motion.p
//               key={i}
//               className="bg-gray-50 p-4 rounded-md shadow-sm hover:shadow-md transition duration-300"
//               variants={{
//                 hidden: { opacity: 0, x: -20 },
//                 visible: { opacity: 1, x: 0 },
//               }}
//             >
//               <strong>{item.icon} {item.title}:</strong><br />
//               {item.text}
//             </motion.p>
//           ))}
//         </motion.div>

//         {/* Contact Buttons with Animation */}
//         <motion.div
//           className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//         >
//           <a
//             href="https://wa.me/15551234567"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
//           >
//             💬 Chat on WhatsApp
//           </a>
//           <a
//             href="https://instagram.com/_kalaniimesha_"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
//           >
//             📷 Visit Instagram
//           </a>
//         </motion.div>
//       </motion.div>

//       {/* Google Map with Fade-in Animation */}
//       <motion.div
//         className="w-full max-w-3xl"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1 }}
//       >
//         <iframe
//           title="Google Map"
//           className="w-full h-72 rounded-lg shadow-md"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0816071171054!2d-122.41941568468194!3d37.77492977975973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5d3b9f3b%3A0x21f3159a421a60b9!2sYour%20Company%20Name!5e0!3m2!1sen!2sus!4v1617052400000!5m2!1sen!2sus"
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </motion.div>
//     </div>
//   );
// };

// export default ContactUs;

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  MessageCircle,
} from "lucide-react";

const ContactUs = () => {
  return (

<div className="min-h-screen bg-gradient-to-b from-green-100 to-cyan-200 py-10 px-4 flex flex-col items-center">

      {/* Header */}
      <div className="mb-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gray-800 drop-shadow-md"
        >
          CONTACT US
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl font-[Comic_Sans_MS] text-gray-600 drop-shadow-md"
        >
          GET IN TOUCH WITH US
        </motion.h2>
      </div>

      {/* Contact Cards Split into 4 Boxes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full"
      >
        {/* Address */}
       <div
  className="bg-white rounded-3xl shadow-xl p-6 flex items-start gap-4"
  style={{ color: "black" }}
>
  <MapPin className="text-blue-600 w-6 h-6 mt-1" />
  <div>
    <strong>Company Address</strong>
    <br />
    No: 200/1, Weweldeniya RD,
    <br />
    Lindara, Mirigama
  </div>
</div>


        {/* Phone */}
        <div className="bg-white rounded-3xl shadow-xl p-6 flex items-start gap-4"
        style={{ color: "black" }}
        >
          <Phone className="text-green-600 w-6 h-6 mt-1" />
          <div>
            <strong>Phone</strong>
            <br />
            0710509800
            <br />
            0332276017
          </div>
        </div>

        {/* Email */}
        <div className="bg-white rounded-3xl shadow-xl p-6 flex items-start gap-4"
        style={{ color: "black" }}
        >
          <Mail className="text-red-600 w-6 h-6 mt-1" />
          <div>
            <strong>Email</strong>
            <br />
            kalaniimesha2@gmail.com
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-white rounded-3xl shadow-xl p-6 flex items-start gap-4"
        style={{ color: "black" }}
        >
          <Clock className="text-yellow-500 w-6 h-6 mt-1" />
          <div>
            <strong>Business Hours</strong>
            <br />
            Mon–Fri: 9:00 AM – 6:00 PM
            <br />
            Sat: 10:00 AM – 2:00 PM
            <br />
            Sun & Poya Day: Closed
          </div>
        </div>
      </motion.div>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://wa.me/ 0710509800"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
        >
          <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://instagram.com/_kalaniimesha_"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition-all"
        >
          <Instagram className="w-5 h-5" /> Visit Instagram
        </motion.a>
      </div>
    </div>
  );
};

export default ContactUs;
