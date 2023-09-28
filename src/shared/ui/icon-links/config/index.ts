import instagramIcon from "../../../assets/social-media/instagram.png";
import linkedinIcon from "../../../assets/social-media/linkedin.png";
import githubIcon from "../../../assets/social-media/github.png";

export interface MediaIconLink {
  image: string;
  link: string;
}

export const mediaIconLinks: MediaIconLink[] = [
  {
    image: instagramIcon,
    link: "https://www.instagram.com/2rchan/",
  },
  {
    image: linkedinIcon,
    link: "https://www.linkedin.com/in/alex-turchynov-3a0015178/",
  },
  {
    image: githubIcon,
    link: "https://github.com/2rch",
  },
];
