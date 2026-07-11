import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
  FaDownload,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <SectionTitle
          subtitle="Get In Touch"
          title="Let's Connect"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 md:p-14"
        >

          <div className="text-center">

            <h3 className="text-4xl font-bold">
              Let's Build Something Amazing 🚀
            </h3>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
              Whether you're looking for an intern, collaborator, open-source
              contributor, or simply want to connect, I'd love to hear from
              you. My inbox is always open for exciting opportunities and
              meaningful conversations.
            </p>

          </div>

          {/* Contact Cards */}

          <div className="grid md:grid-cols-3 gap-6 mt-14">

            {/* Email */}

            <motion.a
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              href="mailto:somildholakia0852@gmail.com"
              className="glass-card p-8 text-center"
            >
              <FaEnvelope className="mx-auto text-5xl text-violet-400 mb-5" />

              <h4 className="text-xl font-semibold">
                Email
              </h4>

              <p className="text-gray-400 mt-3 break-all text-sm">
                somildholakia0852@gmail.com
              </p>
            </motion.a>

            {/* GitHub */}

            <motion.a
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              href="https://github.com/somildholakia"
              target="_blank"
              rel="noreferrer"
              className="glass-card p-8 text-center"
            >
              <FaGithub className="mx-auto text-5xl text-violet-400 mb-5" />

              <h4 className="text-xl font-semibold">
                GitHub
              </h4>

              <p className="text-gray-400 mt-3">
                github.com/somildholakia
              </p>
            </motion.a>

            {/* LinkedIn */}

            <motion.a
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              href="https://www.linkedin.com/in/somilsomi/"
              target="_blank"
              rel="noreferrer"
              className="glass-card p-8 text-center"
            >
              <FaLinkedin className="mx-auto text-5xl text-violet-400 mb-5" />

              <h4 className="text-xl font-semibold">
                LinkedIn
              </h4>

              <p className="text-gray-400 mt-3">
                Connect with me
              </p>
            </motion.a>

          </div>

          {/* CTA Buttons */}

          <div className="flex flex-wrap justify-center gap-5 mt-14">

            <a
              href="mailto:somildholakia0852@gmail.com"
              className="
              flex
              items-center
              gap-3
              px-8
              py-4
              rounded-full
              bg-gradient-to-r
              from-violet-600
              to-cyan-500
              hover:scale-105
              transition-all
              duration-300
              font-semibold
              shadow-lg
              shadow-violet-600/30
              "
            >
              <FaPaperPlane />
              Send Email
            </a>

            <a
              href="/resume.pdf"
              download
              className="
              flex
              items-center
              gap-3
              px-8
              py-4
              rounded-full
              border
              border-white/20
              hover:border-violet-500
              hover:bg-white/5
              transition-all
              duration-300
              font-semibold
              "
            >
              <FaDownload />
              Download Resume
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}