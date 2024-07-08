"use client";

import { Link as ReactScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement, memo, useEffect, useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { FooterImportantSocialMediaLinks } from "../data/footer-important-social-media-links-data";
import { HomeNavLinksData } from "../data/home-nav-links-data";
import { NavLinksData } from "../data/nav-links-data";

export const Footer = memo((): ReactElement => {
  const pathname = usePathname();
  const currentDate = new Date().toDateString();
  const [currentTime, setCurrentTime] = useState(new Date().toTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const newFooterNavigationLinks =
    pathname === "/" ? HomeNavLinksData : NavLinksData;

  return (
    <footer className="w-full p-5 grid gap-y-5 border-t-2 border-gray-900 border-dashed bg-gray-950">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="mb-2 lg:mb-0">
          <span>Copyright &copy;</span>
          <Link
            href="https://github.com/reginald-chand"
            target="_blank"
            rel="noreferrer noopener"
            title="Open GitHub"
            className="underline font-black hover:text-brand-primary transition-colors duration-300 ease-linear"
          >
            <strong>&nbsp;Reginald Sahil Chand&nbsp;</strong>
          </Link>
          <div className="lg:hidden">
            2024 &middot; <em>All Rights Reserved</em>
          </div>

          <span className="hidden lg:inline">
            &middot; 2024 &middot; <em>All Rights Reserved</em>
          </span>
        </div>

        <div>
          <span>Designed &amp; Developed with 💗 By&nbsp;</span>
          <Link
            href="https://github.com/reginald-chand"
            target="_blank"
            rel="noreferrer noopener"
            title="Open GitHub"
            className="underline font-black hover:text-brand-primary transition-colors duration-300 ease-linear"
          >
            <strong>Reginald Sahil Chand</strong>
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-between">
        <div>
          <div className="font-semibold mb-2">Important Navigation Links</div>
          <ul>
            {newFooterNavigationLinks &&
              newFooterNavigationLinks.map((element, index) => (
                <li
                  key={index}
                  className="flex items-center justify-start group"
                >
                  <div className="w-4 h-4 mr-2">{element.icon}</div>
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
                      className={`font-light hover:text-brand-primary cursor-pointer hover:underline transition-colors duration-300 ease-linear  ${
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
                      className={`font-light hover:text-brand-primary hover:underline transition-colors duration-300 ease-linear ${
                        pathname === element.link
                          ? "text-brand-primary line-through"
                          : "text-gray-50 no-underline"
                      }`}
                    >
                      {element.title}
                    </Link>
                  )}
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2 text-[#f9fafb26] group-hover:text-gray-50" />
                </li>
              ))}
          </ul>
        </div>

        <div>
          <div className="font-semibold mt-5 lg:mt-0 mb-2">
            Social Media Links
          </div>
          <ul>
            {FooterImportantSocialMediaLinks &&
              FooterImportantSocialMediaLinks.map((element, index) => (
                <li
                  key={index}
                  className="flex items-center justify-start group"
                >
                  <div className="w-4 h-4 mr-2">{element.icon}</div>
                  <Link
                    href={element.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-light hover:text-brand-primary hover:underline transition-colors duration-300 ease-linear"
                  >
                    {element.title}
                  </Link>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2 text-[#f9fafb26] group-hover:text-gray-50" />
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="text-[#f9fafb33]">
          <div>{currentDate}</div>
          <div suppressHydrationWarning>{currentTime}</div>
        </div>

        <div className="mt-2 lg:mt-0 lg:text-right">
          <Link
            href="#"
            className="uppercase text-sm font-medium text-[#f9fafb40] hover:text-brand-primary transition-colors duration-300 ease-linear"
          >
            Move to top
          </Link>

          <div className="mt-2 lg:mt-0">Have a great day 😁</div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
