import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { updatePackage, reset } from "../../features/counter/package/packageSlice";
import { useSelector, useDispatch } from "react-redux";

const EditPackage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isSuccess } = useSelector((state) => state.package);
    const { id } = useParams();
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
            const packageMap = packageNumbers.map((item) => item.number);
            const packageString = packageMap.join(",");
            setFormData({
              ...rest,
              packageNumbers: packageString,
            });
          } catch (error) {
            console.log(error);
          }
        };
        getPackage();
      }, []);

      useEffect(() => {
        if (isSuccess) {
          // navigate to packages
          dispatch(reset());
          navigate("/packages");
        }
      }, [isSuccess]);

      const handleChange = (e) => {
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !price || !packageNumbers) {
          return;
        };

        const packageArray = packageNumbers.split(",").map((item) => {
            return {
              number: parseInt(item),
              unavailableDates: [],
            };
          });

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
    <div className="container">
      <h1 className="heading center">Edit Package</h1>

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


          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};


export default EditPackage;