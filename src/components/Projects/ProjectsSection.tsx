import {
  ROUTETRIPPER_GITHUB_URL,
  ROUTETRIPPER_IMAGE,
  ROUTETRIPPER_URL,
} from "../../constants";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-[40svh] pt-[10vh]">
      <ProjectCard
        title="Routetripper"
        description="Routetripper is a platform that allows you to create and share your own routes using Google Maps API integration and features an AI chat assistant powered by OpenAI for enhanced user experience."
        label={[
          "Nextjs",
          "React",
          "TypeScript",
          "TailwindCSS",
          "Railway",
          "Apollo Graphql",
          "Cloudflare",
        ]}
        image={ROUTETRIPPER_IMAGE}
        projectUrl={ROUTETRIPPER_URL}
        githubUrl={ROUTETRIPPER_GITHUB_URL}
      />
    </section>
  );
};

export default ProjectsSection;
