import { motion } from "framer-motion";

export default function Badge({ number, label }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.05,
      }}
      className="glass-card px-5 py-4 flex flex-col items-center min-w-[120px]"
    >
      <h3 className="text-2xl font-bold text-violet-400">
        {number}
      </h3>

      <p className="text-sm text-gray-400 text-center">
        {label}
      </p>
    </motion.div>
  );
}