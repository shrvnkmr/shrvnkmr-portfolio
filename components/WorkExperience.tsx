import React from "react";
import { textContent } from "@/content/textContent";
import ExperienceTimeline from "./Experience";

const WorkExperience = () => {
  const { sectionTitle, experiences } = textContent.experience;

  return (
    <section id="experience" className="px-10 pt-10 md:px-14">
      <h3 className="pb-6 text-2xl font-medium leading-[2rem] text-slate-600 dark:text-slate-100">
        {sectionTitle}
      </h3>
      <ExperienceTimeline experiences={experiences} />
    </section>
  );
};
export default WorkExperience;
