import React from "react";

interface SkillCardProps {
  skills: string[];
}

const SkillCard = ({ skills }: SkillCardProps) => {
  return (
    <>
      {skills.map((skill, key) => (
        <span
          key={key}
          className="text-md inline-flex items-center rounded-md bg-slate-500 bg-opacity-10 px-4 py-2 font-medium text-slate-600 ring-1 ring-inset ring-blue-700/10 dark:text-slate-300"
        >
          {skill}
        </span>
      ))}
    </>
  );
};

export default SkillCard;
