import React from "react";
import { textContent } from "@/content/textContent";

const AboutSection = () => {
  const { heyText, name, title, downloadText, sectionTitle, description } =
    textContent.about;
  return (
    <section id="about" className="p-10 md:px-14">
      <div className="flex flex-col items-start justify-center py-32 md:pt-40">
        <h2 className="text-2xl font-medium leading-[2rem]">{heyText}</h2>
        <h1 className="text-5xl font-medium leading-[3.5rem] text-blue-600">
          {name}
        </h1>
        <h2 className="py-10 text-[4rem] max-[375px]:text-[3.5rem] font-medium leading-[5rem]">
          {title}
        </h2>
        <a
          href="/Shrvn_Kmr_Resume_React.pdf"
          target="_blank"
          className="p-4 pl-0"
        >
          <button
            onClick={() => console.log("")}
            className="group relative flex h-10 w-32 cursor-pointer items-center justify-center overflow-hidden rounded-md border border-blue-600 shadow-md"
          >
            <span className="transform text-sm font-semibold text-blue-600 transition-all duration-300 group-hover:translate-x-20">
              {downloadText}
            </span>
            <span className="absolute right-0 flex h-full w-0 transform items-center justify-center rounded-sm bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:translate-x-0">
              <svg
                className="text-white"
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" />
                <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" />
              </svg>
            </span>
          </button>
        </a>
      </div>
      <div className="flex flex-col items-start justify-center pb-14">
        <h3 className="pb-6 text-2xl font-medium leading-[2rem] text-slate-600 dark:text-slate-100">
          {sectionTitle}
        </h3>
        <h3 className="text-l font-medium leading-[2rem] text-slate-600 dark:text-slate-300">
          {description}
        </h3>
      </div>
    </section>
  );
};
export default AboutSection;
