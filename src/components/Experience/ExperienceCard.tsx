import { ArrowIcon } from "../Icons/ArrowIcon";

const ExperienceCard = () => {
  return (
    <div className="mb-16 flex flex-row gap-24 text-base text-zinc-400">
      <div className="text-sm whitespace-nowrap">2024 — 2025</div>
      <div>
        <div className="mb-5">
          <a
            href="#"
            target="_blank"
            className="group flex flex-row gap-2 items-center text-lg leading-0 font-medium text-zinc-200 transition-colors duration-200 ease-out hover:text-white"
          >
            Company name Link
            <ArrowIcon />
          </a>
        </div>
        <p className="mb-5">
          Build and maintain critical components for t2 world's Web3 platform
          across the whole product. Lead feature development from concept to
          deployment, taking ownership of end-to-end implementation while
          ensuring code modularity and maintainability. Work closely with
          cross-functional teams to implement best practices in modern web
          development. Implement content management solutions using KeystoneJS
          and Prisma ORM to streamline data handling. Configure and maintain
          Docker environments for consistent development and deployment
          workflows.
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          <span className="px-3 py-1 text-xs text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-full">
            Next.js
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
