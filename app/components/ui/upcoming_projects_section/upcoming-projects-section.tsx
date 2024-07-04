import Link from "next/link";
import { ReactElement, memo } from "react";
import { UpcomingProjectsSectionProjectsData } from "../../data/upcoming-projects-section-projects-data";

export const UpComingProjectsSection = memo((): ReactElement => {
  return (
    <section id="upcoming-projects" className="w-full p-5">
      <h2 className="mb-5 text-2xl">Upcoming Projects</h2>
      <div className="w-full flex items-center justify-center">
        <div className="w-full p-5 border-2 border-dashed border-gray-900 rounded-md">
          {UpcomingProjectsSectionProjectsData &&
            UpcomingProjectsSectionProjectsData.map((element, index) => (
              <div
                key={index}
                className="lg:p-5 lg:border-2 lg:border-dashed lg:border-gray-900 lg:rounded-md lg:hover:border-brand-primary transition-colors duration-300 ease-linear"
              >
                <Link
                  href={element.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mb-5 block font-bold capitalize hover:underline"
                >
                  {element.title}
                </Link>

                <p className="w-full lg:w-1/2 mb-5 font-light leading-relaxed lg:text-justify">
                  {element.description}
                </p>

                <div className="mb-5">
                  <h3 className="mb-5 font-medium">Key Features</h3>

                  <ol className="grid lg:grid-cols-2 gap-5 list-inside lg:list-decimal">
                    {element.keyFeatures &&
                      element.keyFeatures.map((element, index) => (
                        <li
                          key={index}
                          className="min-h-[150px] lg:p-5 lg:border-2 lg:border-dashed lg:border-gray-900 lg:rounded-md lg:hover:border-brand-primary transition-colors duration-300 ease-linear"
                        >
                          <h4 className="mb-2 inline-block font-semibold">
                            {element.featureTitle}
                          </h4>

                          <ul className="ml-5 lg:ml-10 list-outside list-disc font-light">
                            {element.features &&
                              element.features.map((element, index) => (
                                <li key={index} className="mb-2">
                                  {element}
                                </li>
                              ))}
                          </ul>
                        </li>
                      ))}
                  </ol>
                </div>

                <Link
                  href={element.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-2 inline-block font-bold capitalize rounded-md border-2 border-dashed border-transparent bg-brand-primary hover:bg-transparent hover:border-gray-900 active:scale-95 group transition-all duration-300 ease-linear"
                >
                  <span className="inline-block font-bold lowercase group-hover:text-brand-primary transition-colors duration-300 ease-linear">
                    Open Project
                  </span>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
});

UpComingProjectsSection.displayName = "Upcoming Projects Section";
