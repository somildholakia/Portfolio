import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <SectionTitle
          subtitle="Get In Touch"
          title="Let's Connect"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10"
        >

          <h3 className="text-3xl font-bold">
            Let's build something amazing 🚀
          </h3>

          <p className="text-gray-400 mt-4 leading-8">
            Whether you have an opportunity, collaboration, or just want to
            connect, my inbox is always open.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-10">

            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              className="glass-card p-5 text-center hover:bg-violet-600/20 duration-300"
            >
              <FaEnvelope className="mx-auto text-3xl text-violet-400 mb-3" />
              Email
            </a>

            <a
              href="https://github.com/somildholakia"
              target="_blank"
              className="glass-card p-5 text-center hover:bg-violet-600/20 duration-300"
            >
              <FaGithub className="mx-auto text-3xl text-violet-400 mb-3" />
              GitHub
            </a>

            <a
              href="YOUR_LINKEDIN"
              target="_blank"
              className="glass-card p-5 text-center hover:bg-violet-600/20 duration-300"
            >
              <FaLinkedin className="mx-auto text-3xl text-violet-400 mb-3" />
              LinkedIn
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}