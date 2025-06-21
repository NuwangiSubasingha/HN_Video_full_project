// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./bookingList.styles.scss"; // Import the CSS file for styling

// const BookingList = ({ data }) => {
//   // Sample data for demonstration
//   //   const data = [
//   //     { id: 1, name: "John Doe", email: "john@example.com", room: "101" },
//   //     { id: 2, name: "Jane Doe", email: "jane@example.com", room: "102" },
//   //     // Add more data as needed
//   //   ];

//   // Function to handle actions (e.g., edit, delete)
//   const handleAction = (id, action) => {
//     // Implement action logic here
//     console.log(`${action} user with ID ${id}`);
//   };

//   return (
//     <div className="container">
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Room</th>
//               <th>Confirmed</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => (
//               <tr key={item._id}>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>{item.pkgID.name}</td>
//                 <td>{item.confirmed ? "Yes" : "No"}</td>
//                 <td>
//                   <Link to={`/bookings/${item._id}`}> View</Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BookingList;



// import React from "react";
// import { Link } from "react-router-dom";
// import "./bookingList.styles.scss";

// const BookingList = ({ data }) => {
//   const handleAction = (id, action) => {
//     console.log(`${action} user with ID ${id}`);
//   };

//   return (
//     <div className="container">
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Room</th>
//               <th>Confirmed</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => (
//               <tr key={item._id || item.id}>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>{item.pkgID?.name || "N/A"}</td>
//                 <td>{item.confirmed ? "Yes" : "No"}</td>
//                 <td>
//                   <Link to={`/bookings/${item._id}`}>View</Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BookingList;


// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./bookingList.styles.scss"; // Import the CSS file for styling

// const BookingList = ({ data }) => {
//   // Log data to see what's being passed
//   useEffect(() => {
//     console.log("BookingList data:", data);

//     if (!data || data.length === 0) {
//       console.warn("No booking data found or data is not an array.");
//     } else {
//       data.forEach((item, index) => {
//         console.log(`Item ${index}:`, item);
//         if (!item.pkgID) {
//           console.warn(`Warning: Missing pkgID for item with ID ${item._id}`);
//         }
//       });
//     }
//   }, [data]);

//   // Function to handle actions (e.g., edit, delete)
//   const handleAction = (id, action) => {
//     console.log(`${action} user with ID ${id}`);
//   };

//   return (
//     <div className="container">
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Room</th>
//               <th>Confirmed</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data && data.length > 0 ? (
//               data.map((item) => (
//                 <tr key={item._id}>
//                   <td>{item.name}</td>
//                   <td>{item.email}</td>
//                   <td>{item.pkgID?.name || "N/A"}</td>
//                   <td>{item.confirmed ? "Yes" : "No"}</td>
//                   <td>
//                     <Link to={`/bookings/${item._id}`}>View</Link>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5">No bookings found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BookingList;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./bookingList.styles.scss";

// const BookingList = () => {
//   const data = [
//     {
//       _id: "1",
//       name: "John Doe",
//       email: "john@example.com",
//       pkgID: { name: "Room 101" },
//       confirmed: true,
//     },
//     {
//       _id: "2",
//       name: "Jane Smith",
//       email: "jane@example.com",
//       pkgID: { name: "Room 102" },
//       confirmed: false,
//     },
//     {
//       _id: "3",
//       name: "Alice Johnson",
//       email: "alice@example.com",
//       pkgID: { name: "Room 103" },
//       confirmed: true,
//     },
//   ];

//   return (
//     <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
//       <table className="min-w-full text-sm text-left text-gray-700 border">
//         <thead className="bg-[#3AAFA9] text-white">
//           <tr>
//             <th className="py-2 px-4 border">Name</th>
//             <th className="py-2 px-4 border">Email</th>
//             <th className="py-2 px-4 border">Room</th>
//             <th className="py-2 px-4 border">Confirmed</th>
//             <th className="py-2 px-4 border">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item._id} className="hover:bg-gray-100">
//               <td className="py-2 px-4 border">{item.name}</td>
//               <td className="py-2 px-4 border">{item.email}</td>
//               <td className="py-2 px-4 border">{item.pkgID.name}</td>
//               <td className="py-2 px-4 border">
//                 {item.confirmed ? "Yes" : "No"}
//               </td>
//               <td className="py-2 px-4 border">
//                 <Link
//                   to={`/bookings/${item._id}`}
//                   className="text-blue-500 underline"
//                 >
//                   View
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BookingList;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("/api/bookings");
        const data = await res.json();
        console.log("Fetched bookings:", data);

        if (Array.isArray(data)) {
          setBookings(data.reverse()); // Show newest first
        } else {
          console.error("Expected array, got:", data);
        }
      } catch (error) {
        console.log("Error fetching bookings:", error.message);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="p-4 text-black">
      <h1 className="text-2xl font-bold mb-4">All Bookings</h1>

      <div className="overflow-x-auto">
        <div className="bg-[#538b89] p-4 text-white">
          <table className="min-w-full border text-sm">
            <thead>
              <tr className="text-left">
                <th className="p-2 border">#</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Package</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Venue</th>
                <th className="p-2 border">Contact</th>
                <th className="p-2 border">Confirmed</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking._id} className="bg-white text-black">
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border">{booking.name}</td>
                  <td className="p-2 border">{booking.email}</td>
                  <td className="p-2 border">{booking.packageId?.name || "N/A"}</td>
                  <td className="p-2 border">
                    {new Date(booking.functionDate).toLocaleDateString()}
                  </td>
                  <td className="p-2 border">{booking.venue || "N/A"}</td>
                  <td className="p-2 border">{booking.contactNumber || "N/A"}</td>
                  <td className="p-2 border">
                    {booking.confirmed ? "Yes" : "No"}
                  </td>
                  <td className="p-2 border">
                    <button
                      onClick={() => navigate(`/bookings/${booking._id}`)}
                      className="text-blue-700 hover:underline"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {bookings.length === 0 && (
            <p className="text-center text-gray-300 mt-4">No bookings found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingList;
