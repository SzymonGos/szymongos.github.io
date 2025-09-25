import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  return (
    <section id="experience" className="mb-20 pt-[10vh] scroll-mt-24">
      <ExperienceCard
        year="2024 — 2025"
        title="Company name title"
        description="Company description lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        label={["Nextjs", "React", "TypeScript"]}
        projectUrl="#"
      />
      <ExperienceCard
        year="2024 — 2025"
        title="Company name title"
        description="Company description lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        label={["Nextjs", "React", "TypeScript"]}
        projectUrl="#"
      />
      <ExperienceCard
        year="2024 — 2025"
        title="Company name title"
        description="Company description lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        label={["Nextjs", "React", "TypeScript"]}
        projectUrl="#"
      />
    </section>
  );
};

export default ExperienceSection;
