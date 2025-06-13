import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset, deletePackage } from '../../features/counter/package/packageSlice';
import Carousel  from "../../component/Carousel/Carousel";

const Package = () => {
  const { user } = useSelector((state) => state.auth);
  const isSuccess = useSelector((state) => state.Package?.isSuccess);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pkg, setPackage] = useState(null);


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
          dispatch(reset()); // Reset after navigation
        }
      } catch (err) {
        console.error('Failed to delete the package:', err);
      }
    }
  };

  return (
    <div id="package" className="bg-[#DEF2F1] min-h-screen">
      <div className="container mx-auto py-12 px-6">
        {pkg ? (
          <div className="bg-[#FEFFFF] shadow-lg rounded-lg p-6">
            <div className="img-wrapper mb-6">
              
              <Carousel data={pkg.img}/>
              
           {/*<img
                src={pkg.img[0]}
                alt={pkg.name}
                className="w-full h-[550px] object-cover rounded-lg shadow-md"
              />*/}
            </div>
            <div className="text-wrapper">
              <h1 className="text-3xl font-semibold text-[#17252A] text-center mb-4">{pkg.name}</h1>
              <p className="text-[#2B7A78] text-center mb-4">{pkg.desc}</p>
              <h2 className="text-xl font-bold text-[#3AAFA9] text-center mb-6">Rs: {pkg.price.toFixed(2)}</h2>
             <div className="cta-wrapper text-center space-x-4">
               {user?.role === 'admin' ? (
                 <>
                   <Link
                     to={`/edit/packages/${pkg._id}`}
                     className="inline-block bg-[#3AAFA9] border-2 border-[#2B7A78] text-[#FEFFFF] py-2 px-6 rounded-lg shadow-md hover:bg-[#2B7A78] hover:border-[#3AAFA9] text-base font-medium"
                   >
                     Edit Package
                   </Link>
                   <button
                     onClick={handleDelete}
                     className="inline-block bg-[#FEFFFF] border-2 border-[#3AAFA9] text-[#3AAFA9] py-2 px-6 rounded-lg shadow-md hover:bg-[#c14841] hover:text-[#FEFFFF] text-base font-medium"
                   >
                     Delete Package
                   </button>
                 </>
               ) : (
                 <button
                   onClick={() => navigate('/')}
                   className="bg-[#2B7A78] border-2 border-[#3AAFA9] text-[#FEFFFF] py-2 px-6 rounded-lg shadow-md hover:bg-[#3AAFA9] text-base font-medium"
                 >
                   Login
                 </button>
               )}
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
