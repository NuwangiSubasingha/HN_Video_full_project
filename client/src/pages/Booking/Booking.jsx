// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { createBooking, reset } from "../../features/booking/bookingSlice";
// import { useDispatch, useSelector } from "react-redux";

// const Booking = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { isSuccess } = useSelector((state) => state.booking);

//   const [packages, setPackages] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     functionDate: "",
//     venue: "",
//     contactNumber: "",
//     selectedPackage: ""
//   });

//   const {
//     name,
//     email,
//     functionDate,
//     venue,
//     contactNumber,
//     selectedPackage
//   } = formData;

//   useEffect(() => {
//     const fetchPackages = async () => {
//       try {
//         const res = await fetch("/api/packages");
//         const data = await res.json();
//         if (!res.ok) {
//           console.log("Error fetching packages");
//           return;
//         }
//         setPackages(data);
//       } catch (error) {
//         console.error("Fetch error:", error);
//       }
//     };

//     fetchPackages();
//   }, []);

//   useEffect(() => {
//     if (isSuccess) {
//       navigate("/success");
//       dispatch(reset());
//     }
//   }, [isSuccess, navigate, dispatch]);

//   const handleChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const dataToSubmit = {
//       packageId: selectedPackage,
//       name,
//       email,
//       functionDate,
//       venue,
//       contactNumber
//     };

//     dispatch(createBooking(dataToSubmit));
//   };

//   return (
//     <div>
//       <h1 className="heading center">Book Now</h1>
//       <div className="form-wrapper">
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={name}
//               placeholder="Enter full name"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="text"
//               name="email"
//               value={email}
//               placeholder="Enter your email address"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="functionDate">Function Date</label>
//             <input
//               type="date"
//               name="functionDate"
//               value={functionDate}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="venue">Venue</label>
//             <input
//               type="text"
//               name="venue"
//               value={venue}
//               placeholder="Enter your chosen location"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="contactNumber">Contact Number</label>
//             <input
//               type="text"
//               name="contactNumber"
//               value={contactNumber}
//               placeholder="Enter your contact number"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="selectedPackage">Select Package</label>
//             <select
//               name="selectedPackage"
//               value={selectedPackage}
//               onChange={handleChange}
//             >
//               <option value="">-- Choose a Package --</option>
//               {packages.map((pkg) => (
//                 <option key={pkg._id} value={pkg._id}>
//                   {pkg.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Booking;

// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { createBooking, reset } from "../../features/booking/bookingSlice";
// import { useDispatch, useSelector } from "react-redux";

// const Booking = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Get booking success status
//   const { isSuccess } = useSelector((state) => state.booking);

//   // Get logged-in user
//   const { user } = useSelector((state) => state.auth);

//   const [packages, setPackages] = useState([]);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     functionDate: "",
//     venue: "",
//     contactNumber: "",
//     selectedPackage: "",
//   });

//   const { name, email, functionDate, venue, contactNumber, selectedPackage } =
//     formData;

//   // Pre-fill name and email when user data is available
//   useEffect(() => {
//     if (user) {
//       setFormData((prevState) => ({
//         ...prevState,
//         name: user.name || "",
//         email: user.email || "",
//       }));
//     }
//   }, [user]);

//   // Fetch packages on mount
//   useEffect(() => {
//     const fetchPackages = async () => {
//       try {
//         const res = await fetch("/api/packages");
//         const data = await res.json();
//         if (!res.ok) {
//           console.log("Error fetching packages");
//           return;
//         }
//         setPackages(data);
//       } catch (error) {
//         console.error("Fetch error:", error);
//       }
//     };

//     fetchPackages();
//   }, []);

