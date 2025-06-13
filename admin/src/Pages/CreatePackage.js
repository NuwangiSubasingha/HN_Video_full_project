import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uploadImage } from "../helper/utils";
import { createPackage, reset } from "../features/counter/package/packageSlice";

const CreatePackage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { isSuccess } = useSelector((state) => state.package);

  const [files, setFiles] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    desc: "",
    packageNumbers: "",
  });

  const { name, price, desc, packageNumbers } = formData;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      navigate("/packages");
    }
  }, [dispatch, isSuccess, navigate]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !packageNumbers) return;

    const packageArray = packageNumbers.split(",").map((item) => ({
      number: parseInt(item.trim(), 10),
      unavailableDates: [],
    }));

    let list = [];
    if (files && files.length > 0) {
      list = await Promise.all(
        Object.values(files).map(async (file) => {
          const url = await uploadImage(file);
          return url;
        })
      );
    }

    const dataToSubmit = {
      name,
      price,
      desc,
      packageNumbers: packageArray,
      img: list,
    };

    dispatch(createPackage(dataToSubmit));
  };

  return (
     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-200 to-cyan-200 px-4">
      <div className="w-full max-w-2xl bg-gradient-to-br from-[#2B7A78] via-[#2B7A78] to-[#3AAFA9] backdrop-blur-lg rounded-3xl shadow-2xl p-8 space-y-6 border border-white/20">

        <h1 className="text-3xl font-bold text-[#FEFFFF] text-center mb-6">🎬 Create New Package</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-[#FEFFFF] mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter package name"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-xl text-[#FEFFFF] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3AAFA9] transition duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#FEFFFF] mb-1">Price</label>
            <input
              type="text"
              name="price"
              value={price}
              placeholder="Enter price"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-xl text-[#FEFFFF] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3AAFA9] transition duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#FEFFFF] mb-1">Description</label>
            <textarea
              name="desc"
              value={desc}
              onChange={handleChange}
              placeholder="Description of the Package"
              rows="3"
              className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-xl text-[#FEFFFF] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3AAFA9] transition duration-300 resize-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#FEFFFF] mb-1">Package Numbers</label>
            <textarea
              name="packageNumbers"
              value={packageNumbers}
              onChange={handleChange}
              placeholder=" "
              rows="2"
              className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-xl text-[#FEFFFF] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3AAFA9] transition duration-300 resize-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#FEFFFF] mb-1">Upload Images</label>
            <input
              type="file"
              name="file"
              multiple
              onChange={handleFileChange}
              className="block w-full text-[#FEFFFF] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#2B7A78] file:text-white hover:file:bg-[#3AAFA9] transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] hover:from-[#3AAFA9] hover:to-[#2B7A78] text-[#FEFFFF] font-semibold rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          >
             Create Package
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePackage;
