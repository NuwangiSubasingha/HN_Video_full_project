import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updatePackage, reset } from "../../features/counter/package/packageSlice";

const EditPackage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { isSuccess } = useSelector((state) => state.package);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    desc: "",
    packageNumbers: "",
  });

  const { name, price, desc, packageNumbers } = formData;

  useEffect(() => {
    const getPackage = async () => {
      try {
        const res = await fetch(`/api/packages/${id}`);
        const data = await res.json();

        const { packageNumbers, ...rest } = data;
        const packageMap = Array.isArray(packageNumbers)
          ? packageNumbers.map((item) => item.number)
          : [];

        const packageString = packageMap.join(", ");
        setFormData({
          ...rest,
          packageNumbers: packageString,
        });
      } catch (error) {
        console.error("Error fetching package:", error);
      }
    };

    getPackage();
  }, [id]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      navigate("/packages");
    }
  }, [isSuccess, dispatch, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const packageArray = packageNumbers.split(",").map((item) => ({
      number: parseInt(item.trim(), 10),
      unavailableDates: [],
    }));

    const dataToSubmit = {
      name,
      price,
      desc,
      packageNumbers: packageArray,
      packageId: id,
    };

    dispatch(updatePackage(dataToSubmit));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#17252A] via-[#2B7A78] to-[#3AAFA9] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 space-y-6 border border-white/20">
        <h1 className="text-3xl font-bold text-[#FEFFFF] text-center mb-6">🎬 Edit Package</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-[#FEFFFF] mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter package name"
              className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-xl text-[#FEFFFF] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3AAFA9] transition duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#FEFFFF] mb-1">Price</label>
            <input
              type="text"
              name="price"
              value={price}
              onChange={handleChange}
              placeholder="Enter package price"
              className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-xl text-[#FEFFFF] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3AAFA9] transition duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#FEFFFF] mb-1">Description</label>
            <textarea
              name="desc"
              value={desc}
              onChange={handleChange}
              placeholder="Optional description"
              rows="3"
              className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-xl text-[#FEFFFF] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3AAFA9] transition duration-300 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] hover:from-[#3AAFA9] hover:to-[#2B7A78] text-[#FEFFFF] font-semibold rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          >
            Update Package
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPackage;
