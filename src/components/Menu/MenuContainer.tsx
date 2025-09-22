import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Menu from "./Menu";

export type TUrlType = "about" | "experience" | "projects";

const MenuContainer = () => {
  const location = useLocation();
  const [activeUrl, setActiveUrl] = useState<TUrlType>(
    (location?.hash?.slice(1) as TUrlType) || "about"
  );

  useEffect(() => {
    const hash = location?.hash?.slice(1);
    const targetSection =
      hash && ["about", "experience", "projects"].includes(hash)
        ? hash
        : "about";

    setActiveUrl(targetSection as TUrlType);

    setTimeout(() => {
      const element = document.getElementById(targetSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [location?.hash]);

  const handleClick = (url: TUrlType) => {
    setActiveUrl(url);
  };
  return <Menu activeUrl={activeUrl} handleClick={handleClick} />;
};

export default MenuContainer;
