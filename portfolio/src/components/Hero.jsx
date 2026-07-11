import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile.jpg";
import Badge from "./Badge";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* Background Glow */}

      <div className="absolute w-[600px] h-[600px] bg-violet-700 rounded-full blur-[180px] opacity-20 -top-40 -left-40" />

      <div className="absolute w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[180px] opacity-20 bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center w-full">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-violet-400 font-semibold text-lg mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none">
            Somil
            <br />

            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Dholakia
            </span>
          </h1>

          <h2 className="mt-8 text-2xl md:text-3xl font-semibold text-gray-300 h-16">

            <Typewriter
              words={[
                "MERN Stack Developer",
                "Open Source Contributor (GSSoC • NSOC • SSOC)",
                "Cloud Junction Campus Ambassador",
                "Building in Public • 5500+ LinkedIn Community",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={65}
              deleteSpeed={45}
            />

          </h2>

          {/* Achievement Chips */}

          <div className="flex flex-wrap gap-3 mt-6">

            <span className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-sm">
              ☁ Cloud Junction Ambassador
            </span>

            <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-sm">
              🌍 Open Source Contributor
            </span>

            <span className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-sm">
              💼 AI & ML Intern
            </span>

          </div>

          <p className="mt-8 text-lg text-gray-400 leading-9 max-w-xl">

            I'm a Computer Science student and MERN Stack Developer passionate
            about building scalable web applications and solving real-world
            problems through code. I actively contribute to Open Source,
            participate in global developer programs, and document my learning
            journey publicly while growing a community of <span className="text-violet-400 font-semibold">5,500+ professionals</span> on LinkedIn.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full font-semibold shadow-lg shadow-violet-600/30"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-white/20 hover:border-violet-500 hover:bg-white/5 transition-all duration-300 px-8 py-4 rounded-full flex items-center gap-3 font-semibold"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          {/* Stats */}

          <div className="mt-12 flex flex-wrap gap-5">

            <Badge
              number="5500+"
              label="LinkedIn Followers"
            />

            <Badge
              number="190+"
              label="Learning Days"
            />

            <Badge
              number="20+"
              label="Projects"
            />

            <Badge
              number="6"
              label="Programs & Internships"
            />

          </div>

          {/* Social */}

          <div className="flex gap-5 mt-10">

            <a
              href="https://github.com/somildholakia"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-violet-600 hover:-translate-y-2 transition-all duration-300"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/somilsomi/"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:-translate-y-2 transition-all duration-300"
            >
              <FaLinkedin size={24} />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: {
              duration: 1,
            },
            scale: {
              duration: 1,
            },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 blur-3xl opacity-70 animate-pulse" />

            <img
              src={profile}
              alt="Somil Dholakia"
              className="relative w-72 md:w-[430px] rounded-full ring-4 ring-violet-500/40 shadow-[0_0_80px_rgba(139,92,246,0.45)]"
            />

          </div>

        </motion.div>

      </div>

      {/* Scroll */}

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <FaArrowDown size={22} />
      </a>

    </section>
  );
}