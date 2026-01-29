import React, { useContext } from 'react'
import { Link, useParams } from "react-router-dom";
import { FaUser, FaLock, FaSignOutAlt } from "react-icons/fa";
import { UserContext } from '../context/UserContext';

function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 px-4 py-10">
    <div className="max-w-5xl mx-auto">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-indigo-700">
          Welcome, {user?.name || "User"} 👋
        </h1>
        <p className="text-gray-600 mt-1">
          Manage your account and settings
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Profile Card */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <FaUser className="text-indigo-600 text-xl" />
            <h2 className="text-lg font-semibold text-gray-800">
              Profile Info
            </h2>
          </div>

          <p className="text-sm text-gray-600">
            <span className="font-medium">Email:</span> {user?.email}
          </p>

          <p className="text-sm text-gray-600 mt-1">
            <span className="font-medium">Account Status:</span>{" "}
            <span className="text-green-600 font-semibold">Active</span>
          </p>
        </div>

        {/* Change Password */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaLock className="text-indigo-600 text-xl" />
              <h2 className="text-lg font-semibold text-gray-800">
                Security
              </h2>
            </div>
            <p className="text-sm text-gray-600">
              Update your password to keep your account secure.
            </p>
          </div>

          <Link
            to={`/change-password`}
            className="mt-4 inline-block text-center py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Change Password
          </Link>
        </div>

        {/* Logout */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaSignOutAlt className="text-red-500 text-xl" />
              <h2 className="text-lg font-semibold text-gray-800">
                Logout
              </h2>
            </div>
            <p className="text-sm text-gray-600">
              Sign out from your account safely.
            </p>
          </div>

          <button
            className="mt-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition"
            onClick={() => console.log("Logout")}
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  </div>
  )
}

export default UserProfile