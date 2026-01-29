import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Contact() {
  const { setProfileBoxOpen } = useContext(UserContext)
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 px-4 py-12 flex items-center justify-center" onClick={() => setProfileBoxOpen(false)}>
      <div className="bg-white max-w-2xl w-full p-8 rounded-3xl shadow-xl text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-8">
          We'd love to hear from you! Reach out to us anytime.
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
          ></textarea>

          <button className="w-full py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
            Send Message
          </button>
        </div>

        <div className="mt-8 text-gray-600 text-sm">
          Or contact us at: <span className="font-medium">support@example.com</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;