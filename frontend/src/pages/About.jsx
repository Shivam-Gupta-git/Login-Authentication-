import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
  FaRocket,
  FaCode,
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";

function About() {
  const { setProfileBoxOpen } = useContext(UserContext);

  const cards = [
    {
      title: "Our Mission",
      description:
        "Our mission is to build simple, secure and scalable web applications that create real value and meaningful experiences for users.",
      icon: <FaRocket />,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "What We Do",
      description:
        "We specialize in modern web development using React, Node.js, MongoDB and elegant UI/UX principles to craft premium digital products.",
      icon: <FaCode />,
      gradient: "from-violet-500 to-indigo-500",
    },
    {
      title: "Why Choose Us",
      description:
        "We focus on performance, security and maintainability while delivering a smooth and modern experience across all devices.",
      icon: <FaShieldAlt />,
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "99.9%", label: "Secure Platform" },
    { value: "24/7", label: "Support & Reliability" },
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#96e1ff]"
      onClick={() => setProfileBoxOpen(false)}
    >
      {/* Background Blur Effects */}
      <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* Left Content */}
          <div className="max-w-2xl animate-[fadeInUp_0.7s_ease]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-medium text-[#0f3d68] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#55adff]" />
              About HighAuth
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Building Secure &
              <span className="block bg-linear-to-r from-[#55adff] to-cyan-500 bg-clip-text text-transparent">
                Modern Experiences
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-700 sm:text-lg">
              We are passionate about creating authentication systems and web
              experiences that are beautiful, secure and incredibly easy to
              use. Our goal is to combine modern technology with clean and
              thoughtful design.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="group flex items-center justify-center gap-2 rounded-2xl bg-[#55adff] px-7 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(85,173,255,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3d9fff]">
                Learn More
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="rounded-2xl border border-white/40 bg-white/60 px-7 py-3 text-sm font-semibold text-gray-700 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white">
                Contact Us
              </button>
            </div>
          </div>

          {/* Floating Right Card */}
          <div className="w-full max-w-md animate-[float_5s_ease-in-out_infinite]">
            <div className="rounded-4xl border border-white/30 bg-white/70 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.1)] backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Trusted by Teams
                  </p>
                  <h2 className="mt-1 text-4xl font-bold text-gray-900">
                    10K+
                  </h2>
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#55adff]/10 text-3xl text-[#55adff]">
                  <FaUsers />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-linear-to-r from-[#55adff] to-cyan-500 p-5 text-white">
                  <p className="text-sm opacity-90">Our Vision</p>
                  <h3 className="mt-2 text-xl font-semibold">
                    Simplicity meets security
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/40 bg-white/80 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-100 text-yellow-500">
                      <FaLightbulb />
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Creative Solutions
                      </h4>
                      <p className="text-sm text-gray-500">
                        Modern ideas with premium UI design.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/40 bg-white/80 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-500">
                      <FaShieldAlt />
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Secure by Default
                      </h4>
                      <p className="text-sm text-gray-500">
                        Built with authentication and safety in mind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item, index) => (
            <div
              key={index}
              className="animate-[fadeInUp_0.8s_ease] rounded-[28px] border border-white/30 bg-white/60 p-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-4xl font-bold text-gray-900">
                {item.value}
              </h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Cards Section */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-4xl border border-white/30 bg-white/70 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] animate-[fadeInUp_1s_ease]"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {/* Glow Effect */}
              <div
                className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-linear-to-br ${card.gradient} opacity-20 blur-3xl transition-all duration-500 group-hover:opacity-30`}
              />

              {/* Icon */}
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${card.gradient} text-2xl text-white shadow-lg transition-all duration-500 group-hover:scale-110`}
              >
                {card.icon}
              </div>

              {/* Text */}
              <h2 className="mt-6 text-2xl font-bold text-gray-900 transition duration-300 group-hover:text-[#2587d8]">
                {card.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                {card.description}
              </p>

              <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#55adff] transition-all duration-300 hover:gap-3">
                Discover More
                <FaArrowRight className="text-xs" />
              </button>

              <div
                className={`mt-6 h-1 w-full rounded-full bg-linear-to-r ${card.gradient}`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 rounded-[36px] border border-white/30 bg-white/60 p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl animate-[fadeInUp_1.2s_ease]">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Ready to build something amazing?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Join us in creating secure, fast and beautifully designed web
            experiences that your users will love.
          </p>

          <button className="mt-8 rounded-2xl bg-[#55adff] px-8 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(85,173,255,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3d9fff]">
            Get Started
          </button>
        </div>
      </div>

      {/* Animations */}
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
}

export default About;