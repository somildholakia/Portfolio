import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
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
        duration: 0.6,
      }}
      className="text-center mb-20"
    >
      <p className="uppercase tracking-[8px] text-violet-400 text-sm font-semibold">
        {subtitle}
      </p>

      <h2 className="mt-4 text-5xl md:text-6xl font-black">
        {title}
      </h2>

      <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mx-auto mt-6" />
    </motion.div>
  );
}