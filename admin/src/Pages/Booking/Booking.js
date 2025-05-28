import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
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
  }, [id]);

  console.log(booking);

  return (
    <div>
      <h1 className="heading center">Booking</h1>

      {booking && (
        <div className="content-wrapper">
          <div className="text-wrapper">
            <h1 className="heading"> {booking.name} </h1>

            <p className="email"> {booking.pkgID.name} </p>
            <p className="email"> {booking.email} </p>
            <p className="email"> checkIn: {booking.checkInDate} </p>
            <p className="email"> checkout: {booking.checkOutDate} </p>
          </div>
      </div>
    
  )}

</div>
  )}
export default Booking;
