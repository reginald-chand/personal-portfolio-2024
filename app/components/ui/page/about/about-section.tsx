import { ReactElement, memo } from "react";
import { AboutHeroSection } from "./about-hero-section";
import { AboutSkillsSection } from "./about-skills-section";
import { AboutContactSection } from "./about-contact-section";
import { AboutWhyHireMe } from "./about-why-hire-me-section";

export const AboutSection = memo((): ReactElement => {
  return (
    <>
      <AboutHeroSection />
      <AboutSkillsSection />
      <AboutWhyHireMe />
      <AboutContactSection />
    </>
  );
});

AboutSection.displayName = "About Section";
