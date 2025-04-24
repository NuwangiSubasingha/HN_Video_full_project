import { getPackages,reset } from '../../features/counter/package/packageSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PackageList from '../../component/PackageList/PackageList';

const Packages = () => {
  const dispatch = useDispatch ();
  const {packages, isLoading, isSuccess} = useSelector((state) => state.package);
  useEffect(() => {
    dispatch(getPackages());
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [isSuccess]);

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
  )
}

export default Packages;
