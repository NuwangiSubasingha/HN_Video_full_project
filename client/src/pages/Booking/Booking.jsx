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

const Booking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); // packageId
  const packageId = id;

  const { isSuccess } = useSelector((state) => state.booking);
  const { user } = useSelector((state) => state.auth);

  const [packageInfo, setPackageInfo] = useState(null);
  const [bookedDates, setBookedDates] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    functionDate: "",
    venue: "",
    contactNumber: "",
  });

  const { name, email, functionDate, venue, contactNumber } = formData;

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
        setBookedDates(data); // Array of 'YYYY-MM-DD' strings
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (bookedDates.includes(functionDate)) {
      alert("Sorry, this date is already booked. Please choose another date.");
      return;
    }

    const dataToSubmit = {
      packageId,
      packageName: packageInfo ? packageInfo.name : "",
      name,
      email,
      functionDate,
      venue,
      contactNumber,
    };

    dispatch(createBooking(dataToSubmit));
  };

  return (
    <div>
      <h1 className="heading center">Book Now</h1>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="text-black">
            {packageInfo && (
              <div className="input-group">
                <label>Selected Package</label>
                <input type="text" value={packageInfo.name} readOnly disabled />
              </div>
            )}

            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Enter full name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email address"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="functionDate">Function Date</label>
              <input
                type="date"
                name="functionDate"
                value={functionDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]}
                onInput={(e) => {
                  if (bookedDates.includes(e.target.value)) {
                    e.target.setCustomValidity("This date is already booked.");
                  } else {
                    e.target.setCustomValidity("");
                  }
                }}
              />
            </div>

            {/* Show booked dates here */}
            {bookedDates.length > 0 && (
              <div className="input-group" style={{ marginTop: "10px" }}>
                <label className="text-red-600 font-semibold">
                  Already Booked Dates:
                </label>
                <ul className="list-disc pl-5 text-red-500">
                  {bookedDates.map((date) => (
                    <li key={date}>{date}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="input-group">
              <label htmlFor="venue">Venue</label>
              <input
                type="text"
                name="venue"
                value={venue}
                placeholder="Enter your chosen location"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                value={contactNumber}
                placeholder="Enter your contact number"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