//   // Redirect on successful booking
//   useEffect(() => {
//     if (isSuccess) {
//       navigate("/success");
//       dispatch(reset());
//     }
//   }, [isSuccess, navigate, dispatch]);

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   // Submit form
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const dataToSubmit = {
//       packageId: selectedPackage,
//       name,
//       email,
//       functionDate,
//       venue,
//       contactNumber,
//     };

//     dispatch(createBooking(dataToSubmit));
//   };

//   return (
//     <div>
//       <h1 className="heading center">Book Now</h1>
//       <div className="form-wrapper">
//         <form onSubmit={handleSubmit}>
//           <div className="text-black">
//             <div className="input-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={name}
//                 placeholder="Enter full name"
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 placeholder="Enter your email address"
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <label htmlFor="functionDate">Function Date</label>
//               <input
//                 type="date"
//                 name="functionDate"
//                 value={functionDate}
//                 onChange={handleChange}
//                 required
//                 min={new Date().toISOString().split("T")[0]} // sets min date to today
//               />
//             </div>

//             <div className="input-group">
//               <label htmlFor="venue">Venue</label>
//               <input
//                 type="text"
//                 name="venue"
//                 value={venue}
//                 placeholder="Enter your chosen location"
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <label htmlFor="contactNumber">Contact Number</label>
//               <input
//                 type="text"
//                 name="contactNumber"
//                 value={contactNumber}
//                 placeholder="Enter your contact number"
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {/* <div className="input-group">
//               <label htmlFor="selectedPackage">Select Package</label>
//               <select
//                 name="selectedPackage"
//                 value={selectedPackage}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">-- Choose a Package --</option>
//                 {packages.map((pkg) => (
//                   <option key={pkg._id} value={pkg._id}>
//                     {pkg.name}
//                   </option>
//                 ))}
//               </select>
//             </div> */}
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Booking;

// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { createBooking, reset } from "../../features/booking/bookingSlice";
// import { useDispatch, useSelector } from "react-redux";

// const Booking = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { id } = useParams(); // <-- Here: param name must match route param name
//   const packageId = id;

//   const { isSuccess } = useSelector((state) => state.booking);
//   const { user } = useSelector((state) => state.auth);

//   const [packageInfo, setPackageInfo] = useState(null);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     functionDate: "",
//     venue: "",
//     contactNumber: "",
//   });

//   const { name, email, functionDate, venue, contactNumber } = formData;

//   useEffect(() => {
//     if (user) {
//       setFormData((prevState) => ({
//         ...prevState,
//         name: user.name || "",
//         email: user.email || "",
//       }));
//     }
//   }, [user]);

//   useEffect(() => {
//     const fetchPackage = async () => {
//       try {
//         const res = await fetch(`/api/packages/${packageId}`);
//         const data = await res.json();
//         if (!res.ok) {
//           console.error("Error fetching package");
//           return;
//         }
//         setPackageInfo(data);
//       } catch (error) {
//         console.error("Fetch error:", error);
//       }
//     };

//     if (packageId) {
//       fetchPackage();
//     }
//   }, [packageId]);

//   useEffect(() => {
//     if (isSuccess) {
//       navigate("/success");
//       dispatch(reset());
//     }
//   }, [isSuccess, navigate, dispatch]);

//   const handleChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const dataToSubmit = {
//       packageId,
//       packageName: packageInfo ? packageInfo.name : "",
//       name,
//       email,
//       functionDate,
//       venue,
//       contactNumber,
//     };

//     dispatch(createBooking(dataToSubmit));
//   };

//   return (
//     <div>
//       <h1 className="heading center">Book Now</h1>
//       <div className="form-wrapper">
//         <form onSubmit={handleSubmit}>
//           <div className="text-black">
//             {packageInfo && (
//               <div className="input-group">
//                 <label>Selected Package</label>
//                 <input type="text" value={packageInfo.name} readOnly disabled />
//               </div>
//             )}

//             <div className="input-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={name}
//                 placeholder="Enter full name"
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 placeholder="Enter your email address"
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <label htmlFor="functionDate">Function Date</label>
//               <input
//                 type="date"
//                 name="functionDate"
//                 value={functionDate}
//                 onChange={handleChange}
//                 required
//                 min={new Date().toISOString().split("T")[0]}
//               />
//             </div>

//             <div className="input-group">
//               <label htmlFor="venue">Venue</label>
//               <input
//                 type="text"
//                 name="venue"
//                 value={venue}
//                 placeholder="Enter your chosen location"
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <label htmlFor="contactNumber">Contact Number</label>
//               <input
//                 type="text"
//                 name="contactNumber"
//                 value={contactNumber}
//                 placeholder="Enter your contact number"
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Booking;

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createBooking, reset } from "../../features/booking/bookingSlice";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaCalendarAlt,
} from "react-icons/fa";

