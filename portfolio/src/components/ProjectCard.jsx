import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.3 }}
      className="glass-card overflow-hidden group"
    >
      {/* Image */}

      <div className="overflow-hidden h-52">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />

      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          {project.description}
        </p>

        {/* Tech */}

        <div className="flex flex-wrap gap-2 mt-5">

          {project.tech.map((item) => (
            <span
              key={item}
              className="bg-violet-600/20 text-violet-300 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-7">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-white/5 hover:bg-violet-600 duration-300 px-4 py-3 rounded-lg"
          >
            <FaGithub />
            GitHub
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 duration-300 px-4 py-3 rounded-lg"
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