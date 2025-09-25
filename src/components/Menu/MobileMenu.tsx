import { useState, useEffect } from "react";
import type { FC } from "react";
import type { TUrlType } from "./MenuContainer";

type TMobileMenuProps = {
  activeUrl: TUrlType;
};

const MobileMenu: FC<TMobileMenuProps> = ({ activeUrl }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed md:hidden top-0 left-0 right-0 z-50 px-4 py-5 bg-[#040613]">
      <div className="flex items-center justify-between">
        <a href="/">
          <span className="font-semibold text-zinc-300">Szymon Gos</span>
        </a>
        <span className="text-sm text-zinc-400">{activeUrl}</span>
      </div>
    </div>
  );
};

export default MobileMenu;
