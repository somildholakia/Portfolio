import { motion } from "framer-motion";

export default function TimelineCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-7 hover:-translate-y-2 transition-all duration-300"
    >
      <div className="flex flex-wrap justify-between gap-3">

        <div>

          <span
            className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-semibold`}
          >
            {item.year}
          </span>

          <h3 className="text-2xl font-bold mt-5">
            {item.title}
          </h3>

          <p className="text-violet-400 mt-2 font-medium">
            {item.company}
          </p>

        </div>

        <div className="text-right">

          <p className="text-gray-300 text-sm">
            {item.duration}
          </p>

          <p className="text-gray-500 text-sm">
            {item.type}
          </p>

        </div>

      </div>

      <p className="text-gray-400 leading-8 mt-6">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">

        {item.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs"
          >
            
            {skill}
          </span>
        ))}

      </div>
    </motion.div>
  );
}