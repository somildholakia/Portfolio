import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Experience", href: "#experience" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const listener = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-bold text-2xl bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Somil.dev
        </motion.h1>

        <nav className="hidden md:flex gap-8 text-sm font-medium">

          {navLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="hover:text-violet-400 duration-300"
            >
              {item.title}
            </a>
          ))}

        </nav>

        <button
          onClick={() => setMobile(!mobile)}
          className="md:hidden text-2xl"
        >
          {mobile ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>

        {mobile && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden bg-[#111827] border-t border-white/10"
          >

            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setMobile(false)}
                className="block px-6 py-4 border-b border-white/5 hover:bg-violet-600/20"
              >
                {item.title}
              </a>
            ))}

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}