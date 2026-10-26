import {
  ROUTETRIPPER_BACKEND_GITHUB_URL,
  ROUTETRIPPER_FRONTEND_GITHUB_URL,
  ROUTETRIPPER_IMAGE,
  ROUTETRIPPER_URL,
} from "../../constants";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-[40svh] pt-[10vh]">
      <ProjectCard
        title="Routetripper"
        description="A travel-planning app with an AI chat for trip suggestions and Google Maps route planning. Next.js frontend and a standalone REST API in Java 21 and Spring Boot, with Clerk JWT authentication, Cloudinary image uploads, usage limits and Flyway migrations on PostgreSQL."
        label={[
          "Java 21",
          " Spring Boot",
          "PostgreSQL",
          "REST API",
          "Next.js",
          "React",
          "TypeScript",
          " Tailwind CSS",
          "Clerk",
          "Cloudinary",
          "Railway",
        ]}
        image={ROUTETRIPPER_IMAGE}
        projectUrl={ROUTETRIPPER_URL}
        githubUrls={[
          { label: "Frontend", url: ROUTETRIPPER_FRONTEND_GITHUB_URL },
          { label: "Backend", url: ROUTETRIPPER_BACKEND_GITHUB_URL },
        ]}
      />
    </section>
  );
};

export default ProjectsSection;
