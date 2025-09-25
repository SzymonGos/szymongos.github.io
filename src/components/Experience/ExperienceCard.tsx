import type { FC } from "react";
import Label from "../Label";
import LinkButton from "../LinkButton";
import { ArrowIcon } from "../Icons/ArrowIcon";

type TExperienceCardProps = {
  year: string;
  title: string;
  description: string;
  label: string[];
  projectUrl?: string;
};

const ExperienceCard: FC<TExperienceCardProps> = ({
  year,
  title,
  description,
  label,
  projectUrl,
}) => {
  return (
    <div className="flex mb-16 flex-row gap-24 text-base text-zinc-400">
      <div className="text-sm whitespace-nowrap">{year}</div>
      <div>
        <div className="mb-5">
          <LinkButton url={projectUrl} title={title} icon={<ArrowIcon />} />
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

export default ExperienceCard;
