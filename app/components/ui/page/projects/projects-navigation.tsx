import { ReactElement, memo } from "react";

export const ProjectsNavigation = memo((): ReactElement => {
  const openBackendProjects = () => {
    if (!window.location.href.includes("projects/backend")) {
      window.location.href = "/projects/backend";
    }
  };

  const openFullStackProjects = () => {
    if (!window.location.href.includes("fullstack/fullstack")) {
      window.location.href = "/projects/fullstack";
    }
  };

  return (
    <div className="max-h-[190px] p-5 border-2 border-dashed border-gray-900 rounded-md">
      <ul>
        <li
          onClick={openBackendProjects}
          className="mb-5 p-5 text-sm font-bold cursor-pointer uppercase border-2 border-dashed border-brand-primary rounded-md hover:border-gray-900 hover:text-brand-primary active:scale-95 transition-all duration-300 ease-linear"
        >
          Backend
        </li>

        <li
          onClick={openFullStackProjects}
          className="p-5 text-sm font-bold cursor-pointer uppercase border-2 border-dashed border-brand-primary rounded-md hover:border-gray-900 hover:text-brand-primary active:scale-95 transition-all duration-300 ease-linear"
        >
          Full Stack
        </li>
      </ul>
    </div>
  );
});

ProjectsNavigation.displayName = "Projects Navigation";
