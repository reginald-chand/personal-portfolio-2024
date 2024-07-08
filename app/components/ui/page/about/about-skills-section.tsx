import { ReactElement, memo } from "react";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoNodejs,
  IoLogoReact,
} from "react-icons/io5";
import {
  TbBrandFigma,
  TbBrandGit,
  TbBrandGithub,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandOffice,
  TbBrandPython,
  TbBrandReactNative,
  TbBrandTypescript,
  TbBrandVisualStudio,
  TbBrandVscode,
  TbBrandWindows,
} from "react-icons/tb";
import {
  SiAdobexd,
  SiCplusplus,
  SiEmbarcadero,
  SiExpress,
  SiJetbrains,
  SiLinux,
  SiMongodb,
  SiMongoose,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";
import { AboutSkillContainer } from "./about-skill-container";
import { AboutSkillsContainer } from "./about-skills-container";

export const AboutSkillsSection = memo((): ReactElement => {
  return (
    <section className="w-full px-5">
      <h2 className="text-2xl">My Skills</h2>
      <div>
        <h3 className="my-5 text-sm font-bold uppercase text-brand-primary">
          Frontend
        </h3>

        <div>
          <AboutSkillsContainer>
            <AboutSkillContainer
              skillIcon={<IoLogoHtml5 className="w-1/2 h-1/2 text-[#F06529]" />}
              borderHover="hover:border-[#F06529]"
            />

            <AboutSkillContainer
              skillIcon={<IoLogoCss3 className="w-1/2 h-1/2 text-[#264de4]" />}
              borderHover="hover:border-[#264de4]"
            />

            <AboutSkillContainer
              skillIcon={
                <TbBrandJavascript className="w-1/2 h-1/2 text-[#F0DB4F]" />
              }
              borderHover="hover:border-[#F0DB4F]"
            />

            <AboutSkillContainer
              skillIcon={
                <TbBrandTypescript className="w-1/2 h-1/2 text-[#007acc]" />
              }
              borderHover="hover:border-[#007acc]"
            />

            <AboutSkillContainer
              skillIcon={<IoLogoReact className="w-1/2 h-1/2 text-[#61DBFB]" />}
              borderHover="hover:border-[#61DBFB]"
            />

            <AboutSkillContainer
              skillIcon={<TbBrandNextjs className="w-1/2 h-1/2 text-white" />}
              borderHover="hover:border-white"
            />

            <AboutSkillContainer
              skillIcon={
                <SiTailwindcss className="w-1/2 h-1/2 text-[#38bdf8]" />
              }
              borderHover="hover:border-[#38bdf8]"
            />
            <AboutSkillContainer
              skillIcon={
                <SiStyledcomponents className="w-1/2 h-1/2 text-[#db7093]" />
              }
              borderHover="hover:border-[#db7093]"
            />
          </AboutSkillsContainer>
        </div>
      </div>

      <div>
        <h3 className="my-5 text-sm font-bold uppercase text-brand-primary">
          Backend
        </h3>

        <div>
          <AboutSkillsContainer>
            <AboutSkillContainer
              skillIcon={
                <IoLogoNodejs className="w-1/2 h-1/2 text-[#339933]" />
              }
              borderHover="hover:border-[#339933]"
            />

            <AboutSkillContainer
              skillIcon={<SiExpress className="w-1/2 h-1/2 text-white" />}
              borderHover="hover:border-white"
            />

            <AboutSkillContainer
              skillIcon={<SiMongoose className="w-1/2 h-1/2 text-[#880000]" />}
              borderHover="hover:border-[#880000]"
            />

            <AboutSkillContainer
              skillIcon={<SiMongodb className="w-1/2 h-1/2 text-[#47A248]" />}
              borderHover="hover:border-[#47A248]"
            />
          </AboutSkillsContainer>
        </div>
      </div>

      <div>
        <h3 className="my-5 text-sm font-bold uppercase text-brand-primary">
          Android
        </h3>

        <div>
          <AboutSkillsContainer>
            <AboutSkillContainer
              skillIcon={
                <TbBrandReactNative className="w-1/2 h-1/2 text-[#61DAFB]" />
              }
              borderHover="hover:border-[#61DAFB]"
            />
          </AboutSkillsContainer>
        </div>
      </div>

      <div>
        <h3 className="my-5 text-sm font-bold uppercase text-brand-primary">
          Programming Languages
        </h3>

        <div>
          <AboutSkillsContainer>
            <AboutSkillContainer
              skillIcon={
                <TbBrandJavascript className="w-1/2 h-1/2 text-[#F0DB4F]" />
              }
              borderHover="hover:border-[#F0DB4F]"
            />

            <AboutSkillContainer
              skillIcon={
                <TbBrandTypescript className="w-1/2 h-1/2 text-[#007acc]" />
              }
              borderHover="hover:border-[#007acc]"
            />

            <AboutSkillContainer
              skillIcon={
                <TbBrandPython className="w-1/2 h-1/2 text-[#FFD343]" />
              }
              borderHover="hover:border-[#FFD343]"
            />

            <AboutSkillContainer
              skillIcon={<SiCplusplus className="w-1/2 h-1/2 text-[#00599C]" />}
              borderHover="hover:border-[#00599C]"
            />
          </AboutSkillsContainer>
        </div>
      </div>

      <div>
        <h3 className="my-5 text-sm font-bold uppercase text-brand-primary">
          Version Control
        </h3>

        <div>
          <AboutSkillsContainer>
            <AboutSkillContainer
              skillIcon={<TbBrandGit className="w-1/2 h-1/2 text-[#F05032]" />}
              borderHover="hover:border-[#F05032]"
            />

            <AboutSkillContainer
              skillIcon={<TbBrandGithub className="w-1/2 h-1/2 text-white" />}
              borderHover="hover:border-white"
            />
          </AboutSkillsContainer>
        </div>
      </div>

      <div>
        <h3 className="my-5 text-sm font-bold uppercase text-brand-primary">
          Development Tools
        </h3>

        <div>
          <AboutSkillsContainer>
            <AboutSkillContainer
              skillIcon={
                <TbBrandVscode className="w-1/2 h-1/2 text-[#007ACC]" />
              }
              borderHover="hover:border-[#007ACC]"
            />

            <AboutSkillContainer
              skillIcon={
                <TbBrandVisualStudio className="w-1/2 h-1/2 text-[#5C2D91]" />
              }
              borderHover="hover:border-[#5C2D91]"
            />

            <AboutSkillContainer
              skillIcon={<SiJetbrains className="w-1/2 h-1/2 text-[#00B4E6]" />}
              borderHover="hover:border-[#00B4E6]"
            />

            <AboutSkillContainer
              skillIcon={
                <SiEmbarcadero className="w-1/2 h-1/2 text-[#D64D38]" />
              }
              borderHover="hover:border-[#D64D38]"
            />

            <AboutSkillContainer
              skillIcon={
                <TbBrandOffice className="w-1/2 h-1/2 text-[#FF3A00]" />
              }
              borderHover="hover:border-[#FF3A00]"
            />
          </AboutSkillsContainer>
        </div>
      </div>

      <div>
        <h3 className="my-5 text-sm font-bold uppercase text-brand-primary">
          Operating Systems
        </h3>

        <div>
          <AboutSkillsContainer>
            <AboutSkillContainer
              skillIcon={
                <TbBrandWindows className="w-1/2 h-1/2 text-[#0078D6]" />
              }
              borderHover="hover:border-[#0078D6]"
            />

            <AboutSkillContainer
              skillIcon={<SiLinux className="w-1/2 h-1/2 text-[#FCC624]" />}
              borderHover="hover:border-[#FCC624]"
            />
          </AboutSkillsContainer>
        </div>
      </div>

      <div>
        <h3 className="my-5 text-sm font-bold uppercase text-brand-primary">
          Design
        </h3>

        <div>
          <AboutSkillsContainer>
            <AboutSkillContainer
              skillIcon={
                <TbBrandFigma className="w-1/2 h-1/2 text-[#A259FF]" />
              }
              borderHover="hover:border-[#A259FF]"
            />

            <AboutSkillContainer
              skillIcon={<SiAdobexd className="w-1/2 h-1/2 text-[#FF26BE]" />}
              borderHover="hover:border-[#FF26BE]"
            />
          </AboutSkillsContainer>
        </div>
      </div>
    </section>
  );
});

AboutSkillsSection.displayName = "About Skills Section";
