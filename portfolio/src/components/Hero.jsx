import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Badge from "./Badge";
import profile from "../assets/profile.jpg";
import {
    FaGithub,
    FaLinkedin,
    FaDownload,
    FaArrowDown,
} from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">

            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-violet-600 rounded-full blur-[170px] opacity-20 -top-32 -left-40"></div>

            <div className="absolute w-[450px] h-[450px] bg-cyan-500 rounded-full blur-[170px] opacity-20 bottom-0 right-0"></div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">

                {/* Left */}

                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8 }}
                >

                    <p className="text-violet-400 font-semibold mb-3">
                        👋 Hello, I'm
                    </p>

                    <h1 className="text-5xl md:text-7xl font-black leading-tight">
                        Somil
                        <br />
                        <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            Dholakia
                        </span>
                    </h1>

                    <h2 className="mt-6 text-xl md:text-3xl font-semibold text-gray-300">

                        <Typewriter
                            words={[
                                "MERN Stack Developer",
                                "Open Source Contributor",
                                "Cloud Junction Ambassador",
                                "Building In Public 🚀",
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={45}
                        />

                    </h2>

                    <p className="mt-8 text-gray-400 leading-8 max-w-xl">

                        Passionate Full Stack Developer from India who enjoys
                        building scalable applications, contributing to Open Source,
                        solving DSA problems and sharing everything I learn publicly.

                    </p>

                    {/* Buttons */}

                    <div className="flex flex-wrap gap-4 mt-10">

                        <a
                            href="#projects"
                            className="bg-violet-600 hover:bg-violet-700 duration-300 px-8 py-4 rounded-full font-semibold"
                        >
                            View Projects
                        </a>

                        <a
                            href="/resume.pdf"
                            className="border border-white/20 hover:border-violet-500 duration-300 px-8 py-4 rounded-full flex items-center gap-2"
                        >
                            <FaDownload />
                            Resume
                        </a>

                    </div>

                    {/* Social */}

                     <div className="mt-12 flex flex-wrap gap-5">

                        <Badge
                            number="4463+"
                            label="LinkedIn Followers"
                        />

                        <Badge
                            number="190+"
                            label="Learning Days"
                        />

                        <Badge
                            number="15+"
                            label="Projects"
                        />

                        <Badge
                            number="4"
                            label="Open Source Programs"
                        />

                    </div>

                    <div className="flex gap-5 mt-10">

                        <a
                            href="https://github.com/somildholakia"
                            target="_blank"
                            rel="noreferrer"
                            className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-violet-600 duration-300"
                        >
                            <FaGithub size={24} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/somilsomi/"
                            target="_blank"
                            rel="noreferrer"
                            className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 duration-300"
                        >
                            <FaLinkedin size={24} />
                        </a>

                    </div>

                   

                </motion.div>

                {/* Right */}

                <motion.div
                    initial={{ opacity: 0, scale: .8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center"
                >

                    <div className="relative">

                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 blur-3xl opacity-60 animate-pulse"></div>

                        <img
                            src={profile}
                            alt="profile"
                            className="relative w-72 md:w-96 rounded-full border-4 border-white/20 shadow-2xl"
                        />

                    </div>

                </motion.div>

            </div>

            {/* Scroll */}

            <a
                href="#about"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <FaArrowDown size={22} />
            </a>

        </section>
    );
}