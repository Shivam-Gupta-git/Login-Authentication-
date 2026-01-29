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
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-indigo-700">
            Reset Your Password
          </h1>
          <p className="mt-2 text-gray-600">
            Enter your email address and we'll send you instructions to reset
            your password.
          </p>
        </div>

        {/* Message */}
        {isSubmitted && (
          <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-center">
            <p className="font-medium">Check your inbox!</p>
            <p>
              We have sent a password reset link to{" "}
              <span className="font-semibold">{email}</span>.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              If you didn’t receive the email, check your spam folder or{" "}
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-indigo-600 underline hover:text-indigo-700"
              >
                try again
              </button>
            </p>
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-center">
            {errorMessage}
          </div>
        )}

        {/* Form */}
        {!isSubmitted && (
          <form onSubmit={handelForgotPassword} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              {loading ? "Sending reset link..." : "Send Reset Link"}
            </button>
            <p className="text-center text-gray-600 mt-4 text-sm">
              Remember your password?{" "}
              <Link
                to="/login"
                className="text-indigo-600 font-medium hover:text-indigo-700 transition"
              >
                Sign in
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
