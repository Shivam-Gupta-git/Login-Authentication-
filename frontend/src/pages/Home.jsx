import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { setProfileBoxOpen } = useContext(UserContext)
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100" onClick={() => setProfileBoxOpen(false)}>
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mt-10">
          Secure Authentication <br />
          <span className="text-indigo-600">Made Simple</span>
        </h2>

        <p className="mt-6 max-w-xl text-gray-600 text-lg">
          HighAuth provides a powerful and secure authentication system with
          Google login, email verification, and JWT-based authorization.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
          <a
            href="/signup"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition"
          >
            Create Account
          </a>
        </div>
      </main>

      {/* Features Section */}
      <section className="mt-28 px-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "JWT Security",
            desc: "Industry-standard token-based authentication for maximum security.",
          },
          {
            title: "Google OAuth",
            desc: "One-click login with Google using Passport.js.",
          },
          {
            title: "Email Verification",
            desc: "Verify users before allowing access to your platform.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-24 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} HighAuth. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;