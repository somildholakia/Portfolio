import { motion } from "framer-motion";
import skillCategories from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="section"
    >

      <h2 className="text-4xl font-bold text-center mb-16">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {skillCategories.map((category) => (

          <motion.div

            whileHover={{
              y:-10,
              scale:1.03
            }}

            key={category.title}

            className="bg-white/5 rounded-2xl p-8 border border-white/10"

          >

            <h3 className="text-2xl font-bold mb-6 text-violet-400">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">

              {category.skills.map((skill) => (

                <span
                  key={skill}
                  className="bg-violet-600/20 border border-violet-500 rounded-full px-4 py-2 text-sm"
                >
                  {skill}
                </span>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Skills;