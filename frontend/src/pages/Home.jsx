import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
  FaShieldAlt,
  FaGoogle,
  FaEnvelopeOpenText,
  FaArrowRight,
  FaLock,
  FaUserCheck,
} from "react-icons/fa";

const Home = () => {
  const { setProfileBoxOpen, user } = useContext(UserContext);

  const features = [
    {
      icon: <FaShieldAlt />,
      title: "JWT Security",
      desc: "Industry-standard token based authentication with secure access and protected routes.",
    },
    {
      icon: <FaGoogle />,
      title: "Google OAuth",
      desc: "Quick one-click login with Google using Passport.js integration.",
    },
    {
      icon: <FaEnvelopeOpenText />,
      title: "Email Verification",
      desc: "Verify every account before access to keep your platform safe.",
    },
  ];

  const stats = [
    { value: "99.9%", label: "Secure Login" },
    { value: "24/7", label: "Authentication" },
    { value: "10K+", label: "Trusted Users" },
  ];

  return (
    <div
      onClick={() => setProfileBoxOpen(false)}
      className="relative min-h-screen overflow-hidden bg-[#96e1ff]"
    >
      {/* Background Blurs */}
      <div className="absolute -top-28 -left-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-900/10 blur-3xl" />

      {/* Hero Section */}
      <main className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pt-10 pb-20 sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:pt-16 lg:pb-28">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-medium text-[#0f3d68] backdrop-blur-md animate-[fadeIn_0.7s_ease]">
            <span className="h-2 w-2 rounded-full bg-[#55adff]" />
            Modern Authentication Platform
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl animate-[fadeInUp_0.8s_ease]">
            Secure Authentication
            <br />
            <span className="bg-linear-to-r from-[#55adff] to-cyan-500 bg-clip-text text-transparent">
              Made Beautiful & Simple
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-700 sm:text-lg animate-[fadeInUp_1s_ease]">
            HighAuth gives you a powerful authentication experience with secure
            JWT authorization, Google sign-in, email verification and a modern,
            seamless interface for your users.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start animate-[fadeInUp_1.2s_ease]">
            <a
              href={user ? "/notes" : "/login"}
              className="group flex items-center justify-center gap-2 rounded-2xl bg-[#55adff] px-7 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(85,173,255,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3d9fff]"
            >
              {user ? "Go to Dashboard" : "Get Started"}
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="/signup"
              className="rounded-2xl border border-[#55adff]/30 bg-white/70 px-7 py-3 text-sm font-semibold text-[#2587d8] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Create Account
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6 animate-[fadeInUp_1.4s_ease]">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/30 bg-white/30 px-4 py-5 text-center backdrop-blur-xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  {item.value}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Card */}
        <div className="mt-14 w-full max-w-md lg:mt-0 animate-[float_5s_ease-in-out_infinite]">
          <div className="relative overflow-hidden rounded-4xl border border-white/30 bg-white/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-2xl sm:p-8">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#55adff]/20 blur-2xl" />

            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#55adff]/10 text-[#55adff]">
                  <FaLock className="text-2xl" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Secure Access
                  </h3>
                  <p className="text-sm text-gray-500">
                    Protected with modern authentication
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "JWT Authentication",
                  "Google Sign In",
                  "Email Verification",
                  "Protected Routes",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white/80 px-4 py-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600">
                      <FaUserCheck />
                    </div>

                    <div>
                      <p className="font-medium text-gray-800">{item}</p>
                      <p className="text-xs text-gray-500">
                        Enabled and ready to use
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Small Bottom Badge */}
              <div className="mt-6 rounded-2xl bg-linear-to-r from-[#55adff] to-cyan-500 px-5 py-4 text-white shadow-lg">
                <p className="text-sm font-medium opacity-90">
                  Authentication Success Rate
                </p>
                <h4 className="mt-1 text-2xl font-bold">99.9%</h4>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-medium text-[#0f3d68] backdrop-blur-md">
            Features
          </div>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything you need for authentication
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            HighAuth comes with all the essential tools you need to create a
            secure and modern user authentication experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="group rounded-[30px] border border-white/30 bg-white/70 p-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#55adff]/10 text-2xl text-[#55adff] transition duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* Custom Animation Styles */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-12px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;