// // App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.styles.scss";


import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Packages from "./pages/Packages/Packages";
import Package from "./pages/Package/Package";
import Booking from "./pages/Booking/Booking";
import Header from "./component/Header/Header";
import Success from "./pages/Success/Success";
import ContactUs from "./pages/ContactUs/ContactUs"
import PaymentPage from "./pages/Payment/PaymentPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import SampleVideosPage from "./pages/SampleVideo/SampleVideosPage";
import FeedbackList from "./pages/Feedback/FeedbackList";
import FeedbackForm from "./pages/Feedback/FeedbackForm";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2c4a55] via-[#3AAFA9] to-[#b1e1df] flex flex-col text-white">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/all/:id" element={<Package />} />
        <Route path="/bookings/:id" element={<Booking />} />
        <Route path="/success" element={<Success/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/payment/:bookingId" element={<PaymentPage/>} />
        <Route path="/sample/video" element={<SampleVideosPage/>} />
        <Route path="/feedback" element={<FeedbackList/>} />
        <Route path="/FeedbackForm" element={<FeedbackForm/>} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;