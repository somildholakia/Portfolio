import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="glass-card overflow-hidden group relative"
    >

      {project.featured && (
        <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-violet-600 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
          <FaStar size={10} />
          Featured
        </div>
      )}

      {/* Image */}

      <div className="relative h-56 overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />

      </div>

      {/* Content */}

      <div className="p-7">

        <h3 className="text-2xl font-bold mb-4">
          {project.title}
        </h3>

        <p className="text-gray-400 leading-7 text-sm">
          {project.description}
        </p>

        {/* Tech */}

        <div className="flex flex-wrap gap-2 mt-6">

          {project.tech.map((tech) => (

            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-violet-600 transition-all duration-300"
          >
            <FaGithub />
            GitHub
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 transition-all duration-300"
            >
              <FaExternalLinkAlt />
              Live
            </a>
          )}

        </div>

      </div>

    </motion.div>
  );
}