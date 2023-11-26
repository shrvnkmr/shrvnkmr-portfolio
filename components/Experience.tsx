import React from "react";

interface Experience {
  company: string;
  duration: string;
  role: string;
  responsibilities: string[];
}
interface ExperienceProps {
  experiences: Experience[];
}

const ExperienceTimeline = ({ experiences }: ExperienceProps) => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center p-2 text-slate-600 dark:text-slate-100">
        {experiences.map((experience, key) => (
          <div key={key} className="flex">
            <div className="relative mr-6 md:mr-10">
              <div className="flex h-full w-3 items-center justify-center">
                <div className="pointer-events-none h-full w-px bg-blue-500"></div>
              </div>
              <div className="absolute top-16 h-3 w-3 rounded-full bg-blue-500"></div>
              <div className="absolute left-3 top-[4.3rem] h-px w-6 bg-blue-500 md:w-10"></div>
            </div>
            <div className="my-8 mr-auto w-full max-w-4xl rounded-xl border border-blue-500 p-6 shadow-md">
              <div className="flex justify-between">
                <h3 className="text-md mb-1 font-medium">{experience?.role}</h3>
                <h5 className="text-sm text-slate-500">
                  {experience?.company}
                </h5>
              </div>
              <h5 className="text-sm text-slate-500">{experience?.duration}</h5>
              <ul className="list-disc pl-4 pt-4 text-sm">
                {experience?.responsibilities?.map((responsibility, key) => (
                  <li key={key}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
