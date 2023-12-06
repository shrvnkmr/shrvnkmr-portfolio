import { textContent } from "@/content/textContent";
import { scrollToSection } from "@/utils/utils";
import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

type sectionID = "about" | "skills" | "experience" | "projects" | "contact";

type section = {
  id: sectionID;
  label: string;
};

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState<sectionID | null>(null);
  const {
    aboutLabel,
    skillsLabel,
    experienceLabel,
    projectsLabel,
    contactLabel,
  } = textContent.navbar;

  const sections: section[] = [
    { id: "about", label: aboutLabel },
    { id: "skills", label: skillsLabel },
    { id: "experience", label: experienceLabel },
    { id: "projects", label: projectsLabel },
    { id: "contact", label: contactLabel },
  ];

  const modeIcons = {
    light: BsFillSunFill,
    dark: BsFillMoonStarsFill,
  };

  const ModeIcon = darkMode ? modeIcons["dark"] : modeIcons["light"];

  const navigate = (id : sectionID) => {
    scrollToSection(id);
    setShowNav(false)
  }

  useEffect(() => {
    const handleIntersection: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[],
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as sectionID);
        }
      });
    };

    const sections = document.querySelectorAll("section");
    // intersection observer api to indicate when the section is in view
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2, // percentage at which callback is triggered
      // rootMargin: "-50px", // Margin applied to the root (viewport) to adjust intersection detection
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header
      id="nav"
      className="fixed top-0 z-10 w-full bg-slate-100 p-8 py-6 transition dark:bg-gray-900 md:px-14 md:py-8"
    >
      <nav className="flex w-full flex-wrap items-center justify-between">
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-[60%] h-4 w-full fill-blue-400/40 dark:fill-blue-700/50"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
          </svg>
          <p className="relative cursor-pointer text-xl font-semibold">
            {"<>shravan</>"}
          </p>
        </span>
        <ModeIcon
          className="ml-auto cursor-pointer text-xl hover:text-amber-400 dark:hover:text-amber-200"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        />
        <div className="ml-10 md:hidden" onClick={() => setShowNav(!showNav)}>
          <span className="cursor-pointer">
            <div
              className={`my-1 h-[0.2rem] w-6 bg-slate-700 duration-300 dark:bg-slate-50 ${
                showNav ? "translate-y-1.5 -rotate-45 transform" : ""
              }`}
            ></div>
            <div
              className={`my-1 h-[0.2rem] w-6 bg-slate-700 dark:bg-slate-50 ${
                showNav ? "invisible" : ""
              }`}
            ></div>
            <div
              className={`my-1 h-[0.2rem] w-6 bg-slate-700 duration-300 dark:bg-slate-50 ${
                showNav ? "-translate-y-2 rotate-45 transform" : ""
              }`}
            ></div>
          </span>
        </div>
        <div
          className={`${
            showNav ? "" : "hidden"
          } border-b-light w-full border-b border-slate-400 py-10 transition dark:border-slate-600 md:flex md:w-auto md:items-center md:border-none md:py-0 md:pl-8`}
        >
          <ul
            className={`${
              showNav ? "" : "hidden"
            } flex flex-col items-center gap-4 md:flex md:flex-row md:justify-between md:gap-8`}
          >
            {sections.map((section, key) => (
              <li
                key={key}
                className={`cursor-pointer text-lg font-semibold hover:text-blue-500 ${
                  activeSection === section.id ? "active" : ""
                }`}
                onClick={() => navigate(section.id)}
              >
                {section.label}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
