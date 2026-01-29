import React from "react";
import { FaUser, FaBell, FaLock, FaCreditCard } from "react-icons/fa";

function Setting() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 px-4 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-700">
            Settings
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your account preferences and security settings
          </p>
        </div>

        {/* Settings Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Profile Settings */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <FaUser className="text-indigo-600 text-xl" />
              <h2 className="text-lg font-semibold text-gray-800">Profile</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Update your personal information like name, email, and avatar.
            </p>
          </div>

          {/* Notifications */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <FaBell className="text-indigo-600 text-xl" />
              <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Manage email, SMS, and push notifications from the app.
            </p>
          </div>

          {/* Security */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <FaLock className="text-indigo-600 text-xl" />
              <h2 className="text-lg font-semibold text-gray-800">Security</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Change your password and enable two-factor authentication.
            </p>
          </div>

          {/* Payment / Billing */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <FaCreditCard className="text-indigo-600 text-xl" />
              <h2 className="text-lg font-semibold text-gray-800">Billing</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Manage your payment methods, invoices, and subscription plans.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Setting;