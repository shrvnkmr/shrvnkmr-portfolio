import { scrollToSection } from "@/utils/utils";
import React, { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      const distanceFromBottom = documentHeight - scrollPosition - windowHeight;
      const threshold = 100;

      if (distanceFromBottom <= threshold) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (scrollUp) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      scrollToSection("contact");
    }
  };

  return (
    <div className="sticky bottom-4 flex items-center justify-center">
      <div
        className="flex h-10 w-10 animate-bounce cursor-pointer items-center justify-center rounded-full bg-slate-100 bg-opacity-20 p-2 shadow-sm shadow-blue-500 dark:bg-slate-800"
        onClick={() => scrollToTop()}
      >
        <svg
          className={`h-6 w-6 text-blue-600 transition duration-300 ease-in-out ${
            scrollUp ? "rotate-180" : ""
          }`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default ScrollIndicator;
