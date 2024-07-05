import {
  HomeIcon,
  PhoneIcon,
  SquaresPlusIcon,
  TagIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { NavLinksType } from "../types/nav-links-type";

export const HomeNavLinksData: Readonly<NavLinksType[]> = [
  {
    title: "Home",
    link: "/",
    icon: <HomeIcon />,
  },

  {
    title: "Featured projects",
    link: "#featured-projects",
    icon: <TagIcon />,
  },

  {
    title: "Upcoming projects",
    link: "#upcoming-projects",
    icon: <TagIcon />,
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

  {
    title: "Admin",
    link: "/admin",
    icon: <UserGroupIcon />,
  },
];
