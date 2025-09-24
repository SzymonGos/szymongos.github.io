import type { FC } from "react";
import { MenuLink } from "./MenuLink";
import type { TUrlType } from "./MenuContainer";

type TMenuProps = {
  activeUrl: TUrlType;
  handleClick: (url: TUrlType) => void;
};

const Menu: FC<TMenuProps> = ({ activeUrl, handleClick }) => {
  return (
    <ul className="mt-10 space-y-2 w-fit">
      <li onClick={() => handleClick("about")}>
        <MenuLink url="about" isActive={activeUrl === "about"}>
          about
        </MenuLink>
      </li>
      <li onClick={() => handleClick("experience")}>
        <MenuLink url="experience" isActive={activeUrl === "experience"}>
          experience
        </MenuLink>
      </li>
      <li onClick={() => handleClick("projects")}>
        <MenuLink url="projects" isActive={activeUrl === "projects"}>
          projects
        </MenuLink>
      </li>
    </ul>
  );
};

export default Menu;
