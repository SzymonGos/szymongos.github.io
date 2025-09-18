import { Container } from "./components/Container";

function App() {
  return (
    <div className="h-svh">
      <Container>
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-1">
            {/* left column */}
            <p>Name</p>
            <p>title</p>
            <div>Menu</div>
          </div>
          <div className="col-span-1 col-start-2">
            {/* right column */}
            <p>about me</p>
            <p>work experience</p>
            <p>projects</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
