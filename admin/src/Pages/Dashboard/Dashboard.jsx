// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getBookings } from "../../features/booking/bookingSlice";
// import BookingList from "../../component/BookingList/BookingList";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { user } = useSelector((state) => state.auth);

//   const { bookings } = useSelector((state) => state.booking);

//   useEffect(() => {
//     if (!user) {
//       navigate("/login");
//     }
//     dispatch(getBookings());
//   }, [user]);

//   return (
//     <div className="min-h-screen bg-[#DEF2F1] py-10 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-[#2B7A78] mb-10 drop-shadow-md">
//           Welcome to Your Dashboard
//         </h1>
//         {bookings.length > 0 ? <BookingList data={bookings} /> : null}
        

//           </div>
//         </div>

        
    
//   );
// };

// export default Dashboard;


import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBookings } from "../../features/booking/bookingSlice";
import BookingList from "../../component/BookingList/BookingList";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { bookings } = useSelector((state) => state.booking);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getBookings());
    }
  }, [user, dispatch, navigate]);

  useEffect(() => {
    console.log("Bookings updated:", bookings);
  }, [bookings]);

  return (
    <div className="min-h-screen bg-[#DEF2F1] py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#2B7A78] mb-10 drop-shadow-md">
          Welcome to Your Dashboard
        </h1>

        {bookings && bookings.length > 0 ? (
          <BookingList data={bookings} />
        ) : (
          <p className="text-center text-gray-600">No bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
