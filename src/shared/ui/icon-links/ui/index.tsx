import React from "react";
import { mediaIconLinks } from "../config";
import { MediaLink } from "./media-link";

export const IconLinks = () => {
  return (
    <div className={"icon-links"}>
      {mediaIconLinks.map((mediaIconLink) => (
        <MediaLink key={mediaIconLink.link} {...mediaIconLink} />
      ))}
    </div>
  );
};
