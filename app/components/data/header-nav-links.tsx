import {
  HomeIcon,
  PhoneIcon,
  SquaresPlusIcon,
  TagIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { HeaderNavLinksType } from "../types/header-nav-links-type";

export const HeaderNavLinks: Readonly<HeaderNavLinksType[]> = [
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

  {
    title: "Admin",
    link: "/admin",
    icon: <UserGroupIcon />,
  },
];
