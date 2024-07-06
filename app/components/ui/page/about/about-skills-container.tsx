import { propValidator } from "@/app/components/utils/error/prop-validation";
import { ReactElement, ReactNode, memo } from "react";

export const AboutSkillsContainer = memo(
  ({ children }: { children: ReactNode }): ReactElement => {
    propValidator({ prop: children, propName: "children" });

    return (
      <div className={`grid grid-cols-2 md:grid-cols-6 gap-5`}>{children}</div>
    );
  }
);

AboutSkillsContainer.displayName = "About Skills Container";
