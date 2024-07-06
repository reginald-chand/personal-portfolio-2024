import { ReactElement, memo } from "react";
import { AboutHeroSection } from "./about-hero-section";
import { AboutSkillsSection } from "./about-skills-section";
import { AboutContactSection } from "./about-contact-section";

export const AboutSection = memo((): ReactElement => {
  return (
    <>
      <AboutHeroSection />
      <AboutSkillsSection />
      <AboutContactSection />
    </>
  );
});

AboutSection.displayName = "About Section";
