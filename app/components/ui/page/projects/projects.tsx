import { ReactElement, memo } from "react";
import Link from "next/link";

export const Projects = memo(
  ({ projectList }: { projectList: Readonly<Array<object>> }): ReactElement => {
    return (
      <section className="p-5 border-2 border-dashed border-gray-900 rounded-md">
        <div className="h-screen overflow-y-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {projectList.length === 0 ? (
              <div>
                OOPS!&nbsp;
                <strong className="font-bold">
                  The project you are searching for is not available! 😟
                </strong>
              </div>
            ) : (
              projectList &&
              projectList.map((element: string | any, index: number) => (
                <div
                  key={index}
                  className="p-5 relative border-2 border-dashed border-gray-900 rounded-md hover:border-brand-primary transition-colors duration-300 ease-linear"
                >
                  <Link
                    href={element.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mb-5 block font-bold capitalize hover:underline"
                  >
                    {element.title}
                  </Link>

                  <p className="h-fit md:h-[210px] lg:h-[250px] xl:h-[180px] mb-5 md:mb-0 font-light">
                    {element.description.length <= 200
                      ? element.description
                      : `${element.description.substring(0, 200)}...`}
                  </p>

                  <Link
                    href={element.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-2 md:absolute bottom-5 left-5 inline-block font-bold capitalize rounded-md border-2 border-dashed border-transparent bg-brand-primary hover:bg-transparent hover:border-gray-900 active:scale-95 group transition-all duration-300 ease-linear"
                  >
                    <span className="inline-block font-bold lowercase group-hover:text-brand-primary transition-colors duration-300 ease-linear">
                      Open Project
                    </span>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    );
  }
);

Projects.displayName = "Projects";
