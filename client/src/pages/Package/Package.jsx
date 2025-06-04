import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset, deletePackage } from '../../features/package/packageSlice';
import Carousel from "../../component/Carousel/Carousel";

const Package = () => {
  const isSuccess = useSelector((state) => state.Package?.isSuccess);
  const user = useSelector((state) => state.auth?.user);  // <-- get logged-in user from auth slice
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pkg, setPackage] = useState(null);

  useEffect(() => {
    if (isSuccess) {
      navigate('/packages');
      dispatch(reset());
    }
  }, [dispatch, isSuccess, navigate]);

  useEffect(() => {
    const getPackage = async () => {
      try {
        const res = await fetch(`/api/packages/${id}`);
        if (res.ok) {
          const data = await res.json();
          setPackage(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getPackage();
  }, [dispatch, id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this package?');
    if (confirmDelete) {
      try {
        const resultAction = await dispatch(deletePackage(id));
        if (deletePackage.fulfilled.match(resultAction)) {
          navigate('/packages');
          dispatch(reset());
        }
      } catch (err) {
        console.error('Failed to delete the package:', err);
      }
    }
  };

  const handleBookNowClick = () => {
    if (!user) {
      alert('Please login');
      navigate('/login');
    } else {
      navigate(`/bookings/${pkg._id}`);
    }
  };

  return (
    <div id="package" className="bg-[#DEF2F1] min-h-screen">
      <div className="container mx-auto py-12 px-6">
        {pkg ? (
          <div className="bg-[#FEFFFF] shadow-lg rounded-lg p-6">
            <div className="img-wrapper mb-6">
              <Carousel data={pkg.img} />
            </div>
            <div className="text-wrapper">
              <h1 className="text-3xl font-semibold text-[#17252A] text-center mb-4">{pkg.name}</h1>
              <p className="text-[#2B7A78] text-center mb-4">{pkg.desc}</p>
              <h2 className="text-xl font-bold text-[#3AAFA9] text-center mb-6">Rs: {pkg.price.toFixed(2)}</h2>
              <div className='cta-wrapper text-center space-x-4'>
                {/* Changed from Link to button to handle login check */}
                <button
                  onClick={handleBookNowClick}
                  className="bg-[#2B7A78] border-2 border-[#3AAFA9] text-[#FEFFFF] py-2 px-6 rounded-lg shadow-md hover:bg-[#3AAFA9] text-base font-medium"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-[#17252A]">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Package;
