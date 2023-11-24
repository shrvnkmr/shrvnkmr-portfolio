import React from "react";
import SkillCard from "./SkillCard";
import { textContent } from "@/content/textContent";

const Skills = () => {
  const { sectionTitle, mySkills } = textContent.skills;

  return (
    <section id="skills" className="p-10 md:px-14">
      <h3 className="pb-6 text-2xl font-medium leading-[2rem] text-slate-600 dark:text-slate-100">
        {sectionTitle}
      </h3>
      <div className="m-auto flex flex-wrap gap-5">
        <SkillCard skills={mySkills} />
      </div>
    </section>
  );
};
export default Skills;
