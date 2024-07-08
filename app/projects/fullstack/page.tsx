"use client";

import { ReactElement, useState } from "react";
import { GlobalLayout } from "@/app/components/layouts/_app";
import { Projects } from "@/app/components/ui/page/projects/projects";
import { useProjectList } from "@/app/components/hooks/use-project-list";
import { ProjectsNavigation } from "@/app/components/ui/page/projects/projects-navigation";
import { ProjectsSearch } from "@/app/components/ui/page/projects/projects-search";
import { FullStackProjectsData } from "@/app/components/data/fullstack-projects-data";

export default function FullStackProjects(): ReactElement {
  const [searchPrompt, setSearchPrompt] = useState<string>();

  const handleSearchPrompt = (event: any) => {
    setSearchPrompt(event.target.value);
  };

  const [newProjectList] = useProjectList({
    searchPrompt: searchPrompt,
    projectList: FullStackProjectsData,
  });

  return (
    <GlobalLayout>
      <main className="w-full 2xl:max-w-[1920px] 2xl:mx-auto">
        <section className="p-5 grid grid-rows-[80px,1fr]  md:grid-cols-[300px,auto] gap-5">
          <ProjectsSearch handleSearchPrompt={handleSearchPrompt} />
          <ProjectsNavigation />
          <Projects projectList={newProjectList} />
        </section>
      </main>
    </GlobalLayout>
  );
}
