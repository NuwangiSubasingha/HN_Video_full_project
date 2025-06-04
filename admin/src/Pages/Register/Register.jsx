import { useState, useEffect } from "react";
import { registerUser, reset } from "../../features/counter/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import registerBg from "../../assets/img1.jpg"; 

const Register = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { user, isSuccess } = useSelector((state) => state.auth);

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // const { name, email, password } = formData;

  // useEffect(() => {
  //   if (isSuccess) {
  //     navigate("/");
  //     dispatch(reset());
  //   }
  // }, [isSuccess, user, dispatch, navigate]);

  // const handleChange = (e) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(registerUser({ name, email, password }));
  // };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isSuccess } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin", // <<< Make sure role is sent
  });

  const { name, email, password, role } = formData;

  useEffect(() => {
    if (isSuccess && user?.role === "admin") {
      navigate("/login");
      dispatch(reset());
    }
  }, [isSuccess, user, dispatch, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password, role }));
  };


  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${registerBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#17252A]/70 backdrop-blur-sm"></div>

      {/* Form container */}
      <div className="relative z-10 w-full max-w-md bg-[#FEFFFF]/90 border border-[#DEF2F1] shadow-2xl rounded-2xl p-10 backdrop-blur-xl">
        <h1 className="text-4xl font-bold text-center text-[#2B7A78] mb-8 drop-shadow-md">
          Create an Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="group">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#17252A] group-focus-within:text-[#3AAFA9] transition"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="John Doe"
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 rounded-lg border border-[#3AAFA9] text-[#17252A] bg-[#DEF2F1] focus:outline-none focus:ring-2 focus:ring-[#2B7A78] transition-all duration-300"
              required
            />
          </div>

          {/* Email */}
          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#17252A] group-focus-within:text-[#3AAFA9] transition"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="you@example.com"
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 rounded-lg border border-[#3AAFA9] text-[#17252A] bg-[#DEF2F1] focus:outline-none focus:ring-2 focus:ring-[#2B7A78] transition-all duration-300"
              required
            />
          </div>

          {/* Password */}
          <div className="group">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#17252A] group-focus-within:text-[#3AAFA9] transition"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="••••••••"
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 rounded-lg border border-[#3AAFA9] text-[#17252A] bg-[#DEF2F1] focus:outline-none focus:ring-2 focus:ring-[#2B7A78] transition-all duration-300"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-[#2B7A78] text-white font-semibold rounded-lg hover:bg-[#3AAFA9] shadow-md hover:shadow-lg transition-all duration-300"
          >
            Register
          </button>
        </form>

        {/* Optional footer text */}
        <p className="mt-6 text-center text-sm text-[#3AAFA9]">
          Already have an account?{" "}
          <a href="/login" className="underline hover:text-[#2B7A78]">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
