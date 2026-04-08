import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
  FaStickyNote,
  FaLightbulb,
  FaTasks,
  FaUserAlt,
  FaShoppingCart,
  FaBookOpen,
  FaPlus,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";

function Notes() {
  const { setProfileBoxOpen } = useContext(UserContext);

  const notes = [
    {
      title: "Meeting Notes",
      desc: "Discuss project milestones and timelines with the team.",
      icon: <FaStickyNote />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Ideas",
      desc: "Brainstorm new features and improvements for the app.",
      icon: <FaLightbulb />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "To-Do",
      desc: "Complete the React dashboard and connect it to the backend API.",
      icon: <FaTasks />,
      color: "from-emerald-500 to-teal-400",
    },
    {
      title: "Personal Notes",
      desc: "Ideas for blog posts, tutorials, and learning notes.",
      icon: <FaUserAlt />,
      color: "from-pink-500 to-rose-400",
    },
    {
      title: "Shopping List",
      desc: "Milk, bread, eggs, fruits, and office supplies.",
      icon: <FaShoppingCart />,
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Learning Notes",
      desc: "React hooks, Tailwind CSS tips, and backend API integration ideas.",
      icon: <FaBookOpen />,
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#96e1ff]"
      onClick={() => setProfileBoxOpen(false)}
    >
      {/* Background Blur Effects */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Top Header Section */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Side */}
          <div className="max-w-2xl animate-[fadeInUp_0.7s_ease]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-medium text-[#0f3d68] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#55adff]" />
              Organize Everything
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Your Smart
              <span className="block bg-linear-to-r from-[#55adff] to-cyan-500 bg-clip-text text-transparent">
                Notes Dashboard
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-700 sm:text-lg">
              Keep track of your ideas, tasks, learning notes and everything
              important in one beautiful and organized workspace.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="group flex items-center justify-center gap-2 rounded-2xl bg-[#55adff] px-6 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(85,173,255,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3d9fff]">
                <FaPlus />
                Create Note
              </button>

              <button className="group flex items-center justify-center gap-2 rounded-2xl border border-white/40 bg-white/60 px-6 py-3 text-sm font-semibold text-gray-700 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white">
                <FaSearch />
                Search Notes
              </button>
            </div>
          </div>

          {/* Right Side Stats Card */}
          <div className="w-full max-w-md animate-[float_5s_ease-in-out_infinite]">
            <div className="rounded-4xl border border-white/30 bg-white/70 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.1)] backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Total Notes
                  </p>
                  <h2 className="mt-1 text-4xl font-bold text-gray-900">
                    {notes.length}
                  </h2>
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#55adff]/10 text-3xl text-[#55adff]">
                  <FaStickyNote />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-linear-to-r from-[#55adff] to-cyan-500 p-4 text-white">
                  <p className="text-sm opacity-90">Most Recent Category</p>
                  <h3 className="mt-1 text-xl font-semibold">
                    Learning Notes
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-gray-100 bg-white p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-400">
                      Tasks
                    </p>
                    <h4 className="mt-1 text-2xl font-bold text-gray-900">12</h4>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-white p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-400">
                      Ideas
                    </p>
                    <h4 className="mt-1 text-2xl font-bold text-gray-900">8</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notes Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {notes.map((note, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[30px] border border-white/30 bg-white/70 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_70px_rgba(0,0,0,0.14)] animate-[fadeInUp_0.8s_ease]"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Top Glow */}
              <div
                className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-linear-to-br ${note.color} opacity-20 blur-3xl transition duration-500 group-hover:opacity-30`}
              />

              {/* Icon */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${note.color} text-2xl text-white shadow-lg transition duration-500 group-hover:scale-110`}
              >
                {note.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="mt-6 text-2xl font-bold text-gray-900 transition duration-300 group-hover:text-[#2587d8]">
                  {note.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {note.desc}
                </p>

                <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#55adff] transition duration-300 hover:gap-3">
                  Open Note
                  <FaArrowRight className="text-xs" />
                </button>
              </div>

              {/* Bottom Decorative Line */}
              <div
                className={`mt-6 h-1 w-full rounded-full bg-linear-to-r ${note.color} opacity-70`}
              />
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 rounded-[36px] border border-white/30 bg-white/60 p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl animate-[fadeInUp_1.1s_ease]">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Start capturing your ideas today
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Create notes, manage your daily tasks, save your learning journey
            and keep everything organized with a clean and modern interface.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#55adff] px-7 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(85,173,255,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3d9fff]">
            <FaPlus />
            Add Your First Note
          </button>
        </div>
      </div>

      {/* Custom Animations */}
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

export default Notes;