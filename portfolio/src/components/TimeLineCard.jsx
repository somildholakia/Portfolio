import { motion } from "framer-motion";

export default function TimelineCard({ item, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -60 : 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="glass-card p-8">

        <span
          className={`inline-block bg-gradient-to-r ${item.color} text-white px-4 py-1 rounded-full text-sm`}
        >
          {item.year}
        </span>

        <h3 className="text-2xl font-bold mt-5">
          {item.title}
        </h3>

        <p className="text-violet-400 mt-2">
          {item.company}
        </p>

        <p className="text-gray-400 mt-5 leading-7">
          {item.description}
        </p>

      </div>
    </motion.div>
  );
}