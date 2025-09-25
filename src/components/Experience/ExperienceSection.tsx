import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  return (
    <section id="experience" className="mb-20 pt-[10vh]">
      <ExperienceCard
        year="2024 — 2025"
        title="Company name title"
        description="Company description"
        label={["Nextjs", "React", "TypeScript"]}
        projectUrl="#"
      />
    </section>
  );
};

export default ExperienceSection;
