import { textContent } from "@/content/textContent";
import React from "react";
import {
  BsLinkedin,
  BsGithub,
  BsFillEnvelopeFill,
  BsInstagram,
} from "react-icons/bs";
import SocialMediaLink from "./SocialLink";

const Footer = () => {
  const {
    builtUsingText,
    copyrightText,
    linkedInURL,
    githubURL,
    gmailURL,
    instaURL,
  } = textContent.footer;
  return (
    <footer className="border-t-light flex flex-col items-center justify-center gap-10 border-t border-slate-400 bg-slate-300 p-10 text-slate-500 transition dark:border-slate-600 dark:bg-slate-800 md:px-14">
      <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
        <div className="flex justify-center gap-8 text-2xl md:order-2">
          <SocialMediaLink url={linkedInURL} icon={BsLinkedin} />
          <SocialMediaLink url={githubURL} icon={BsGithub} />
          <SocialMediaLink url={gmailURL} icon={BsFillEnvelopeFill} />
          <SocialMediaLink url={instaURL} icon={BsInstagram} />
        </div>
        <h4 className="md:order-1">{builtUsingText}</h4>
        <h4 className="md:order-3">{copyrightText}</h4>
      </div>
    </footer>
  );
};
export default Footer;
