import { ReactNode } from "react";
import { FaMailBulk } from "react-icons/fa";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaThreads,
  FaViber,
} from "react-icons/fa6";

type FooterImportantSocialMediaLinksType = {
  title: string;
  link: string;
  icon: ReactNode;
};

export const FooterImportantSocialMediaLinks: Readonly<
  FooterImportantSocialMediaLinksType[]
> = [
  {
    title: "GitHub",
    link: "https://github.com/reginald-chand",
    icon: <FaGithub />,
  },

  {
    title: "LinkedIn",
    link: "#",
    icon: <FaLinkedin />,
  },

  {
    title: "Email",
    link: "mailto:reginald-chand@outlook.com",
    icon: <FaMailBulk />,
  },

  {
    title: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61560339402591",
    icon: <FaFacebook />,
  },

  {
    title: "Instagram",
    link: "https://www.instagram.com/reginaldsc_/",
    icon: <FaInstagram />,
  },

  {
    title: "Threads",
    link: "https://www.threads.net/@reginaldsc_",
    icon: <FaThreads />,
  },

  {
    title: "Viber",
    link: "tel:+6799334253",
    icon: <FaViber />,
  },
];
