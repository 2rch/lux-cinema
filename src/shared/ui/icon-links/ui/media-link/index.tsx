import React from "react";
import "./index.scss";

interface MediaLinkProps {
  image: string;
  link: string;
}

export const MediaLink = ({ image, link }: MediaLinkProps) => {
  return (
    <a className={"media-link"} href={link}>
      <img src={image} alt={"socialMediaLogo"} className={"social-icon"} />
    </a>
  );
};
