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
        description="Polish manufacturer of pouffes and Sako bags. Co-developed and launched the e-commerce platform (about 100 products and 36 blog articles, 20k+ active users a year) and now maintain and extend its frontend and backend as the sole developer. More than half of its visitors browse on mobile, so the UI has to work well on every screen size. I run production on Cloudflare and Railway and work with the SEO team on technical SEO."
        label={[
          "Nextjs",
          "React",
          "TypeScript",
          "TailwindCSS",
          "KeystoneJS",
          "Graphql",
          "Cloudflare",
          "Railway",
        ]}
        projectUrl={MIUKI_URL}
      />
      <ExperienceCard
        year="Jul 2022 — Jan 2025"
        title="t2 world"
        description="Curation-centric decentralised publisher. Built frontend features for the Territory area (articles and short-form Prompts) as reusable components, and extended the data layer with KeystoneJS and Prisma migrations, wiring it to the UI through GraphQL. Worked with the product manager, designer and backend developers in an Agile team."
        label={[
          "Nextjs",
          "React",
          "TypeScript",
          "TailwindCSS",
          "KeystoneJS",
          "Prisma",
          "Apollo Graphql",
        ]}
        projectUrl={T2_WORLD_URL}
      />
      <ExperienceCard
        year="Sep 2021 — Dec 2021"
        title="Nitro Digital Ltd"
        description="Frontend Developer Internship. Converting designs from Avocode to landing pages using Sass, collaborating with senior developers and following GitLab CI workflow."
        label={["React", "GitLab CI", "TypeScript", "Sass"]}
      />

      <LinkButton
        url="/szymon_gos-full_stack_developer.pdf"
        title="View Resume"
        icon={<ArrowIcon />}
      />
    </section>
  );
};

export default ExperienceSection;
