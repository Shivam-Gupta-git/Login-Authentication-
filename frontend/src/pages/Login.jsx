import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { UserContext } from "../context/UserContext";
import axios from "axios";

function Login() {
  const { backend_URL, navigate, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formData;

    // ✅ Validation
    if (!email || !password) {
      setErrorMessage("All fields are required");
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");

      const response = await axios.post(
        `${backend_URL}/api/user/userLogin`,
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
        },
      );

      if (response.data.success) {
        const { accessToken, refreshToken, regeteredUser } = response.data;

        if (accessToken) localStorage.setItem("accessToken", accessToken);
        if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
        if (regeteredUser) {
          localStorage.setItem("user", JSON.stringify(regeteredUser));
          setUser(regeteredUser);
        }

        alert("Login Successful");
        navigate("/");
      } else {
        setErrorMessage(response.data.message || "Login failed");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Something went wrong. Try again.",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Login to your account
        </h2>

        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Link to="/forgotPassword" className="text-sm text-indigo-600 hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-indigo-600 hover:text-indigo-800 font-medium"
            >
              {showPassword ? (
                <IoEyeSharp size={18} />
              ) : (
                <FaEyeSlash size={18} />
              )}
            </button>
          </div>
        </div>
        <div>
          {errorMessage && (
            <p className="text-sm text-red-500 text-center">{errorMessage}</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition ${
            loading
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md"
          }`}
        >
          Sign In
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
