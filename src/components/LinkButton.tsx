import type { FC } from "react";
import cx from "classnames";

type TLinkButtonProps = {
  title: string;
  url?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  type?: "primary" | "secondary";
};

const LinkButton: FC<TLinkButtonProps> = ({
  url = "#",
  title,
  disabled = false,
  icon,
  type = "primary",
}) => {
  return (
    <a
      href={url}
      target="_blank"
      className={cx(
        "group flex flex-row gap-2 items-center leading-0 text-zinc-200 transition-colors duration-200 ease-out hover:text-white",
        type === "primary" && "text-lg text-zinc-200 font-medium",
        type === "secondary" && "text-base text-zinc-400",
        {
          "pointer-events-none": disabled,
        }
      )}
    >
      {title}
      {disabled ? "" : icon}
    </a>
  );
};

export default LinkButton;
