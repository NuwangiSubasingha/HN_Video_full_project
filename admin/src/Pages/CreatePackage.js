import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uploadImage } from "../helper/utils";
import { createPackage, reset } from "../features/counter/package/packageSlice";

// create package
const CreatePackage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { isSuccess } = useSelector((state) => state.package);


  const [files, setFiles] = useState("");
  const [formData, setFormData] = useState({
    name: "test",
    price: 200,
    desc: "dafdafadfa",
    packageNumbers: "401, 203, 232, 234",
  });

  const { name, price, desc, packageNumbers } = formData;

  useEffect(() => {
    if (!user) {
      // navigate to login
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

  // handle File change
  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !packageNumbers) {
      return;
    }

    const packageArray = packageNumbers.split(",").map((item) => {
      return {
        number: parseInt(item),
        unavailableDates: [],
      };
    });

    let list = [];
    list = await Promise.all(
      Object.values(files).map(async (file) => {
        const url = await uploadImage(file);
        return url;
      })
    );

    const dataToSubmit = {
      name,
      price,
      desc,
      packageNumbers: packageArray,
      img: list,
    };

    // dispatch createRoom function
    dispatch(createPackage(dataToSubmit));
    // let dataTosubmit = {name, price, desc, packageNumbers, img};
  }

return (
    <div className="container">
      <h1 className="heading center">Create Package</h1>

      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter package name"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              value={price}
              placeholder="Enter package name"
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="desc">Description</label>
            <textarea
              name="desc"
              onChange={handleChange}
              value={desc}
            ></textarea>
          </div>

          <div className="input-group">
            <label htmlFor="desc">Package Numbers</label>
            <textarea
              name="packageNumbers"
              onChange={handleChange}
              value={packageNumbers}
              placeholder="enter package numbers seperated by commas eg: 202, 203, 204, 400"
            ></textarea>
          </div>

          <div className="input-group">
            <label htmlFor="name">Images</label>
            <input
              type="file"
              name="file"
              multiple
              onChange={handleFileChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePackage;
          