import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const { navigate, backend_URL } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handelForgotPassword = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`${backend_URL}/api/user/forgot-Password`, {
        email
      })
      if(response.data.success){
        navigate(`/verify-otp/${email}`);
        alert(response.data.message);
        setEmail("")
      }
    } catch (error) {
      console.log(error.message)
      setErrorMessage(error.response?.data?.message || "somthing went wrong")
    }finally{
      setLoading(false)
    }
  }

  return (
<div className="relative min-h-screen overflow-hidden bg-[#96e1ff] px-4 py-1">
  {/* Background Shapes */}
  <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
  <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
  <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-900/10 blur-3xl" />

  <div className="relative z-10 flex min-h-screen items-center justify-center">
    <div className="w-full max-w-6xl overflow-hidden rounded-[36px] border border-white/20 bg-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl lg:grid lg:grid-cols-[1fr_0.9fr]">
      
      {/* Left Side */}
      <div className="hidden flex-col justify-center bg-white/10 p-12 text-white lg:flex">
        <div className="max-w-md">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <div className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
            <span className="text-sm font-medium tracking-wide">
              Password Recovery
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight text-white">
            Forgot your password?
          </h1>

          <p className="mt-6 text-base leading-7 text-gray-500">
            Don’t worry. Enter your email address and we’ll send you a secure
            link to reset your password and get back into your account.
          </p>

          <div className="mt-10 space-y-4">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <h3 className="text-lg font-semibold">Quick & Secure</h3>
              <p className="mt-2 text-sm text-gray-500">
                Reset your password safely in just a few steps.
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <h3 className="text-lg font-semibold">Instant Email Link</h3>
              <p className="mt-2 text-sm text-gray-500">
                We’ll send a reset link directly to your registered email.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="flex items-center justify-center bg-white px-6 py-10 sm:px-10">
        <div className="w-full max-w-md">
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
                  d="M3 8l9 6 9-6m-18 8h18V8"
                />
              </svg>
            </div>

            <h2 className="text-4xl font-bold text-gray-900">
              Reset Password
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Enter your email address and we’ll send you instructions to reset
              your password.
            </p>
          </div>

          {/* Success Message */}
          {isSubmitted && (
            <div className="rounded-3xl border border-green-200 bg-green-50 p-5 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                <svg
                  className="h-7 w-7 text-green-600"
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

              <h3 className="text-lg font-semibold text-gray-900">
                Check your inbox
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                We’ve sent a password reset link to
              </p>

              <p className="mt-1 break-all font-semibold text-[#55adff]">
                {email}
              </p>

              <p className="mt-4 text-sm text-gray-500">
                Didn’t receive the email?{" "}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="font-medium text-[#55adff] transition hover:text-[#3d9fff]"
                >
                  Try again
                </button>
              </p>
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-600">
              {errorMessage}
            </div>
          )}

          {/* Form */}
          {!isSubmitted && (
            <form
              onSubmit={handelForgotPassword}
              className="space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                  className="h-13 w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 text-sm text-gray-800 outline-none transition-all duration-300 focus:border-[#55adff] focus:bg-white focus:ring-4 focus:ring-[#55adff]/15"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="h-13 w-full rounded-2xl bg-[#55adff] text-sm font-semibold text-white shadow-lg shadow-blue-300/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3d9fff] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending Reset Link..." : "Send Reset Link"}
              </button>

              <p className="pt-2 text-center text-sm text-gray-500">
                Remember your password?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-[#55adff] transition hover:text-[#3d9fff]"
                >
                  Sign in
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default ForgotPassword;
