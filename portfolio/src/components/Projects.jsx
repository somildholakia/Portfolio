import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
        />

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 leading-8">
          Here are some of my favorite projects built while learning Full Stack
          Development. Each project helped me strengthen my problem-solving
          skills, understand real-world application architecture, and explore
          modern web technologies.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}