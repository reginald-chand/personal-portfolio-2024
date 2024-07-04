import { ReactElement } from "react";
import { GlobalLayout } from "./components/layouts/_app";
import { HeroSection } from "./components/ui/hero_section/hero-section";
import { FeaturedProjectsSection } from "./components/ui/featured_projects_section/featured-projects-section";
import { UpComingProjectsSection } from "./components/ui/upcoming_projects_section/upcoming-projects-section";

export default function Home(): ReactElement {
  return (
    <GlobalLayout>
      <main className="w-full min-h-screen">
        <HeroSection />
        <FeaturedProjectsSection />
        <UpComingProjectsSection />
      </main>
    </GlobalLayout>
  );
}
