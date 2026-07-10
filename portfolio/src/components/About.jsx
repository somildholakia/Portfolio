import { motion } from "framer-motion";

const stats = [
  {
    number: "190+",
    title: "Days Building in Public"
  },
  {
    number: "4400+",
    title: "LinkedIn Followers"
  },
  {
    number: "15+",
    title: "Projects"
  },
  {
    number: "4",
    title: "Open Source Programs"
  }
];

function About() {
  return (
    <section
      id="about"
      className="section"
    >

      <motion.h2
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.5}}
        className="text-4xl font-bold text-center mb-12"
      >
        About Me
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-16">

        <motion.div
          initial={{opacity:0,x:-40}}
          whileInView={{opacity:1,x:0}}
        >

          <p className="text-gray-300 leading-8 text-lg">

            I'm a B.Sc Computer Science student passionate about building
            scalable web applications using the MERN stack.

            Alongside development, I actively contribute to Open Source,
            participate in developer programs, and document my journey
            publicly on LinkedIn.

          </p>

        </motion.div>

        <motion.div
          initial={{opacity:0,x:40}}
          whileInView={{opacity:1,x:0}}
          className="grid grid-cols-2 gap-5"
        >

          {stats.map((item) => (

            <div
              key={item.title}
              className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-violet-500 duration-300"
            >

              <h3 className="text-4xl font-bold text-violet-400">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.title}
              </p>

            </div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}

export default About;