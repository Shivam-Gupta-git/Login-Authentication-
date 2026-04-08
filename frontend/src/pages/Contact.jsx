import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const { setProfileBoxOpen } = useContext(UserContext);

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#96e1ff]"
      onClick={() => setProfileBoxOpen(false)}
    >
      {/* Background Effects */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center animate-[fadeInLeft_0.8s_ease]">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-medium text-[#0f3d68] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#55adff]" />
              Get In Touch
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Let's Build Something
              <span className="block bg-linear-to-r from-[#55adff] to-cyan-500 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-700 sm:text-lg">
              Have a question, idea or project in mind? We'd love to hear from
              you. Send us a message and our team will get back to you as soon
              as possible.
            </p>

            {/* Contact Info Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/30 bg-white/60 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#55adff]/10 text-[#55adff]">
                  <FaEnvelope />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  Email Us
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  support@example.com
                </p>
              </div>

              <div className="rounded-3xl border border-white/30 bg-white/60 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-500">
                  <FaPhoneAlt />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  Call Us
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  +91 98765 43210
                </p>
              </div>

              <div className="rounded-3xl border border-white/30 bg-white/60 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  Visit Us
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Your Office Address Here
                </p>
              </div>

              <div className="rounded-3xl border border-white/30 bg-white/60 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-500">
                  <FaClock />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  Working Hours
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Mon - Sat, 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-[fadeInRight_0.9s_ease]">
            <div className="relative overflow-hidden rounded-[36px] border border-white/30 bg-white/70 p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
              {/* Decorative Glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Send a Message
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Fill out the form below and we'll reply shortly.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full rounded-2xl border border-white/40 bg-white/80 px-5 py-4 text-gray-800 outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-gray-400 focus:border-[#55adff] focus:ring-4 focus:ring-[#55adff]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full rounded-2xl border border-white/40 bg-white/80 px-5 py-4 text-gray-800 outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-gray-400 focus:border-[#55adff] focus:ring-4 focus:ring-[#55adff]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Write your message here..."
                      className="w-full resize-none rounded-2xl border border-white/40 bg-white/80 px-5 py-4 text-gray-800 outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-gray-400 focus:border-[#55adff] focus:ring-4 focus:ring-[#55adff]/20"
                    />
                  </div>

                  <button className="group mt-2 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#55adff] px-6 py-4 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(85,173,255,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3d9fff]">
                    <FaPaperPlane className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    Send Message
                  </button>
                </div>

                <div className="mt-8 rounded-2xl border border-white/30 bg-white/60 p-4 text-center text-sm text-gray-600 backdrop-blur-xl">
                  Prefer email? Reach us directly at{" "}
                  <span className="font-semibold text-[#2587d8]">
                    support@example.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>
        {`
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Contact;