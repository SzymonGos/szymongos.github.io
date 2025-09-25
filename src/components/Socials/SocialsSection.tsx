import { GITHUB_URL, LINKEDIN_URL } from "../../constants";
import { GitHubIcon } from "../Icons/GitHubIcon";
import { LinkedInIcon } from "../Icons/LinkedInIcon";

const SocialsSection = () => {
  return (
    <div className="mt-5 md:mt-0 md:sticky md:bottom-20 flex gap-2">
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-current"
      >
        <GitHubIcon />
      </a>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-current"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
};

export default SocialsSection;
