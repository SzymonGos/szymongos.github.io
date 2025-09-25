import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

export type TUrlType = "about" | "experience" | "projects";

const SECTIONS = ["about", "experience", "projects"];

const MenuContainer = () => {
  const location = useLocation();
  const [activeUrl, setActiveUrl] = useState<TUrlType>(
    (location?.hash?.slice(1) as TUrlType) || "about"
  );

  useEffect(() => {
    const hash = location?.hash?.slice(1);
    const targetSection =
      hash && SECTIONS.includes(hash as TUrlType) ? hash : "about";
    setActiveUrl(targetSection as TUrlType);
    setTimeout(() => {
      const element = document.getElementById(targetSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [location?.hash]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id as TUrlType;
            if (SECTIONS.includes(sectionId)) {
              setActiveUrl(sectionId);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-10% 0px -10% 0px",
      }
    );
    SECTIONS.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });
    return () => {
      SECTIONS.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleClick = (url: TUrlType) => {
    setActiveUrl(url);
  };
  return (
    <>
      <Menu activeUrl={activeUrl} handleClick={handleClick} />
      <MobileMenu activeUrl={activeUrl} />
    </>
  );
};

export default MenuContainer;
