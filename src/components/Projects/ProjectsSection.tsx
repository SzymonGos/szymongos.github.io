import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-[40svh] pt-[10vh]">
      <ProjectCard
        title="Project Title"
        description="Project Description"
        label={["Nextjs", "React", "TypeScript"]}
        image="Project Image"
        projectUrl="#"
        githubUrl="#"
      />
    </section>
  );
};

export default ProjectsSection;
