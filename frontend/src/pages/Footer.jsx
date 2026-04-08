import React, { useContext } from "react";

import { UserContext } from "../context/UserContext";

function Footer() {
  const { setProfileBoxOpen } = useContext(UserContext);

  return (
    <footer
      className="relative overflow-hidden bg-[#3a6171] text-white"
      onClick={() => setProfileBoxOpen(false)}
    >
      {/* Background Glow */}
      <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-[#0f3b4ca4] blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#0748629c] blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#548ca2c3] blur-3xl border" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">


        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="/privacy"
              className="transition duration-300 hover:text-cyan-400"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="transition duration-300 hover:text-cyan-400"
            >
              Terms
            </a>
            <a
              href="/cookies"
              className="transition duration-300 hover:text-cyan-400"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Animation */}
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
        `}
      </style>
    </footer>
  );
}

export default Footer;