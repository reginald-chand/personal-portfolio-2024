import Link from "next/link";
import { ReactElement, memo } from "react";

export const ProjectsNavigation = memo((): ReactElement => {
  return (
    <div className="max-h-[190px] p-5 border-2 border-dashed border-gray-900 rounded-md">
      <ul>
        <li>
          <Link
            href="/projects/backend"
            className="mb-5 p-5 block text-sm font-bold uppercase border-2 border-dashed border-brand-primary rounded-md hover:border-gray-900 hover:text-brand-primary active:scale-95 transition-all duration-300 ease-linear"
          >
            Backend
          </Link>
        </li>

        <li>
          <Link
            href="/projects/fullstack"
            className="mb-5 p-5 block text-sm font-bold uppercase border-2 border-dashed border-brand-primary rounded-md hover:border-gray-900 hover:text-brand-primary active:scale-95 transition-all duration-300 ease-linear"
          >
            Full Stack
          </Link>
        </li>
      </ul>
    </div>
  );
});

ProjectsNavigation.displayName = "Projects Navigation";
