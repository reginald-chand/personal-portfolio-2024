import { GlobalLayout } from "@/app/components/layouts/_app";
import { ProjectsSection } from "@/app/components/ui/page/projects/projects-section";
import { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <GlobalLayout>
      <main className="w-full min-h-screen">
        <ProjectsSection />
      </main>
    </GlobalLayout>
  );
}
