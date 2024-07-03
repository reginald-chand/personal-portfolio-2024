import Image from "next/image";
import Link from "next/link";
import { ReactElement, memo } from "react";

export const HeroSection = memo((): ReactElement => {
  return (
    <section className="w-full min-h-[80vh] lg:min-h-[85vh] p-5 xl:p-0 flex flex-col md:flex-row items-center justify-evenly">
      <div className="ml-5 md:ml-0">
        <h1 className="text-2xl sm:text-3xl xl:text-7xl font-black lowercase">
          Full Stack Engineer
        </h1>

        <h2 className="mb-5 text-[0.61rem] sm:text-sm xl:text-2xl">
          <span className="font-bold uppercase">
            Welcome to my&nbsp;
            <span className="relative inline-block animate-pulse transition-transform duration-300 ease-linear -z-50">
              portfolio!
            </span>
          </span>
        </h2>

        <p className="max-w-[500px] mb-5 leading-relaxed">
          I&apos; am <span className="font-bold">Reginald Sahil Chand. </span>
          <span className="italic">
            A dedicated&nbsp;
            <span className="text-brand-primary">
              Full Stack Engineer&nbsp;
            </span>
            specializing in backend technologies.&nbsp;
          </span>
          Passionate about crafting efficient and scalable software solutions,
          focusing on backend development, microservices architecture, and
          ensuring high-performance standards. My projects emphasize security,
          scalability, and seamless integration within complex systems.
        </p>

        <Link
          href="#featured-projects"
          type="button"
          className="p-5 inline-block rounded-md border-2 border-dashed border-transparent bg-brand-primary hover:bg-transparent hover:border-gray-900 active:scale-95 group transition-all duration-300 ease-linear"
        >
          <span className="inline-block font-bold lowercase group-hover:text-brand-primary transition-colors duration-300 ease-linear">
            View Featured Projects
          </span>
        </Link>
      </div>

      <div>
        <Image
          src="/undraw-proud-coder.svg"
          alt="Undraw proud coder"
          title="Image Sourced From (undraw.co)"
          width={500}
          height={500}
          className="hidden w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] md:block"
        />
      </div>
    </section>
  );
});

HeroSection.displayName = "Hero Section";
