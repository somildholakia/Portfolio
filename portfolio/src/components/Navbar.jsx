import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Experience", href: "#experience" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#030712]/80 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}

        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          className="text-2xl md:text-3xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Somil.dev
        </motion.a>

        {/* Desktop */}

        <nav className="hidden md:flex items-center gap-8">

          {navLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="relative text-gray-300 hover:text-white transition duration-300 group"
            >
              {item.title}

              <span
                className="
                absolute
                left-0
                -bottom-2
                w-0
                h-[2px]
                bg-violet-500
                transition-all
                duration-300
                group-hover:w-full
                "
              />
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="
            flex
            items-center
            gap-2
            px-5
            py-2.5
            rounded-full
            bg-gradient-to-r
            from-violet-600
            to-cyan-500
            text-white
            font-semibold
            hover:scale-105
            transition-all
            duration-300
            shadow-lg
            shadow-violet-600/30
            "
          >
            <FaDownload size={14} />
            Resume
          </a>

        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="
            md:hidden
            backdrop-blur-xl
            bg-[#030712]/95
            border-t
            border-white/10
            "
          >

            <div className="flex flex-col p-6 gap-4">

              {navLinks.map((item) => (

                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="
                  py-3
                  rounded-lg
                  text-gray-300
                  hover:bg-violet-600/20
                  hover:text-white
                  transition-all
                  px-4
                  "
                >
                  {item.title}
                </a>

              ))}

              <a
                href="/resume.pdf"
                download
                className="
                mt-2
                flex
                justify-center
                items-center
                gap-2
                py-3
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-cyan-500
                font-semibold
                "
              >
                <FaDownload />
                Download Resume
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}