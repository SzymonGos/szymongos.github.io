import type { FC } from "react";
import { ArrowIcon } from "../Icons/ArrowIcon";
import { LinkIcon } from "../Icons/LinkIcon";
import Label from "../Label";
import LinkButton from "../LinkButton";

type TProjectCardProps = {
  title: string;
  description: string;
  label: string[];
  image: string;
  projectUrl?: string;
  githubUrl?: string;
};

const ProjectCard: FC<TProjectCardProps> = ({
  title,
  description,
  label,
  image,
  projectUrl,
  githubUrl,
}) => {
  return (
    <div className="flex flex-row gap-10">
      <div className="mt-1 w-36 h-20 border-[0.5px] rounded-[2px]">
        <img src={image} alt={title} />
      </div>
      <div className="basis-2/3">
        <div className="mb-5 space-y-2.5">
          <h3>
            <LinkButton url={projectUrl} title={title} icon={<ArrowIcon />} />
          </h3>
          {githubUrl && (
            <LinkButton
              url={githubUrl}
              title="github"
              type="secondary"
              icon={<LinkIcon />}
            />
          )}
        </div>
        <p className="mb-5">{description}</p>
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
