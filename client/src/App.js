// // App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.styles.scss";

import Home from "./pages/Home/Home";
import Packages from "./pages/Packages/Packages";
import Package from "./pages/Package/Package";
import Booking from "./pages/Booking/Booking";
import Header from "./component/Header/Header";
import Success from "./pages/Success/Success";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2c4a55] via-[#3AAFA9] to-[#b1e1df] flex flex-col text-white">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/all/:id" element={<Package />} />
        <Route path="/bookings/:id" element={<Booking />} />
        <Route path="/success" element={<Success/>} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;