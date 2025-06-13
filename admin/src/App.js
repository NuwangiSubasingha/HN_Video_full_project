import "./app.styles.scss";
import './index.css';  // Global styles still imported
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Header from "./component/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CreatePackage from "./Pages/CreatePackage";
import Package from "./Pages/Package/Package";
import Packages from "./Pages/Packages/Packages";
import EditPackage from "./Pages/EditPackage/EditPackage";
import Booking from "./Pages/Booking/Booking";
import BookingList from "./component/BookingList/BookingList";
import AddVideoPage from "./Pages/AddVideo/AddVideoPage";
import AllFeedbackList from "./Pages/Feedback/AdminFeedbackList";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2c4a55] via-[#3AAFA9] to-[#b1e1df] flex flex-col text-white">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/create" element={<CreatePackage />} />
          <Route path="/edit/packages/:id" element={<EditPackage />} />
          <Route path="/packages/all/:id" element={<Package />} />
          <Route path="bookings/:id" element={<Booking />} />
          <Route path="bookinglist" element={<BookingList/>} />
          <Route path="/add/video" element={<AddVideoPage/>} />
          <Route path="/feedback" element={<AllFeedbackList/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
