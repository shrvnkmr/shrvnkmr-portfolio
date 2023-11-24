import Image from "next/image";
import React from "react";
import jobPortal from "../public/jobPortal.png";

interface ProjectProps {
  sourceCodeText: string;
  techUsedText: string;
  name: string;
  techStack: string;
  sourceCodeLink: string;
}

const ProjectCard = ({
  sourceCodeText,
  techUsedText,
  name,
  techStack,
  sourceCodeLink,
}: ProjectProps) => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl bg-slate-500 bg-opacity-10 p-6 text-slate-600 ring-1 ring-inset ring-blue-700/10 dark:text-slate-300 lg:flex-row lg:gap-8">
      <Image
        src={jobPortal}
        className="lg:w-1/3"
        width={600}
        alt="Job Portal"
      />
      <div className="mb-auto flex flex-col gap-2 p-2">
        <div className="flex items-center">
          <h4 className="font-medium">{name}</h4>
          <a
            className="group ml-auto text-xs text-slate-500 hover:font-medium"
            aria-label={sourceCodeText}
            rel="noopener"
            target="_blank"
            href={sourceCodeLink}
          >
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition group-hover:border-blue-500 motion-reduce:transition-none">
                {sourceCodeText}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-0.5 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-1 group-hover:text-blue-500 group-focus-visible:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </a>
        </div>
        <div className="mr-auto flex gap-2 py-2 text-sm">
          <h5 className="whitespace-nowrap">{techUsedText}</h5>
          <p>{techStack}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
