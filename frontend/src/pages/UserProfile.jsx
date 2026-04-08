import React, { useContext } from 'react'
import { Link, useParams } from "react-router-dom";
import { FaUser, FaLock, FaSignOutAlt, FaUserShield } from "react-icons/fa";
import { UserContext } from '../context/UserContext';

function UserProfile() {
  const { user, setProfileBoxOpen } = useContext(UserContext);
  const email = user?.email;

  return (
<div
  className="relative min-h-screen overflow-hidden bg-[#96e1ff] px-4 py-10 sm:px-6 lg:px-8"
  onClick={() => setProfileBoxOpen(false)}
>
  {/* Background Blur Effects */}
  <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
  <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
  <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-7xl">
    {/* Header Section */}
    <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between animate-[fadeInDown_0.7s_ease]">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-medium text-[#0f3d68] backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-[#55adff]" />
          Dashboard Overview
        </div>

        <h1 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Welcome back,
          <span className="ml-2 bg-linear-to-r from-[#55adff] to-cyan-500 bg-clip-text text-transparent">
            {user?.name || "User"} 👋
          </span>
        </h1>

        <p className="mt-3 max-w-2xl text-base text-gray-700 sm:text-lg">
          Manage your profile, account security and session settings from one
          place.
        </p>
      </div>

      {/* Quick Status Card */}
      <div className="w-full max-w-sm rounded-[28px] border border-white/30 bg-white/60 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-2xl animate-[fadeInRight_0.8s_ease]">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl text-green-500">
            <FaUserShield />
          </div>

          <div>
            <p className="text-sm text-gray-500">Account Status</p>
            <h3 className="text-xl font-bold text-green-600">Verified & Active</h3>
          </div>
        </div>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-[90%] rounded-full bg-linear-to-r from-[#55adff] to-cyan-500" />
        </div>

        <p className="mt-2 text-xs text-gray-500">
          Your account security setup is 90% complete.
        </p>
      </div>
    </div>

    {/* Dashboard Cards */}
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {/* Profile Card */}
      <div className="group relative overflow-hidden rounded-4xl border border-white/30 bg-white/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] animate-[fadeInUp_0.8s_ease]">
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#55adff]/10 text-2xl text-[#55adff]">
              <FaUser />
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
              Active
            </span>
          </div>

          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Profile Information
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            View your registered account details and profile information.
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-white/40 bg-white/80 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Full Name
              </p>
              <p className="mt-1 text-base font-semibold text-gray-900">
                {user?.name || "User"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/40 bg-white/80 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Email Address
              </p>
              <p className="mt-1 break-all text-base font-semibold text-gray-900">
                {user?.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Card */}
      <div className="group relative overflow-hidden rounded-4xl border border-white/30 bg-white/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] animate-[fadeInUp_1s_ease]">
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl text-violet-600">
            <FaLock />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Security Settings
          </h2>

          <p className="mt-2 text-sm leading-7 text-gray-600">
            Keep your account secure by updating your password and reviewing
            your login credentials regularly.
          </p>

          <div className="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-4">
            <div className="flex items-center gap-2">
              <FaLock className="text-violet-500" />
              <span className="text-sm font-medium text-violet-700">
                Password protection enabled
              </span>
            </div>
          </div>

          <Link
            to={`/user-change-password/${email}`}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(99,102,241,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(99,102,241,0.45)]"
          >
            Change Password
            <FaLock className="text-xs" />
          </Link>
        </div>
      </div>

      {/* Logout Card */}
      <div className="group relative overflow-hidden rounded-4xl border border-white/30 bg-white/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] animate-[fadeInUp_1.2s_ease]">
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-500/10 blur-3xl" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-2xl text-red-500">
            <FaSignOutAlt />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Logout
          </h2>

          <p className="mt-2 text-sm leading-7 text-gray-600">
            Sign out safely from your current account and end your active
            session securely.
          </p>

          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-600">
              You can log in again anytime with your credentials.
            </p>
          </div>

          <button
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl border border-red-400 bg-white px-5 py-3 text-sm font-semibold text-red-500 transition-all duration-300 hover:-translate-y-1 hover:bg-red-500 hover:text-white"
            onClick={() => console.log("Logout")}
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Animations */}
  <style>
    {`
      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translateY(-30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

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
    `}
  </style>
</div>
  )
}

export default UserProfile