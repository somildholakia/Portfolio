import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCodeBranch,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";

const stats = [
  {
    number: "190+",
    title: "Days Building in Public",
  },
  {
    number: "5500+",
    title: "LinkedIn Followers",
  },
  {
    number: "20+",
    title: "Projects Built",
  },
  {
    number: "6",
    title: "Programs & Internships",
  },
];

const highlights = [
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Development",
    text: "Building scalable MERN applications with clean UI, authentication, REST APIs and MongoDB.",
  },
  {
    icon: <FaCodeBranch />,
    title: "Open Source",
    text: "Contributor at GSSoC, NSOC and SSOC while collaborating on real-world GitHub projects.",
  },
  {
    icon: <FaUsers />,
    title: "Community",
    text: "Cloud Junction Campus Ambassador and creator building publicly for a community of 5,500+ developers.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Continuous Learning",
    text: "Always learning new technologies through internships, developer programs and hands-on projects.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-violet-400 text-sm">
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            Who Am I?
          </h2>

          <p className="max-w-4xl mx-auto mt-8 text-lg text-gray-400 leading-9">
            I'm <span className="text-violet-400 font-semibold">Somil Dholakia</span>,
            a Computer Science student and passionate MERN Stack Developer from
            Mumbai, India. I enjoy building scalable web applications, solving
            real-world problems through code, and continuously improving my
            skills by working on projects that create real impact.

            <br /><br />

            Beyond coding, I actively contribute to Open Source, participate in
            global developer programs, and document my learning journey
            publicly. Over the past few months I've built a growing community of
            <span className="text-cyan-400 font-semibold">
              {" "}5,500+ LinkedIn followers
            </span>{" "}
            by consistently sharing what I learn and helping other aspiring
            developers.
          </p>
        </motion.div>

        {/* Highlights */}

        <div className="grid md:grid-cols-2 gap-6 mt-16">

          {highlights.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="glass-card p-7"
            >

              <div className="text-4xl text-violet-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {stats.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="glass-card p-8 text-center"
            >

              <h3 className="text-5xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-400">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}