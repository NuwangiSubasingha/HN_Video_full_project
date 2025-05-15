import { getPackages, reset } from '../../features/counter/package/packageSlice';
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
