import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

function ChangePassword() {
  const { navigate, backend_URL } = useContext(UserContext)
  const { email } = useParams();
  const[loading, setLoading] = useState(false);
  const[errorMessage, setErrorMessage] = useState("");
  const[successMessage, setSuccessMessage] = useState("");
  const[newPassword, setNewPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");

  const handelChangePassword = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    if(!newPassword || !confirmPassword){
      setErrorMessage("Please fill all the fields");
      return;
    }

    if(newPassword !== confirmPassword){
      setErrorMessage("Password do not match");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${backend_URL}/api/user/change-password/${email}`,{
        newPassword,
        confirmPassword
      })
      setSuccessMessage(response.data.message)
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (error) {
      console.log(error)
      setErrorMessage(error.response?.data?.message || 'somthing went wrong')
    }finally{
      setLoading(false)
    }
  }
  
  return (
<div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#96e1ff] px-3 py-4 sm:px-4">
  {/* Background Blur */}
  <div className="absolute -top-20 -left-16 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
  <div className="absolute top-1/4 -right-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
  <div className="absolute bottom-0 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-blue-900/10 blur-3xl" />

  {/* Center Form */}
  <div className="relative z-10 w-full max-w-112.5">
    <div className="rounded-[30px] border border-white/30 bg-white/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:p-8">
      
      {/* Icon */}
      <div className="mb-5 flex justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#55adff]/10">
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
              d="M12 15v2m-6-6V9a6 6 0 1112 0v2m-13 0h14a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7a1 1 0 011-1z"
            />
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Change Password
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Set a strong new password for
        </p>

        <p className="mt-1 break-all text-sm font-semibold text-[#55adff]">
          {email}
        </p>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-600">
          {errorMessage}
        </div>
      )}

      {/* Success Message */}
      {successMessage && (
        <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-center text-sm text-green-600">
          {successMessage}
        </div>
      )}

      {/* Form */}
      <div className="mt-6 space-y-5">
        {/* New Password */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            New Password
          </label>

          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-800 outline-none transition-all duration-300 focus:border-[#55adff] focus:bg-white focus:ring-4 focus:ring-[#55adff]/15"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-800 outline-none transition-all duration-300 focus:border-[#55adff] focus:bg-white focus:ring-4 focus:ring-[#55adff]/15"
          />
        </div>

        {/* Button */}
        <button
          disabled={loading}
          onClick={handelChangePassword}
          className="mt-2 flex h-12 w-full items-center justify-center rounded-2xl bg-[#55adff] text-sm font-semibold text-white shadow-lg shadow-blue-300/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3d9fff] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Changing Password..." : "Change Password"}
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default ChangePassword