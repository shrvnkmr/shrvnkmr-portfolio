import { StaticImageData } from "next/image";
import jobPortal from "../public/jobPortal.png";
import chirpUP from "../public/chirpUp.png";

interface Experience {
  company: string;
  duration: string;
  role: string;
  responsibilities: string[];
}
interface Project {
  name: string;
  techStack: string;
  img: StaticImageData;
  sourceCodeLink: string;
  hostedURL: string;
  description: string[];
}
interface TextContent {
  about: {
    heyText: string;
    name: string;
    title: string;
    downloadText: string;
    sectionTitle: string;
    description: string;
  };
  skills: {
    sectionTitle: string;
    mySkills: string[];
  };
  experience: {
    sectionTitle: string;
    experiences: Experience[];
  };
  projects: {
    sectionTitle: string;
    sourceCodeText: string;
    techUsedText: string;
    project: Project[];
  };
  contact: {
    sectionTitle: string;
    name: string;
    email: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submitText: string;
    toastSuccess: string;
    toastFail: string;
  };
  email: {
    nameTitle: string;
    emailTitle: string;
    subjectTitle: string;
    messageTitle: string;
    headerText: string;
    footerText: string;
  };
  navbar: {
    aboutLabel: string;
    skillsLabel: string;
    experienceLabel: string;
    projectsLabel: string;
    contactLabel: string;
  };
  footer: {
    builtUsingText: string;
    copyrightText: string;
    linkedInURL: string;
    githubURL: string;
    gmailURL: string;
    instaURL: string;
  };
}

export const textContent: TextContent = {
  about: {
    heyText: "Hey there 👋 I'm,",
    name: "Shravan Kumar,",
    title: "Full Stack Web Developer",
    downloadText: "Download CV",
    sectionTitle: "About me",
    description:
      "I'm a 🚀 Web Developer adept in React development, having around 3 years of experience in building and maintaining intricate web applications from scratch with a proven ability to work effectively in fast-paced environments and deliver projects on time.",
  },
  skills: {
    sectionTitle: "Skills",
    mySkills: [
      "React.JS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Sass",
      "MUI",
      "Bootstrap",
      "Tailwind CSS",
      "Git",
      "Redux.js",
      "Unit Testing",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Next.js",
      "Microsoft Azure",
    ],
  },
  experience: {
    sectionTitle: "Work Experience",
    experiences: [
      {
        company: "Accenture",
        duration: "Dec 2022 - Present",
        role: "Front End Development Analyst",
        responsibilities: [
          "Transitioned to a full-stack role, addressing backend resource shortages, while concurrently achieving Azure 900 certification.",
          "Spearheaded the creation of Low-Level Design and improved project architecture, reducing critical bug reports by 30%.",
          "Led key development flows during architectural improvements, ensuring seamless implementation.",
          "Collaborated to fortify project security, achieving a security score of 93, significantly reducing vulnerabilities.",
          "Diligently addressed production issues, remarkably reducing defects, and enabling 10,000+ error-free order placements in a single day.",
        ],
      },
      {
        company: "Accenture",
        duration: "Dec 2020 - Nov 2022",
        role: "Front End Development Associate",
        responsibilities: [
          "Developed and maintained Omnichannel web apps from the ground up.",
          "Achieved 90% code coverage with comprehensive unit tests, reducing critical defects by 40%.",
          "Led efforts to enhance app performance, resulting in a 100% reduction in page load times, greatly improving user satisfaction.",
          "Actively participated in client presentations and architectural walkthroughs, fostering strong client relationships.",
        ],
      },
    ],
  },
  projects: {
    sectionTitle: "Projects",
    sourceCodeText: "View Source Code",
    techUsedText: "Technology Used :",
    project: [
      {
        name: "Chirpup - A socialmedia app",
        techStack: "React.js, MongoDB, Express.js, Node.js, MUI, Formik, yup.",
        img: chirpUP,
        sourceCodeLink: "https://github.com/shrvnkmr/MERN-SocialMediaApp",
        hostedURL: "https://chirpup.vercel.app/",
        description: [
          "Social media site built using MERN stack which allows user to create and interact with posts, upload photos, add friend and view user timeline.",
          "Seamless login process and API authorization enabled using JWT.",
          "It is hosted on vercel with a streamlined build pipeline.",
        ],
      },
      {
        name: "Job Portal",
        techStack: "React.js, Tailwind.css, mockapi.io",
        img: jobPortal,
        sourceCodeLink: "https://github.com/shrvnkmr/Job-Portal",
        hostedURL: "https://admirable-gaufre-63505e.netlify.app/",
        description: [
          "This is a simple job portal project developed to get started with Tailwind.css.",
          "It uses React.js for the frontend, Tailwind CSS library for styling, and mockapi.io for the API server.",
          "The website allows users to create job postings and view them.",
          "It is hosted on Netlify.",
        ],
      },
    ],
  },
  contact: {
    sectionTitle: "Get in touch",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    subjectPlaceholder: "Enter subject here",
    messagePlaceholder: "Enter your message here",
    submitText: "Submit",
    toastSuccess: "Email sent successfully!",
    toastFail: "Something went wrong :(",
  },
  email: {
    nameTitle: "Name:",
    emailTitle: "Email:",
    subjectTitle: "Subject:",
    messageTitle: "Message:",
    headerText: "New Portfolio Enquiry",
    footerText: "You can respond to this inquiry by replying to this email.",
  },
  navbar: {
    aboutLabel: "About",
    skillsLabel: "Skills",
    experienceLabel: "Experience",
    projectsLabel: "Projects",
    contactLabel: "Contact",
  },
  footer: {
    builtUsingText: "Built with 🩵 using Next.js & Tailwind CSS",
    copyrightText: "© 2023 Shravan. All Rights Reserved.",
    linkedInURL: "https://www.linkedin.com/in/shrvn-kmr",
    githubURL: "https://github.com/shrvnkmr",
    gmailURL: "mailto:shravan.sk656@gmail.com",
    instaURL: "https://www.instagram.com/shravan._.kumar/",
  },
};
