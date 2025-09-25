import AboutSection from "./components/AboutSection";
import { Container } from "./components/Container";
import ExperienceSection from "./components/Experience/ExperienceSection";
import ProjectsSection from "./components/Projects/ProjectsSection";
import BackgroundWrapper from "./components/BackgroundWrapper";
import MenuContainer from "./components/Menu/MenuContainer";
import SocialsSection from "./components/Socials/SocialsSection";

function App() {
  return (
    <div>
      <Container>
        <BackgroundWrapper />
        <div className="relative grid grid-cols-2 gap-5">
          <div className="sticky top-0 col-span-1 h-svh">
            <div className="flex h-full flex-col my-auto translate-y-1/4">
              <h1 className="text-7xl font-bold">
                <a href="/">Szymon Gos</a>
              </h1>
              <h2 className="mt-5 text-lg">Frontend Engineer</h2>
              <MenuContainer />
            </div>
            <SocialsSection />
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