const Booking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); // packageId
  const packageId = id;

  const { isSuccess } = useSelector((state) => state.booking);
  const { user } = useSelector((state) => state.auth);

  const [packageInfo, setPackageInfo] = useState(null);
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    venue: "",
    contactNumber: "",
  });

  const { name, email, venue, contactNumber } = formData;

  const [minSelectableDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow;
  });

  const formatDateToLocal = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (user) {
      setFormData((prevState) => ({
        ...prevState,
        name: user.name || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const res = await fetch(`/api/packages/${packageId}`);
        const data = await res.json();
        if (!res.ok) {
          console.error("Error fetching package");
          return;
        }
        setPackageInfo(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    const fetchBookedDates = async () => {
      try {
        const res = await fetch(`/api/bookings/booked-dates/${packageId}`);
        const data = await res.json();
        if (!res.ok) {
          console.error("Failed to load booked dates");
          return;
        }
        setBookedDates(data);
      } catch (error) {
        console.error("Error fetching booked dates", error);
      }
    };

    if (packageId) {
      fetchPackage();
      fetchBookedDates();
    }
  }, [packageId]);

  useEffect(() => {
    if (isSuccess) {
      navigate("/success");
      dispatch(reset());
    }
  }, [isSuccess, navigate, dispatch]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDateSelect = (date) => {
    const dateStr = formatDateToLocal(date);
    if (bookedDates.includes(dateStr)) {
      alert("Sorry, this date is already booked.");
      return;
    }
    setSelectedDate(dateStr);
    setShowCalendar(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDate) {
      alert("Please select a function date.");
      return;
    }

    if (bookedDates.includes(selectedDate)) {
      alert("This date is already booked. Please choose another date.");
      return;
    }

    const dataToSubmit = {
      packageId,
      packageName: packageInfo ? packageInfo.name : "",
      name,
      email,
      functionDate: selectedDate,
      venue,
      contactNumber,
    };

    dispatch(createBooking(dataToSubmit));
  };

  const handleShowCalendar = () => {
    setShowCalendar(true);
  };

  const InputWithIcon = ({
    icon,
    name,
    value,
    onChange,
    placeholder,
    type = "text",
    readOnly = false,
  }) => (
    <div className="relative">
      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-600 text-lg">
        {icon}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        required
        className={`w-full pl-12 pr-4 py-3 border rounded-xl transition shadow 
        ${
          readOnly
            ? "bg-gray-100 text-gray-600 border-gray-300 cursor-not-allowed"
            : "bg-white border-green-300 focus:outline-none focus:ring-2 focus:ring-green-300"
        }`}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-cyan-200 py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center text-green-800 mb-10 drop-shadow-lg">
        Book Your Dream Package
      </h1>

      <div className="max-w-3xl mx-auto bg-white bg-opacity-90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-green-300">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6 text-gray-900">
            {packageInfo && (
              <div>
                <label className="block mb-2 text-lg font-semibold text-green-700">
                  Selected Package
                </label>
                <input
                  type="text"
                  value={packageInfo.name}
                  readOnly
                  disabled
                  className="w-full px-5 py-3 rounded-xl border border-green-300 bg-green-100 text-green-800 font-semibold shadow-inner cursor-not-allowed"
                />
              </div>
            )}

            <InputWithIcon
              icon={<FaUser />}
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Your Name"
              readOnly
            />

            <InputWithIcon
              icon={<FaEnvelope />}
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="you@example.com"
              type="email"
              readOnly
            />

            <div>
              <label className="block mb-3 font-semibold text-green-700">
                Choose Function Date
              </label>

              {!showCalendar && (
                <button
                  type="button"
                  onClick={handleShowCalendar}
                  className="mb-4 flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
                >
                  <FaCalendarAlt />
                  Select Date
                </button>
              )}

              {showCalendar && (
                <div className="rounded-lg border border-green-300 shadow-lg overflow-hidden bg-white p-4">
                  <Calendar
                    minDate={minSelectableDate}
                    onClickDay={handleDateSelect}
                    tileDisabled={({ date }) => {
                      const dateStr = formatDateToLocal(date);
                      return bookedDates.includes(dateStr);
                    }}
                    tileClassName={({ date }) => {
                      const dateStr = formatDateToLocal(date);
                      if (bookedDates.includes(dateStr)) {
                        return "booked-date";
                      }
                      if (selectedDate === dateStr) {
                        return "selected-date";
                      }
                      return null;
                    }}
                  />
                </div>
              )}

              {selectedDate && (
                <p className="mt-3 text-green-700 font-semibold">
                  Selected Date:{" "}
                  <span className="underline">{selectedDate}</span>
                </p>
              )}
            </div>

            <InputWithIcon
              icon={<FaMapMarkerAlt />}
              name="venue"
              value={venue}
              onChange={handleChange}
              placeholder="Event Venue"
            />

            <InputWithIcon
              icon={<FaPhone />}
              name="contactNumber"
              value={contactNumber}
              onChange={handleChange}
              placeholder="Contact Number"
            />
          </div>

      <button
  type="submit"
  className="w-full py-4 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white font-extrabold rounded-3xl shadow-lg hover:from-green-600 hover:via-green-700 hover:to-green-800 transition"
>
  Submit Booking
</button>


        </form>
      </div>

      {/* Calendar Styles for Booked/Selected Dates */}
      <style>
        {`
          .booked-date {
            background: #DC2626 !important;
            color: white !important;
            font-weight: bold;
            border-radius: 9999px;
          }

          .selected-date {
            background: #059669 !important;
            color: white !important;
            font-weight: bold;
            border-radius: 9999px;
            box-shadow: 0 0 10px rgba(5, 150, 105, 0.6);
          }

          .react-calendar {
            border: none;
            width: 100%;
            font-family: inherit;
          }

          .react-calendar__tile--now {
            background: #d1fae5 !important;
          }
        `}
      </style>
    </div>
  );
};

export default Booking;
