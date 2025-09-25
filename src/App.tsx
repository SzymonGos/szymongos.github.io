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
          <div className="md:sticky md:top-0 col-span-full md:col-span-1 md:h-svh">
            <div className="flex md:h-full flex-col mt-10 md:my-auto md:translate-y-1/4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <a href="/">Szymon Gos</a>
              </h1>
              <h2 className="mt-5 text-lg">Frontend Engineer</h2>
              <MenuContainer />
            </div>
            <SocialsSection />
          </div>
          <div className="col-span-full md:col-span-1 md:col-start-2">
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
