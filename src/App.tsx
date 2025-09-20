import AboutSection from "./components/AboutSection";
import { Container } from "./components/Container";
import Menu from "./components/Menu";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="h-svh">
      <Container>
        <div className="relative grid grid-cols-2 gap-5">
          <div className="sticky top-0 col-span-1 h-svh">
            <div className="flex h-full flex-col my-auto translate-y-1/4">
              <h1 className="text-7xl font-bold">Szymon Gos</h1>
              <p>Frontend Developer</p>
              <Menu />
            </div>
          </div>
          <div className="col-span-1 col-start-2">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
