import React, { useContext, useState } from "react";
import axios from "axios";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

function SignUp() {
  const { backend_URL, navigate } = useContext(UserContext);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userName, email, password } = formData;

    if (!userName || !email || !password) {
      setErrorMessage("All fields are required");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${backend_URL}/api/user/userRegistration`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.success) {
        alert("User registered successfully 🎉");
        navigate("/verify");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 px-4">
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Create Account
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Join us and start your journey 🚀
        </p>
      </div>
  
      <div className="flex flex-col gap-5">
        {/* Username */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5
                       text-sm outline-none transition
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
  
        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5
                       text-sm outline-none transition
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
  
        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-11
                         text-sm outline-none transition
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2
                         text-gray-400 hover:text-blue-500 transition"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <FaEyeSlash size={18} /> : <IoEyeSharp size={18} />}
            </button>
          </div>
        </div>
  
        {/* Error */}
        {errorMessage && (
          <p className="text-sm text-red-500 text-center">
            {errorMessage}
          </p>
        )}
  
        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className={`mt-2 w-full rounded-lg py-2.5 text-sm font-semibold
            transition-all duration-200
            ${
              loading
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md"
            }`}
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>
  
        {/* Footer */}
        <p className="text-xs text-center text-gray-500">
          Already have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            <Link to={'/Login'}>Login</Link>
          </span>
        </p>
      </div>
    </form>
  </div>
  );
}

export default SignUp;