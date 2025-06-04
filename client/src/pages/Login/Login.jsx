import { useState, useEffect } from "react";
import { loginUser, reset } from "../../features/counter/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import loginBg from "../../assets/img1.jpg";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isSuccess } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
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
    dispatch(loginUser({ email, password }));
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#17252A]/70 backdrop-blur-sm"></div>

      {/* Form container */}
      <div className="relative z-10 w-full max-w-md bg-[#FEFFFF]/90 border border-[#DEF2F1] shadow-2xl rounded-2xl p-10 backdrop-blur-xl">
        <h1 className="text-4xl font-bold text-center text-[#2B7A78] mb-8 drop-shadow-md">
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
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

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-[#2B7A78] text-white font-semibold rounded-lg hover:bg-[#3AAFA9] shadow-md hover:shadow-lg transition-all duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Optional footer text */}
        <p className="mt-6 text-center text-sm text-[#3AAFA9]">
          Don't have an account?{" "}
          <a href="/register" className="underline hover:text-[#2B7A78]">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
