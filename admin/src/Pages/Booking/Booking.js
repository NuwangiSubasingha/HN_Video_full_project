// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const Booking = () => {
//   const { id } = useParams();
//   const [booking, setBooking] = useState(null);

//   useEffect(() => {
//     const getBooking = async () => {
//       try {
//         const res = await fetch(`/api/bookings/${id}`);
//         const data = await res.json();
//         setBooking(data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     getBooking();
//   }, [id]);

//   console.log(booking);

//   return (
//     <div>
//       <h1 className="heading center">Booking</h1>

//       {booking && (
//         <div className="content-wrapper">
//           <div className="text-wrapper">
//             <h1 className="heading"> {booking.name} </h1>

//             <p className="email"> {booking.pkgID.name} </p>
//             <p className="email"> {booking.email} </p>
//             <p className="email"> checkIn: {booking.checkInDate} </p>
//             <p className="email"> checkout: {booking.checkOutDate} </p>
//           </div>
//       </div>

//   )}

// </div>
//   )}
// export default Booking;

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./booking.styles.scss";
// import { deleteBooking, reset } from "../../features/booking/bookingSlice";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";

// //View Booking details
// const BookingDetails = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { isSuccess, isLoading, isError, message } = useSelector(
//     (state) => state.booking
//   );

//   const [booking, setBooking] = useState(null);

//   useEffect(() => {
//     if (isSuccess) {
//       dispatch(reset());
//       navigate("/dashboard");
//     }
//   }, [isSuccess, isLoading, message, isError]);

//   useEffect(() => {
//     dispatch(reset());
//     const getBooking = async () => {
//       try {
//         const res = await fetch(`/api/bookings/${id}`);
//         const data = await res.json();
//         setBooking(data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     getBooking();
//   }, []);

//   const handleDelete = () => {
//     dispatch(deleteBooking(id));
//   };

//   return (
//     <div id="booking">
//       <div className="flex flex-col justify-center items-center h-screen text-black text-center">
//         <h2 className="text-4xl font-bold mb-20 -mt-20 text-white">
//           Booking Details
//         </h2>

//         <div className="content-wrapper p-10 bg-white rounded-lg shadow-lg w-[400px] text-left">
//           <div className="space-y-5 text-wrapper">
//             <p>
//               <strong>Name:</strong> {booking.name}
//             </p>
//             <p>
//               <strong>Email:</strong> {booking.email}
//             </p>
//             <p>
//               <strong>Package:</strong>{" "}
//               {(booking.packageId && booking.packageId.name) || "N/A"}
//             </p>

//             <p>
//               <strong>Booking Date:</strong>{" "}
//               {new Date(booking.functionDate).toLocaleDateString()}
//             </p>
//             <p>
//               <strong>Venue:</strong> {booking.venue || "N/A"}
//             </p>
//             <p>
//               <strong>Contact Number:</strong> {booking.contactNumber || "N/A"}
//             </p>
//             <div className="cta-wrapper">
//               <button>Confirm</button>
//               <button className="danger" onClick={handleDelete}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingDetails;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./booking.styles.scss";
import { deleteBooking,  confirmBooking, reset } from "../../features/booking/bookingSlice";
import { useDispatch, useSelector } from "react-redux";

const BookingDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.booking
  );

  const [booking, setBooking] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false); // NEW

  useEffect(() => {
    if (isSuccess && isDeleting) {
      dispatch(reset());
      navigate("/dashboard");
    }
  }, [isSuccess, isDeleting, dispatch, navigate]);

  useEffect(() => {
    dispatch(reset());
    const getBooking = async () => {
      try {
        const res = await fetch(`/api/bookings/${id}`);
        const data = await res.json();
        setBooking(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getBooking();
  }, [id, dispatch]);

  const handleDelete = () => {
    setIsDeleting(true); // mark that we're deleting
    dispatch(deleteBooking(id));
  };

  const handleConfirm = () => {
    dispatch(confirmBooking(id));
  };

  return (
    <div id="booking">
      <div className="flex flex-col justify-center items-center h-screen text-black text-center">
        <h2 className="text-4xl font-bold mb-20 -mt-20 text-white">
          Booking Details
        </h2>

        {booking ? (
          <div className="content-wrapper p-10 bg-white rounded-lg shadow-lg w-[400px] text-left">
            <div className="space-y-5 text-wrapper">
              <p>
                <strong>Name:</strong> {booking.name}
              </p>
              <p>
                <strong>Email:</strong> {booking.email}
              </p>
              <p>
                <strong>Package:</strong>{" "}
                {(booking.packageId && booking.packageId.name) || "N/A"}
              </p>
              <p>
                <strong>Booking Date:</strong>{" "}
                {new Date(booking.functionDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Venue:</strong> {booking.venue || "N/A"}
              </p>
              <p>
                <strong>Contact Number:</strong>{" "}
                {booking.contactNumber || "N/A"}
              </p>
              <div className="cta-wrapper">
              <button onClick={handleConfirm}>confirm</button>
            <button className="danger" onClick={handleDelete}>
              Delete
            </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-white">Loading booking details...</p>
        )}
      </div>
    </div>
  );
};

export default BookingDetails;


