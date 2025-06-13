// import { getPackages, reset } from "../../features/package/packageSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import PackageList from "../../component/PackageList/PackageList";
// const Packages = () => {

//     const dispatch = useDispatch();
//     const { Package } = useSelector((state) => state.Package);
//     useEffect(() => {
//        dispatch(getPackages());
//        dispatch(reset());
//     }, []);
//   return (
//     <div>
//        <div>
//       <div className="container">
//         <h1 className="heading center">Packages</h1>
//         {Packages.length > 0 ? (
//           <PackageList data={Packages} />
//         ) : (
//           <p className="center">No packages available.</p>
//         )}
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Packages;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getPackages, reset } from "../../features/package/packageSlice";
// import PackageList from "../../component/PackageList/PackageList";

// const Packages = () => {
//   const dispatch = useDispatch();

//   // Safely access state.Package and provide fallback
//   const packageState = useSelector((state) => state.Package);
//   const packages = packageState?.Package || [];

//   useEffect(() => {
//     dispatch(getPackages());
//     dispatch(reset());
//   }, [dispatch]);

//   return (
//     <div className="container">
//       <h1 className="heading center">Packages</h1>
//       {packages.length > 0 ? (
//         <PackageList data={packages} />
//       ) : (
//         <p className="center">No packages available.</p>
//       )}
//     </div>
//   );
// };

// export default Packages;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getPackages, reset } from "../../features/package/packageSlice";
// import PackageList from "../../component/PackageList/PackageList";

// const Packages = () => {
//   const dispatch = useDispatch();

//   // Access state properly (using correct slice name and field)
//   const { packages, isLoading, error } = useSelector((state) => state.package);

//   useEffect(() => {
//     dispatch(getPackages());

//     return () => {
//       dispatch(reset()); // cleanup, optional
//     };
//   }, [dispatch]);

//   return (
//     <div className="container">
//       <h1 className="heading center">Packages</h1>
//       {isLoading && <p className="center">Loading...</p>}
//       {error && <p className="center error">Error: {error}</p>}
//       {!isLoading && packages?.length > 0 ? (
//         <PackageList data={packages} />
//       ) : (
//         !isLoading && <p className="center">No packages available.</p>
//       )}
//     </div>
//   );
// };

// export default Packages;

import { motion } from 'framer-motion';
import { getPackages, reset } from '../../features/package/packageSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PackageList from '../../component/PackageList/PackageList';

const Packages = () => {
  const dispatch = useDispatch();
  const { packages, isLoading, isSuccess } = useSelector((state) => state.package);

  useEffect(() => {
    dispatch(getPackages());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [isSuccess, dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <motion.h1
          className="text-5xl font-bold text-center my-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Packages
        </motion.h1>

        {packages.length > 0 ? (
          <PackageList data={packages} />
        ) : (
          <p className="text-center text-gray-600">No packages available.</p>
        )}
      </div>
    </div>
  );
};

export default Packages;
