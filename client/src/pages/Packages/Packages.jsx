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

import { getPackages, reset } from '../../features/package/packageSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PackageList from '../../component/PackageList/PackageList';

const Packages = () => {
  const dispatch = useDispatch();
  const { packages, isLoading, isSuccess } = useSelector((state) => state.package);

  useEffect(() => {
    dispatch(getPackages());
  }, [dispatch]); // Added dispatch to the dependency array

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [isSuccess, dispatch]); // Added dispatch to the dependency array

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
        <h1 className="heading center">Packages</h1>
        {packages.length > 0 ? (
          <PackageList data={packages} />
        ) : (
          <p className="center">No packages available.</p>
        )}
      </div>
    </div>
  );
};

export default Packages;
