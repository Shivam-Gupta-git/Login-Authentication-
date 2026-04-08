import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import {
  FaBars,
  FaTimes,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import axios from "axios";
import { FaCircleUser } from "react-icons/fa6";

function Header() {
  const {
    profileBoxOpen,
    setProfileBoxOpen,
    user,
    backend_URL,
    setUser,
  } = useContext(UserContext);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const accessToken = localStorage.getItem("accessToken");

  const handelLogOut = async () => {
    try {
      const response = await axios.post(
        `${backend_URL}/api/user/userLogout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.data.success) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        setUser(null);
        setProfileBoxOpen(false);
        setMobileMenuOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileBoxOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setProfileBoxOpen]);

  const navLinkStyle = ({ isActive }) =>
    `relative text-[15px] lg:text-base font-medium transition-all duration-300
    ${
      isActive
        ? "text-[#55adff]"
        : "text-gray-700 hover:text-[#55adff]"
    }
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
    after:bg-[#55adff] after:transition-all after:duration-300
    hover:after:w-full ${isActive ? "after:w-full" : ""}`;

  const navLinks = (
    <>
      <NavLink to="/" end className={navLinkStyle}>
        Home
      </NavLink>

      <NavLink to="/notes" end className={navLinkStyle}>
        Notes
      </NavLink>

      <NavLink to="/about" end className={navLinkStyle}>
        About
      </NavLink>

      <NavLink to="/contact" end className={navLinkStyle}>
        Contact
      </NavLink>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-[#aae4fb] backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex h-18.5 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#55adff] text-lg font-bold text-white shadow-lg shadow-blue-300/40 transition duration-300 group-hover:scale-105">
            H
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold text-gray-900 sm:text-xl">
              HighAuth
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-gray-400">
              Secure Notes
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3" ref={dropdownRef}>
          {/* Logged In User */}
          {user?.userName ? (
            <>
              {/* User Name - Desktop */}
              <div className="hidden text-right md:block">
                <p className="text-sm font-semibold text-gray-800">
                  {user.userName}
                </p>
                <p className="text-xs text-gray-400">Welcome back</p>
              </div>

              {/* Avatar */}
              <button
                onClick={() => setProfileBoxOpen((prev) => !prev)}
                className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[#55adff]/20 bg-[#55adff]/10 text-[#55adff] transition-all duration-300 hover:scale-105 hover:bg-[#55adff] hover:text-white"
              >
                <FaCircleUser className="text-[24px]" />
              </button>

              {/* Profile Dropdown */}
              {profileBoxOpen && (
                <div className="absolute right-4 top-19.5 w-64 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Top User Info */}
                  <div className="border-b border-gray-100 bg-linear-to-r from-[#55adff]/10 to-cyan-100/40 px-5 py-4">
                    <p className="text-sm text-gray-500">Signed in as</p>
                    <p className="mt-1 truncate text-base font-semibold text-gray-900">
                      {user.userName}
                    </p>
                  </div>

                  {/* Menu Items */}
                  <div className="p-2">
                    <Link
                      to="/user-profile"
                      onClick={() => setProfileBoxOpen(false)}
                      className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-[#55adff]/10 hover:text-[#55adff]"
                    >
                      <FaCircleUser className="text-base" />
                      My Profile
                    </Link>

                    <Link
                      to="/setting"
                      onClick={() => setProfileBoxOpen(false)}
                      className="mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-[#55adff]/10 hover:text-[#55adff]"
                    >
                      <FaCog className="text-base" />
                      Settings
                    </Link>

                    <button
                      onClick={handelLogOut}
                      className="mt-1 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium text-red-500 transition hover:bg-red-50"
                    >
                      <FaSignOutAlt className="text-base" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <Link
              to="/login"
              className="hidden rounded-2xl bg-[#55adff] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-300/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3d9fff] sm:inline-flex"
            >
              Login
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-700 transition hover:border-[#55adff] hover:text-[#55adff] lg:hidden"
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-lg" />
            ) : (
              <FaBars className="text-lg" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "max-h-100 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4">
          <NavLink
            to="/"
            end
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-[#55adff]/10 text-[#55adff]"
                  : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/notes"
            end
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-[#55adff]/10 text-[#55adff]"
                  : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            Notes
          </NavLink>

          <NavLink
            to="/about"
            end
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-[#55adff]/10 text-[#55adff]"
                  : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            end
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-[#55adff]/10 text-[#55adff]"
                  : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            Contact
          </NavLink>

          {!user?.userName && (
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center rounded-2xl bg-[#55adff] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-300/30 transition hover:bg-[#3d9fff]"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;