import React, { useContext, useState } from "react";
import axios from "axios";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

function SignUp() {
  const { backend_URL, navigate,} = useContext(UserContext);

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
<div className="relative min-h-screen overflow-hidden bg-[#96e1ff] px-4 py-1">
  {/* Background Shapes */}
  <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
  <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
  <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-900/10 blur-3xl" />

  <div className="relative z-10 flex min-h-screen items-center justify-center">
    <div className="w-full max-w-6xl overflow-hidden rounded-[36px] border border-white/20 bg-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl lg:grid lg:grid-cols-[1fr_0.9fr]">
      
      {/* Left Section */}
      <div className="relative hidden overflow-hidden lg:flex flex-col justify-center p-12 text-white">
  {/* Background Image */}
  <img
    src="/images/101.jpg"
    alt="background"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark / Blue Overlay */}
  <div className="absolute inset-0" />
  <div className="absolute inset-0 bg-linear-to-br from-[#55adff]/40 via-[#1b4f8c]/40 to-[#081c34]/70" />

  {/* Blur Circles */}
  <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />

  {/* Content */}
  <div className="relative z-10 max-w-md">
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
      <div className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
      <span className="text-sm font-medium tracking-wide">
        Welcome to Your Platform
      </span>
    </div>

    <h1 className="text-5xl font-bold leading-tight">
      Create your account and start exploring.
    </h1>

    <p className="mt-6 text-base leading-7 text-blue-100">
      Join thousands of users and access your dashboard, manage your profile,
      and enjoy a seamless experience with a clean modern UI.
    </p>

    <div className="mt-10 grid gap-4 sm:grid-cols-2">
      <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
        <h3 className="text-lg font-semibold">Fast Setup</h3>
        <p className="mt-2 text-sm text-blue-100">
          Create your account in less than a minute.
        </p>
      </div>

      <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
        <h3 className="text-lg font-semibold">Secure Access</h3>
        <p className="mt-2 text-sm text-blue-100">
          Your account is protected with strong authentication.
        </p>
      </div>
    </div>
  </div>
</div>

      {/* Right Form Section */}
      <div className="flex items-center justify-center bg-white px-6 py-10 sm:px-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md"
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#55adff]/10">
              <svg
                className="h-7 w-7 text-[#55adff]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>

            <h2 className="text-4xl font-bold text-gray-900">
              Create Account
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Join us and start your journey today
            </p>
          </div>

          <div className="space-y-5">
            {/* Username */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Username
              </label>

              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="h-13 w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 text-sm text-gray-800 outline-none transition-all duration-300 focus:border-[#55adff] focus:bg-white focus:ring-4 focus:ring-[#55adff]/15"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="h-13 w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 text-sm text-gray-800 outline-none transition-all duration-300 focus:border-[#55adff] focus:bg-white focus:ring-4 focus:ring-[#55adff]/15"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
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
                  className="h-13 w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 pr-12 text-sm text-gray-800 outline-none transition-all duration-300 focus:border-[#55adff] focus:bg-white focus:ring-4 focus:ring-[#55adff]/15"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#55adff]"
                >
                  {showPassword ? (
                    <IoEyeSharp size={18} />
                  ) : (
                    <FaEyeSlash size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-600">
                {errorMessage}
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 h-13 w-full rounded-2xl bg-[#55adff] text-sm font-semibold text-white shadow-lg shadow-blue-300/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3d9fff] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>

            {/* Footer */}
            <p className="pt-2 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/Login"
                className="font-semibold text-[#55adff] transition hover:text-[#3d9fff]"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  );
}

export default SignUp;