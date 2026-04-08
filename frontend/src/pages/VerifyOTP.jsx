import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { IoReload } from "react-icons/io5";

function VerifyOTP() {
  const { backend_URL, navigate } = useContext(UserContext);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const inputRefs = useRef([]);
  const { email } = useParams();

  const handelChange = (index, value) => {
    if (value.length > 1) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handelVerify = async () => {
    const finalOtp = otp.join("");
    if (finalOtp.length !== 6) {
      setErrorMessage("Please enter a valid 6-digit code.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${backend_URL}/api/user/verify-otp/${email}`,
        { otp: finalOtp }
      );
      setSuccessMessage(response.data.message);
      setTimeout(() => {
        navigate(`/change-password/${email}`);
      }, 2000);
    } catch (error) {
      console.log(error);
      setErrorMessage(
        error.response?.data?.message ||
          "Verification failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const clearOtp = () => {
    setOtp(["", "", "", "", "", ""]);
    setErrorMessage("");
    inputRefs.current[0]?.focus();
  };

  return (
<div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#96e1ff] px-3 py-4 sm:px-4">
  {/* Background Blur */}
  <div className="absolute -top-20 -left-16 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
  <div className="absolute top-1/3 -right-16 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

  {/* Card */}
  <div className="relative z-10 w-full max-w-95 sm:max-w-105">
    <div className="rounded-[28px] border border-white/30 bg-white/95 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:p-7">
      
      {/* Icon */}
      <div className="mb-4 flex justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#55adff]/10 sm:h-14 sm:w-14">
          <svg
            className="h-6 w-6 text-[#55adff] sm:h-7 sm:w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l9 6 9-6m-18 8h18V8"
            />
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Verify Email
        </h1>

        <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm">
          Enter the 6-digit code sent to your email address.
        </p>
      </div>

      {/* Verified State */}
      {isVerified ? (
        <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-center">
          <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-green-100">
            <svg
              className="h-5 w-5 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2 className="text-base font-semibold text-green-700">
            Verified Successfully
          </h2>

          <p className="mt-1 text-xs text-gray-600 sm:text-sm">
            Redirecting to your account...
          </p>
        </div>
      ) : (
        <>
          {/* OTP */}
          <div className="mt-7 flex justify-center gap-2 sm:gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handelChange(index, e.target.value)}
                ref={(el) => (inputRefs.current[index] = el)}
                id={`otp-${index}`}
                className="h-11 w-11 rounded-xl border border-gray-200 bg-gray-50 text-center text-lg font-semibold text-gray-800 outline-none transition-all duration-300 focus:border-[#55adff] focus:bg-white focus:ring-3 focus:ring-[#55adff]/20 sm:h-12 sm:w-12 sm:text-xl"
              />
            ))}
          </div>

          <p className="mt-3 text-center text-xs text-gray-500 sm:text-sm">
            Type the code to continue
          </p>

          {/* Error */}
          {errorMessage && (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-center text-xs text-red-600 sm:text-sm">
              {errorMessage}
            </div>
          )}

          {/* Success */}
          {successMessage && (
            <div className="mt-4 rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-center text-xs text-green-600 sm:text-sm">
              {successMessage}
            </div>
          )}

          {/* Buttons */}
          <div className="mt-6 space-y-3">
            <button
              onClick={handelVerify}
              disabled={loading || otp.some((digit) => digit === "")}
              className="flex h-11 w-full items-center justify-center rounded-xl bg-[#55adff] px-4 text-sm font-semibold text-white shadow-md shadow-blue-300/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3d9fff] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify Code"}
            </button>

            <button
              onClick={clearOtp}
              disabled={loading}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <IoReload className="text-sm" />
              Clear
            </button>
          </div>

          {/* Footer */}
          <p className="mt-5 text-center text-xs text-gray-500 sm:text-sm">
            Wrong email?{" "}
            <Link
              to="/forgotPassword"
              className="font-semibold text-[#55adff] transition hover:text-[#3d9fff]"
            >
              Go back
            </Link>
          </p>
        </>
      )}
    </div>
  </div>
</div>
  );
}

export default VerifyOTP;
