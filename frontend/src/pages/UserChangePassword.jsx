import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";

function UserChangePassword() {
  const { navigate, backend_URL } = useContext(UserContext);
  const { email } = useParams();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  const handelChangePassword = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (!oldPassword || !newPassword) {
      setErrorMessage("All fields should be required");
      return;
    }
    try {
      setLoading(true);
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setErrorMessage("You are not logged in.");
        return;
      }
      const response = await axios.post(
        `${backend_URL}/api/user/userChangePassword/${email}`,
        { oldPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setSuccessMessage(response.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response?.data?.message || "somthing went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
<div className="relative min-h-screen overflow-hidden bg-[#96e1ff] px-4 py-8">
  {/* Background Blur Shapes */}
  <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
  <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
  <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

  <div className="relative z-10 flex min-h-screen items-center justify-center">
    <div className="w-full max-w-lg animate-[fadeInUp_0.8s_ease]">
      <div className="overflow-hidden rounded-[34px] border border-white/30 bg-white/70 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
        {/* Top Decorative Bar */}
        <div className="relative h-28 bg-linear-to-r from-[#55adff] via-cyan-400 to-blue-500">
          <div className="absolute -bottom-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-3xl border-4 border-white bg-white shadow-xl">
            <FaLock className="text-3xl text-[#55adff]" />
          </div>

          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute left-10 top-4 h-16 w-16 rounded-full bg-white/10 blur-xl" />
        </div>

        <div className="px-6 pb-8 pt-14 sm:px-8">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#55adff]/20 bg-[#55adff]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#2587d8]">
              Secure Account
            </div>

            <h1 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Change Password
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
              Create a new secure password for
              <span className="ml-1 break-all font-semibold text-[#2587d8]">
                {email}
              </span>
            </p>
          </div>

          {/* Messages */}
          <div className="mt-6 space-y-3">
            {errorMessage && (
              <div className="animate-[fadeIn_0.3s_ease] rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 shadow-sm">
                {errorMessage}
              </div>
            )}

            {successMessage && (
              <div className="animate-[fadeIn_0.3s_ease] rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-600 shadow-sm">
                {successMessage}
              </div>
            )}
          </div>

          {/* Form */}
          <div className="mt-7 flex flex-col gap-5">
            {/* Old Password */}
            <div className="group">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Old Password
              </label>

              <div className="relative">
                <input
                  type={showOldPassword ? "text" : "password"}
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                  placeholder="Enter your current password"
                  className="w-full rounded-2xl border border-white/40 bg-white/80 px-5 py-4 pr-14 text-gray-800 shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#55adff] focus:ring-4 focus:ring-[#55adff]/20"
                />

                <button
                  type="button"
                  onClick={() => setShowOldPassword((pre) => !pre)}
                  className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl text-[#2587d8] transition hover:bg-[#55adff]/10"
                >
                  {showOldPassword ? (
                    <IoEyeSharp size={20} />
                  ) : (
                    <FaEyeSlash size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div className="group">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                New Password
              </label>

              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter a strong new password"
                  className="w-full rounded-2xl border border-white/40 bg-white/80 px-5 py-4 pr-14 text-gray-800 shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#55adff] focus:ring-4 focus:ring-[#55adff]/20"
                />

                <button
                  type="button"
                  onClick={() => setShowNewPassword((pre) => !pre)}
                  className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl text-[#2587d8] transition hover:bg-[#55adff]/10"
                >
                  {showNewPassword ? (
                    <IoEyeSharp size={20} />
                  ) : (
                    <FaEyeSlash size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Optional Password Strength */}
            {newPassword && (
              <div className="animate-[fadeIn_0.4s_ease] rounded-2xl border border-white/30 bg-white/60 p-4 backdrop-blur-xl">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-700">
                    Password Strength
                  </span>
                  <span
                    className={`font-semibold ${
                      newPassword.length >= 8
                        ? "text-green-600"
                        : "text-orange-500"
                    }`}
                  >
                    {newPassword.length >= 8 ? "Strong" : "Weak"}
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      newPassword.length >= 8
                        ? "w-full bg-green-500"
                        : newPassword.length >= 5
                        ? "w-2/3 bg-yellow-400"
                        : "w-1/3 bg-red-400"
                    }`}
                  />
                </div>

                <p className="mt-2 text-xs text-gray-500">
                  Use at least 8 characters with letters, numbers and symbols.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handelChangePassword}
              disabled={loading}
              className="mt-2 flex w-full items-center justify-center rounded-2xl bg-linear-to-r from-[#55adff] to-cyan-500 px-5 py-4 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(85,173,255,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(85,173,255,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Changing Password..." : "Change Password"}
            </button>

            {/* Footer */}
            <div className="mt-4 border-t border-gray-200 pt-6 text-center">
              <p className="mb-3 text-sm text-gray-600">
                Don’t want to change your password?
              </p>

              <Link
                to="/user-profile"
                className="inline-flex items-center justify-center rounded-2xl border border-[#55adff]/20 bg-[#55adff]/10 px-5 py-3 text-sm font-semibold text-[#2587d8] transition-all duration-300 hover:-translate-y-1 hover:bg-[#55adff]/20"
              >
                Go Back to Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    {`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(35px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `}
  </style>
</div>
  );
}

export default UserChangePassword;
