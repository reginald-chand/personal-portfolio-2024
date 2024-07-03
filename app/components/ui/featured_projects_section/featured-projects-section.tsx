"use client";

import Link from "next/link";
import { ReactElement, memo, useEffect, useRef, useState } from "react";
import { FeaturedProjectsSectionProjectsData } from "../../data/featured-projects-section-projects-data";

export const FeaturedProjectsSection = memo((): ReactElement => {
  const featuredProjectsContainer = useRef<HTMLDivElement>(null);

  const [featuredProjectsCount, setFeaturedProjectsCount] = useState<number>(0);

  useEffect(() => {
    if (featuredProjectsContainer.current !== null) {
      const numberOfFeaturedProjects =
        featuredProjectsContainer.current.childNodes.length;
      setFeaturedProjectsCount(numberOfFeaturedProjects);
    }
  }, []);

  return (
    <section id="featured-projects" className="w-full min-h-screen p-5 ">
      <h2 className="mb-5 text-2xl">
        Featured Projects&nbsp;
        <sup className="text-brand-primary">{featuredProjectsCount}</sup>
      </h2>
      <div
        ref={featuredProjectsContainer}
        className="grid auto-rows-[minmax(300px, auto)] grid-cols-1 md:grid-cols-2 gap-5"
      >
        {FeaturedProjectsSectionProjectsData &&
          FeaturedProjectsSectionProjectsData.map((element, index) => (
            <div
              key={index}
              className="p-5 border-2 border-dashed border-gray-900 rounded-md hover:border-brand-primary transition-colors duration-300 ease-linear"
            >
              <Link
                href={element.link}
                target="_blank"
                rel="noreferrer noopener"
                className="mb-5 block font-bold capitalize hover:underline"
              >
                {element.title}
              </Link>

              <p className="mb-5 font-light">
                {element.description.length <= 200
                  ? element.description
                  : `${element.description.substring(0, 200)}...`}
              </p>

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
    </section>
  );
});

FeaturedProjectsSection.displayName = "Featured Projects Section";
