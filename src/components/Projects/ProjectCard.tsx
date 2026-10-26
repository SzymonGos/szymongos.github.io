import type { FC } from "react";
import { ArrowIcon } from "../Icons/ArrowIcon";
import { LinkIcon } from "../Icons/LinkIcon";
import Label from "../Label";
import LinkButton from "../LinkButton";

type TGithubUrls = {
  label: string;
  url: string;
};

type TProjectCardProps = {
  title: string;
  description: string;
  label: string[];
  image: string;
  projectUrl?: string;
  githubUrls?: TGithubUrls[];
};

const ProjectCard: FC<TProjectCardProps> = ({
  title,
  description,
  label,
  image,
  projectUrl,
  githubUrls,
}) => {
  return (
    <div className="flex mb-16 flex-col md:flex-row gap-10 md:gap-14">
      <div className="mt-1 w-full sm:w-36 h-fit border-[0.5px] rounded-[4px] order-2 md:order-1 overflow-hidden">
        <img src={image} alt={title} />
      </div>
      <div className="basis-2/3 order-1 md:order-2">
        <div className="mb-5 space-y-2.5">
          <h3 className="mb-4">
            <LinkButton url={projectUrl} title={title} icon={<ArrowIcon />} />
          </h3>
          {githubUrls &&
            githubUrls?.map((link) => (
              <LinkButton
                url={link.url}
                title={link.label}
                type="secondary"
                icon={<LinkIcon />}
              />
            ))}
        </div>
        <p className="mb-5 text-zinc-400">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {label.map((item) => (
            <Label key={item} title={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
