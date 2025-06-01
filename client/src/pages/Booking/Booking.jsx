import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createBooking, reset } from "../../features/booking/bookingSlice";
import { useDispatch, useSelector } from "react-redux";

const Booking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess } = useSelector((state) => state.booking);

  const [packages, setPackages] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    functionDate: "",
    venue: "",
    contactNumber: "",
    selectedPackage: ""
  });

  const {
    name,
    email,
    functionDate,
    venue,
    contactNumber,
    selectedPackage
  } = formData;

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await fetch("/api/packages");
        const data = await res.json();
        if (!res.ok) {
          console.log("Error fetching packages");
          return;
        }
        setPackages(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchPackages();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      navigate("/success");
      dispatch(reset());
    }
  }, [isSuccess, navigate, dispatch]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      packageId: selectedPackage,
      name,
      email,
      functionDate,
      venue,
      contactNumber
    };

    dispatch(createBooking(dataToSubmit));
  };

  return (
    <div>
      <h1 className="heading center">Book Now</h1>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter full name"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Enter your email address"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="functionDate">Function Date</label>
            <input
              type="date"
              name="functionDate"
              value={functionDate}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="venue">Venue</label>
            <input
              type="text"
              name="venue"
              value={venue}
              placeholder="Enter your chosen location"
              onChange={handleChange}
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
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="selectedPackage">Select Package</label>
            <select
              name="selectedPackage"
              value={selectedPackage}
              onChange={handleChange}
            >
              <option value="">-- Choose a Package --</option>
              {packages.map((pkg) => (
                <option key={pkg._id} value={pkg._id}>
                  {pkg.name}
                </option>
              ))}
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
