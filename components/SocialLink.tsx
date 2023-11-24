import Link from "next/link";
import React, { ElementType } from "react";

interface SocialLinkProps {
  url: string;
  icon: ElementType;
}

const SocialMediaLink = ({ url, icon: Icon }: SocialLinkProps) => {
  return (
    <Link href={url} rel="noopener" target="_blank">
      <Icon className="cursor-pointer hover:text-slate-700 hover:dark:text-slate-300" />
    </Link>
  );
};

export default SocialMediaLink;
