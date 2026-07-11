import experience from "../data/Experience";
import TimelineCard from "./TimelineCard";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <SectionTitle
          subtitle="Journey"
          title="Experience & Programs"
        />

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 leading-8">
          My journey has been shaped by open-source contributions, developer
          programs, internships, and continuous learning. Each experience has
          strengthened my technical skills, collaboration, and problem-solving
          abilities.
        </p>

        <div className="space-y-8">

          {experience.map((item, index) => (
            <TimelineCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}