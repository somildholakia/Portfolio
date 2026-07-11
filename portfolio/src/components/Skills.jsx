import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

import skillCategories from "../data/skills";
import SectionTitle from "./SectionTitle";

const icons = {
  Frontend: <FaLaptopCode />,
  Backend: <FaServer />,
  Database: <FaDatabase />,
  Tools: <FaTools />,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Tech Stack"
          title="Skills & Technologies"
        />

        <p className="max-w-3xl mx-auto text-center text-gray-400 leading-8 mb-16">
          I enjoy building complete web applications from frontend interfaces to
          scalable backend systems. Over the past few years, I've worked with
          modern technologies across the MERN stack, Open Source, and cloud
          platforms while continuously learning and improving.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {skillCategories.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="glass-card p-8"
            >

              <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-3xl text-violet-400 mb-6">

                {icons[category.title]}

              </div>

              <h3 className="text-2xl font-bold mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-violet-500/10
                      border
                      border-violet-500/20
                      text-violet-300
                      text-sm
                      hover:bg-violet-500
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}