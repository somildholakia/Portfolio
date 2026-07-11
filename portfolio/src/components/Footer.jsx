import {
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div>

            <h2 className="text-3xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Somil.dev
            </h2>

            <p className="text-gray-400 mt-3">
              MERN Stack Developer • Open Source Contributor
            </p>

          </div>

          <div className="flex gap-5">

            <a
              href="https://github.com/somildholakia"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-violet-600 transition flex items-center justify-center"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/somilsomi/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-blue-600 transition flex items-center justify-center"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center text-gray-400">

          © {new Date().getFullYear()} Somil Dholakia

          <br />

          Built with React, Tailwind CSS & Framer Motion

          <br />

          <span className="inline-flex items-center gap-2 mt-3">
            Made with <FaHeart className="text-red-500" /> in India 🇮🇳
          </span>

        </div>

      </div>

    </footer>
  );
}