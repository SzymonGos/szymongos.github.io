import { MIUKI_URL, T2_WORLD_URL } from "../../constants";
import { ArrowIcon } from "../Icons/ArrowIcon";
import LinkButton from "../LinkButton";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="mb-10 md:mb-20 pt-[10vh] scroll-mt-10 md:scroll-mt-24"
    >
      <ExperienceCard
        year="Dec 2021 — Present"
        title="miuki"
        description="Polish manufacturer of pouffes and Sako bags. Maintaining and supporting the project's frontend and backend infrastructure, implementing bug fixes, creating features, and ongoing technical enhancements using Next.js and React."
        label={[
          "Nextjs",
          "React",
          "TypeScript",
          "TailwindCSS",
          "KeystoneJS",
          "Graphql",
        ]}
        projectUrl={MIUKI_URL}
      />
      <ExperienceCard
        year="Jul 2021 — Jan 2025"
        title="t2 world"
        description="Curation-centric decentralised publisher. Converting design mockups into reusable, scalable components with focus on code modularity and maintainability. Independently led feature development from design to deployment, implementing content management solutions using KeystoneJS and Prisma ORM."
        label={[
          "Nextjs",
          "React",
          "TypeScript",
          "TailwindCSS",
          "KeystoneJS",
          "Prisma",
          "Railway",
          "Apollo Graphql",
        ]}
        projectUrl={T2_WORLD_URL}
      />
      <ExperienceCard
        year="Oct 2021 — Dec 2021"
        title="Nitro Digital Ltd"
        description="Frontend Developer Internship. Converting designs from Avocode to landing pages using Sass, collaborating with senior developers and following GitLab CI workflow."
        label={["Nextjs", "React", "TypeScript"]}
      />

      <LinkButton
        url="/szymon_gos.pdf"
        title="View Resume"
        icon={<ArrowIcon />}
      />
    </section>
  );
};

export default ExperienceSection;
