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
        }
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
        error.response?.data?.message || "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
<div className="relative min-h-screen overflow-hidden bg-[#55adff] px-4 py-1">

  {/* Soft Overlay */}
  <div className="absolute inset-0 bg-[#dff0b7]/40 backdrop-blur-[1px]" />

  {/* Main Container */}
  <div className="relative z-10 flex h-screen items-center justify-center">
    <div className="w-full max-w-6xl rounded-4xl border border-white bg-[#1d2a230c] p-1 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
      <div className="grid overflow-hidden rounded-3xl bg-[#90e0ef] lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left Side Image */}
        <div className="relative hidden min-h-170 items-center justify-center overflow-hidden lg:flex">
          <img
            src="/images/54.jpg"
            alt="workspace"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Optional subtle fade */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-[#d9efb5]/10" />
        </div>

        {/* Right Side Login Form */}
        <div className="flex items-center justify-center bg-[#f7f7f7] px-6 py-10 sm:px-10">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-85"
          >
            {/* Logo / Brand */}
            <div className="mb-8 text-center">
              <div className="mb-4 inline-flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#68b4fb]" />
                <span className="text-sm font-semibold tracking-wide text-gray-700">
                  Your Brand
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight text-[#222]">
                Login to
                <br />
                your account
              </h2>
            </div>

            {/* Email */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="h-12 w-full rounded-full border border-gray-200 bg-white px-5 text-sm text-gray-700 outline-none transition focus:border-[#55adff] focus:ring-2 focus:ring-[#9cd84e]/20"
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  className="h-12 w-full rounded-full border border-gray-200 bg-white px-5 pr-12 text-sm text-gray-700 outline-none transition focus:border-[#55adff] focus:ring-2 focus:ring-[#9cd84e]/20"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700"
                >
                  {showPassword ? (
                    <IoEyeSharp size={18} />
                  ) : (
                    <FaEyeSlash size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="mb-6 flex justify-end">
              <Link
                to="/forgotPassword"
                className="text-sm font-medium text-gray-500 transition hover:text-[#55adff]"
              >
                Forgot password?
              </Link>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-600">
                {errorMessage}
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="h-12 w-full rounded-full bg-[#78beff] text-sm font-semibold text-white shadow-md transition hover:bg-[#55adff] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Login"}
            </button>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="px-3 text-xs text-gray-400">or</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Social Icons Placeholder */}
            <div className="mb-6 flex items-center justify-center gap-4">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-[#55adff] hover:text-[#55adff]"
              >
                G
              </button>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-[#55adff] hover:text-[#55adff]"
              >
                f
              </button>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-[#55adff] hover:text-[#55adff]"
              >
                in
              </button>
            </div>

            {/* Footer */}
            <p className="text-center text-sm text-gray-500">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-[#55adff] transition hover:text-[#55adff]"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Login;
