import { motion } from "framer-motion";

export default function Badge({ number, label }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card w-36 h-24 flex flex-col justify-center items-center"
    >
      <h3 className="text-3xl font-bold text-violet-400">
        {number}
      </h3>

      <p className="text-gray-400 text-sm text-center">
        {label}
      </p>
    </motion.div>
  );
}