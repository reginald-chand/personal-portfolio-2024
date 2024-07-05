"use client";

import { ReactElement, memo, useState } from "react";
import { Logo } from "./logo";
import { Hamburger } from "./hamburger";
import { HeaderNavigation } from "./header-navigation";
import { NavLinksData } from "../data/nav-links-data";

export const Header = memo((): ReactElement => {
  const [navigationDrawer, setNavigationDrawer] = useState<boolean>(false);

  const handleNavigationDrawer = () => {
    setNavigationDrawer((prev) => !prev);
  };

  return (
    <header className="w-full h-20 p-5 sticky top-0 left-0 flex items-center justify-between border-b-2 border-gray-900 border-dashed bg-gray-950 z-50">
      <Logo brandName="Reginald Chand" brandSlogan="Full Stack Engineer" />
      <Hamburger
        hamburgerFunction={handleNavigationDrawer}
        hamburgerAccessibilityText="Open Navigation Menu"
      />
      <HeaderNavigation
        navigationDrawer={navigationDrawer}
        handleNavigationDrawer={handleNavigationDrawer}
        headerNavigationLinks={NavLinksData}
      />
    </header>
  );
});

Header.displayName = "Header";
