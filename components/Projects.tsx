import React from "react";
import ProjectCard from "./ProjectCard";
import { textContent } from "@/content/textContent";

const Projects = () => {
  const { sectionTitle, sourceCodeText, techUsedText, project } =
    textContent.projects;
  return (
    <section id="projects" className="p-10 md:px-14">
      <h3 className="pb-6 text-2xl font-medium leading-[2rem] text-slate-600 dark:text-slate-100">
        {sectionTitle}
      </h3>
      {project.map((projectDetail, key) => (
        <ProjectCard
          key={key}
          sourceCodeText={sourceCodeText}
          techUsedText={techUsedText}
          project={projectDetail}
        />
      ))}
    </section>
  );
};
export default Projects;
