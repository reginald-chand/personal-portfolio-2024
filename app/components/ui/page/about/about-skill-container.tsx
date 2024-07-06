import { propValidator } from "@/app/components/utils/error/prop-validation";
import { ReactElement, ReactNode, memo } from "react";

export const AboutSkillContainer = memo(
  ({
    skillIcon,
    borderHover,
  }: {
    skillIcon: ReactNode;
    borderHover: string;
  }): ReactElement => {
    propValidator({ prop: skillIcon, propName: "skillIcon" });
    propValidator({ prop: borderHover, propName: "borderHover" });

    return (
      <div
        className={`flex items-center justify-center border-2 border-dashed border-gray-900 rounded-md transition-colors duration-300 ease-linear ${borderHover}`}
      >
        {skillIcon}
      </div>
    );
  }
);

AboutSkillContainer.displayName = "About Skill Container";
