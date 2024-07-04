"use client";

import { ReactElement, memo, useEffect, useState } from "react";
import { ProjectsNavigation } from "./projects-navigation";
import { Projects } from "./projects";
import { useProjectList } from "../../../hooks/use-project-list";
import { ProjectsSearch } from "./projects-search";
import { FullStackProjectsData } from "@/app/components/data/fullstack-projects-data";
import { FeaturedProjectsSectionProjectsData } from "@/app/components/data/featured-projects-section-projects-data";

export const ProjectsSection = memo((): ReactElement => {
  const [searchPrompt, setSearchPrompt] = useState<string>();
  const [projectsUrl, setProjectsUrl] = useState<any>();

  const handleSearchPrompt = (event: any) => {
    setSearchPrompt(event.target.value);
  };

  const backendProjectsUrl = "/projects/backend";
  const fullStackProjectsUrl = "/projects/fullstack";

  useEffect(() => {
    setProjectsUrl(window.location.pathname);
  }, [projectsUrl]);

  const [backendNewProjectList] = useProjectList({
    searchPrompt: searchPrompt,
    projectList: FeaturedProjectsSectionProjectsData,
  });

  const [fullStackNewProjectList] = useProjectList({
    searchPrompt: searchPrompt,
    projectList: FullStackProjectsData,
  });

  return (
    <section className="p-5 grid grid-rows-[80px,1fr]  md:grid-cols-[300px,auto] gap-5">
      <ProjectsSearch handleSearchPrompt={handleSearchPrompt} />
      <ProjectsNavigation />
      <Projects
        hideView={backendProjectsUrl === projectsUrl ? false : true}
        projectList={backendNewProjectList}
      />
      <Projects
        hideView={fullStackProjectsUrl === projectsUrl ? false : true}
        projectList={fullStackNewProjectList}
      />
    </section>
  );
});

ProjectsSection.displayName = "Projects Section";
