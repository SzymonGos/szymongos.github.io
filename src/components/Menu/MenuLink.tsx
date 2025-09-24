import type { FC } from "react";
import cx from "classnames";

type TMenuLinkProps = {
  children: React.ReactNode;
  url: string;
  isActive?: boolean;
};

export const MenuLink: FC<TMenuLinkProps> = ({
  children,
  url,
  isActive = false,
}) => {
  return (
    <a
      href={`#${url}`}
      className="relative flex items-center group text-lg transition-all duration-300 ease-out hover:text-white motion-reduce:transition-none"
    >
      <span
        className={cx(
          "h-[1px] bg-white transition-all duration-200 ease-out",
          isActive ? "w-6" : "w-0 group-hover:w-6"
        )}
      />
      <span className="relative z-10 ml-2">{children}</span>
    </a>
  );
};
