import { ReactElement } from "react";
import { GlobalLayout } from "./components/layouts/_app";
import { HeroSection } from "./components/ui/hero_section/hero-section";

export default function Home(): ReactElement {
  return (
    <GlobalLayout>
      <main className="w-full min-h-screen">
        <HeroSection />
      </main>
    </GlobalLayout>
  );
}
