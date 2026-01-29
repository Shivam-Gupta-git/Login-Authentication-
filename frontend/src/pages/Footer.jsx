import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo / Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-indigo-700">MyApp</h2>
          <p className="text-gray-600 text-sm mt-1">
            Build clean, modern web apps with ease.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-4 text-center">
          <a href="/about" className="text-gray-600 hover:text-indigo-600 transition">
            About
          </a>
          <a href="/contact" className="text-gray-600 hover:text-indigo-600 transition">
            Contact
          </a>
          <a href="/privacy" className="text-gray-600 hover:text-indigo-600 transition">
            Privacy Policy
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-600">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">
            <FaGithub />
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-4 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;