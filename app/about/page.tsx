import { ReactElement } from "react";
import { GlobalLayout } from "../components/layouts/_app";
import { AboutSection } from "../components/ui/page/about/about-section";

export default function About(): ReactElement {
  return (
    <GlobalLayout>
      <main className="w-full 2xl:max-w-[1920px] 2xl:mx-auto min-h-screen">
        <AboutSection />
      </main>
    </GlobalLayout>
  );
}
