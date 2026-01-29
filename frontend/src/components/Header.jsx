import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { FaCircleUser } from "react-icons/fa6";
import axios from "axios";

function Header() {
  const { profileBoxOpen, setProfileBoxOpen, user, backend_URL, setUser } = useContext(UserContext);
  const accessToken = localStorage.getItem("accessToken");

  const handelLogOut = async () => {
    try {
      const response = await axios.post(`${backend_URL}/api/user/userLogout`, {},{
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      if(response.data.success){
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        setUser(null);
      }
    } catch (error) {
      console.log(error)
    }
  }

  const navLinks = (
    <>
      <NavLink
        to="/"
        className="text-lg font-medium hover:text-indigo-600 transition"
      >
        Home
      </NavLink>
      <NavLink
        to="/notes"
        className="text-lg font-medium hover:text-indigo-600 transition"
      >
        Notes
      </NavLink>
      <NavLink
        to="/about"
        className="text-lg font-medium hover:text-indigo-600 transition"
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className="text-lg font-medium hover:text-indigo-600 transition"
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <header className="w-full h-16 sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600">HighAuth</h1>

        {/* Nav Links */}
        <nav className="flex gap-10">{navLinks}</nav>

        {/* Right Section */}
        <div className="relative">
          {user?.userName ? (
            <>
              {/* Avatar */}
              <div
                onClick={() => setProfileBoxOpen((prev) => !prev)}
                className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold cursor-pointer shadow hover:bg-indigo-600 transition"
              >
                <FaCircleUser className="text-2xl" />
              </div>

              {/* Dropdown */}
              {profileBoxOpen && (
                <div className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-lg border overflow-hidden">
                  <Link
                    className="block px-4 py-2 hover:bg-indigo-50"
                    to="/profile"
                  >
                    {user.userName}
                  </Link>
                  <Link
                    className="block px-4 py-2 hover:bg-indigo-50"
                    to="/settings"
                  >
                    Settings
                  </Link>
                  <button onClick={handelLogOut} className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50">
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
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
