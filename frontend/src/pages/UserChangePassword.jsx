import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";

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
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full p-8 rounded-3xl shadow-xl flex flex-col gap-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-indigo-700 mb-2">
            Change Password
          </h1>
          <p className="text-gray-600 text-sm">
            Set a new password for <span className="font-medium">{email}</span>
          </p>
        </div>

        {/* Status Messages */}
        {errorMessage && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-center">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-lg text-center">
            {successMessage}
          </div>
        )}

        {/* Form Inputs */}
        <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 relative">
  <label className="text-gray-700 font-medium">Old Password</label>
  <div className="relative">
    <input
      type={showOldPassword ? "text" : "password"}
      value={oldPassword}
      onChange={(e) => setOldPassword(e.target.value)}
      required
      placeholder="Enter old password"
      className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />
    <button
      type="button"
      onClick={() => setShowOldPassword((pre) => !pre)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-600 font-medium hover:text-indigo-800"
    >
      {showOldPassword ? <IoEyeSharp size={18} /> : <FaEyeSlash size={18}/>}
    </button>
  </div>
</div>

          <div className="flex flex-col gap-1 relative">
  <label className="text-gray-700 font-medium">New Password</label>
  <div className="relative">
    <input
      type={showNewPassword ? "text" : "password"}
      value={newPassword}
      onChange={(e) => setNewPassword(e.target.value)}
      placeholder="Enter new password"
      className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />
    <button
      type="button"
      onClick={() => setShowNewPassword((pre) => !pre)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-600 font-medium hover:text-indigo-800"
    >
      {showNewPassword ? <IoEyeSharp size={18} /> : <FaEyeSlash size={18}/>}
    </button>
  </div>
</div>
          {/* handel form button */}
          <button
            onClick={handelChangePassword}
            disabled={loading}
            className="w-full py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 mt-2"
          >
            {loading ? "Changing..." : "Change Password"}
          </button>

          {/* go back button */}
          <div className="text-center mt-6">
            <p className="text-gray-600 mb-2">
              If you don’t want to change your password
            </p>
            <Link
              to="/user-profile"
              className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 font-medium rounded-lg hover:bg-indigo-200 transition"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserChangePassword;
