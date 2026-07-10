import { motion } from "framer-motion";
import experience from "../data/experience";
import TimelineCard from "./TimelineCard";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <SectionTitle
          subtitle="Journey"
          title="Experience"
        />

        <div className="relative mt-20">

          {/* Vertical Timeline */}
          <div className="absolute left-[14px] top-0 h-full w-[3px] bg-gradient-to-b from-violet-500 via-cyan-500 to-violet-500 rounded-full" />

          <div className="space-y-12">

            {experience.map((item, index) => (
              <div
                key={index}
                className="relative pl-20"
              >

                {/* Animated Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 180,
                  }}
                  className="
                    absolute
                    left-0
                    top-10
                    h-8
                    w-8
                    rounded-full
                    bg-gradient-to-r
                    from-violet-500
                    to-cyan-500
                    border-4
                    border-[#030712]
                    shadow-[0_0_25px_rgba(139,92,246,0.8)]
                  "
                />

                {/* Timeline Card */}
                <TimelineCard
                  item={item}
                  index={index}
                />

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}