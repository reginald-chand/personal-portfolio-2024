import {
  HomeIcon,
  PhoneIcon,
  SquaresPlusIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { NavLinksType } from "../types/nav-links-type";

export const NavLinksData: Readonly<NavLinksType[]> = [
  {
    title: "Home",
    link: "/",
    icon: <HomeIcon />,
  },

  {
    title: "All projects",
    link: "/projects/backend",
    icon: <SquaresPlusIcon />,
  },

  {
    title: "About me",
    link: "/about",
    icon: <UserIcon />,
  },

  {
    title: "Contact me",
    link: "/contact",
    icon: <PhoneIcon />,
  },
];
