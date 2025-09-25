const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-48 pt-10 md:pt-[25vh] mb-10 md:mb-20 text-zinc-400"
    >
      <p>
        I'm an engineer who believes the best solutions come from understanding
        the problem first, not the technology. I love taking complex challenges
        and breaking them down into elegant, maintainable code that users never
        have to think about.
      </p>
      <br />
      <p>
        I thrive on taking ownership of features from concept to deployment,
        working across varied projects that challenge me to explore different
        problem domains. I've worked across different environments, from{" "}
        <strong className="text-zinc-200">
          <a href="https://app.t2.world/" target="_blank">
            start-ups
          </a>
        </strong>{" "}
        to{" "}
        <strong className="text-zinc-200">
          <a href="https://www.miuki.pl/" target="_blank">
            niche manufacturers
          </a>
        </strong>
        , always focusing on clean architecture and thoughtful user experiences.
      </p>
      <br />
      <p>
        In my spare time, you'll find me riding my motorcycle, cycling through
        London, or hiking trails.
      </p>
    </section>
  );
};

export default AboutSection;
