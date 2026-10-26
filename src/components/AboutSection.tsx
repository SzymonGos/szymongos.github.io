const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-48 pt-10 md:pt-[25vh] mb-10 md:mb-20 text-zinc-400"
    >
      <p>
        I'm a full-stack developer who builds web products end to end: the data
        model, the API and the interface on top of it. I start with the problem
        rather than the technology, and focus on building software that's easy
        to maintain and extend.
      </p>
      <br />
      <p>
        Most of my work is in React, Next.js and TypeScript, backed by
        KeystoneJS, Prisma and PostgreSQL. I've worked on a{" "}
        <strong className="text-zinc-200">
          <a href="https://app.t2.world/" target="_blank">
            publishing platform
          </a>
        </strong>{" "}
        in a small start-up team and run a live{" "}
        <strong className="text-zinc-200">
          <a href="https://www.miuki.pl/" target="_blank">
            e-commerce store
          </a>
        </strong>{" "}
        as its sole developer. For my own{" "}
        <strong className="text-zinc-200">
          <a href="https://routetripper.com/">travel planner</a>
        </strong>{" "}
        I built a Java 21 and Spring Boot API covering authentication, file
        uploads and usage limits.
      </p>
      <br />
      <p>
        In my spare time, you'll find me riding motorcycle, cycling, or hiking
        trails.
      </p>
    </section>
  );
};

export default AboutSection;
