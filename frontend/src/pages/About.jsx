import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function About() {
  const { setProfileBoxOpen } = useContext(UserContext);
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 px-4 py-12" onClick={() => setProfileBoxOpen(false)}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-700">
            About Us
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Learn more about who we are, what we do, and why we do it.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our mission is to build simple, secure, and scalable web
              applications that provide real value to users.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              What We Do
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We specialize in modern web development using React, Node.js,
              MongoDB, and clean UI/UX design principles.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              Why Choose Us
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We focus on performance, security, and maintainability while
              delivering a smooth user experience.
            </p>
          </div>

        </div>



      </div>
    </div>
  );
}

export default About;