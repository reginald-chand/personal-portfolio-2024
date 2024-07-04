import { ReactElement, memo } from "react";
import { HeaderNavLinksType } from "../types/header-nav-links-type";
import { Link as ReactScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { propValidator } from "../utils/error/prop-validation";
import { Logo } from "./logo";
import { Hamburger } from "./hamburger";
import { BarsArrowDownIcon } from "@heroicons/react/24/outline";
import { OnlyHomeHeaderNavLinks } from "../data/header-home-navigation-links";

type Props = {
  navigationDrawer: boolean;
  handleNavigationDrawer: () => void;
  headerNavigationLinks: Readonly<HeaderNavLinksType[]>;
};

export const HeaderNavigation = memo(
  ({
    navigationDrawer,
    handleNavigationDrawer,
    headerNavigationLinks,
  }: Props): ReactElement => {
    const pathname = usePathname();

    propValidator({
      prop: navigationDrawer,
      propName: "navigationDrawer",
    });

    propValidator({
      prop: handleNavigationDrawer,
      propName: "handleNavigationDrawer",
    });

    propValidator({
      prop: headerNavigationLinks,
      propName: "headerNavigationLinks",
    });

    const newHeaderNavigationLinks =
      pathname === "/" ? OnlyHomeHeaderNavLinks : headerNavigationLinks;

    return (
      <nav
        className={`w-full lg:w-fit h-screen lg:h-fit fixed lg:static top-0 left-0 bg-gray-950 lg:bg-transparent overflow-y-scroll lg:overflow-y-hidden lg:translate-y-0 transition-transform duration-300 ease-linear  ${
          !navigationDrawer ? "translate-y-[100%]" : "translate-y-0"
        }`}
      >
        <div className="w-full h-20 p-5 sticky top-0 left-0 flex lg:hidden items-center justify-between border-b-2 border-gray-900 border-dashed bg-gray-950">
          <Logo brandName="Reginald Chand" brandSlogan="Full Stack Engineer" />
          <Hamburger
            hamburgerIcon={<BarsArrowDownIcon />}
            hamburgerFunction={handleNavigationDrawer}
            hamburgerAccessibilityText="Close Navigation Menu"
          />
        </div>

        <ul className="p-5 lg:p-0 block lg:flex">
          {newHeaderNavigationLinks &&
            newHeaderNavigationLinks.map((element, index) => (
              <li
                key={index}
                className="mb-2 last:mb-0 lg:mb-0 lg:mr-3 flex items-center justify-start"
              >
                <div className="w-4 h-4 mr-2 lg:hidden">{element.icon}</div>
                {element.link.includes("#") ? (
                  <ReactScrollLink
                    to={element.link.substring(1)}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    title={`${
                      pathname === element.link
                        ? "Current Page"
                        : `Open ${element.title}`
                    }`}
                    onClick={handleNavigationDrawer}
                    className={`text-lg lg:text-sm font-bold lg:font-normal cursor-pointer hover:text-brand-primary hover:underline transition-colors duration-300 ease-linear ${
                      pathname === element.link
                        ? "text-brand-primary line-through"
                        : "text-gray-50 no-underline"
                    }`}
                  >
                    {element.title}
                  </ReactScrollLink>
                ) : (
                  <Link
                    href={element.link}
                    title={`${
                      pathname === element.link
                        ? "Current Page"
                        : `Open ${element.title}`
                    }`}
                    onClick={handleNavigationDrawer}
                    className={`text-lg lg:text-sm font-bold lg:font-normal hover:text-brand-primary hover:underline transition-colors duration-300 ease-linear ${
                      pathname === element.link
                        ? "text-brand-primary line-through"
                        : "text-gray-50 no-underline"
                    }`}
                  >
                    {element.title}
                  </Link>
                )}
              </li>
            ))}
        </ul>
      </nav>
    );
  }
);

HeaderNavigation.displayName = "Header Navigation";
