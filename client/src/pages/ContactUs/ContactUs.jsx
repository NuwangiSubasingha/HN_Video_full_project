import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>

      {/* Contact Info */}
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Contact Us
          </h2>

          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              <strong>📍 Company Address:</strong><br />
             No:200/1,Weweldeniya RD , Lindara , Mirirgama
            </p>
            <p>
              <strong>📞 Phone:</strong><br />
              0710509800
            </p>
            <p>
              <strong>📧 Email:</strong><br />
             kalaniimesha2@gmail.com
            </p>
            <p>
              <strong>🕒 Business Hours:</strong><br />
              Monday – Friday: 9:00 AM – 6:00 PM<br />
              Saturday: 10:00 AM – 2:00 PM<br />
              Sunday & Poya Day : Closed
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href="https://instagram.com/_kalaniimesha_"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600"
            >
              📷 Visit Instagram
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full max-w-3xl">
          <iframe
            title="Google Map"
            className="w-full h-72 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0816071171054!2d-122.41941568468194!3d37.77492977975973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5d3b9f3b%3A0x21f3159a421a60b9!2sYour%20Company%20Name!5e0!3m2!1sen!2sus!4v1617052400000!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
