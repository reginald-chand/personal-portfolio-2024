import Link from "next/link";
import { ReactElement, memo } from "react";
import { IoLogoNodejs, IoLogoReact } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

export const AboutHeroSection = memo((): ReactElement => {
  return (
    <section className="p-5 grid xl:grid-cols-2 gap-5">
      <div className="p-5 border-2 border-dashed border-gray-900 rounded-md hover:border-brand-primary transition-colors duration-300 ease-linear">
        <div className="">
          <h1 className="text-2xl sm:text-3xl xl:text-7xl font-black lowercase">
            Reginald Chand
          </h1>

          <h2 className="mb-5 text-[0.61rem] sm:text-sm xl:text-2xl">
            <span className="mt-2 inline-block font-bold uppercase">
              Who am i&nbsp;
              <span className="relative inline-block animate-pulse transition-transform duration-300 ease-linear -z-50">
                🤔
              </span>
            </span>
          </h2>

          <p className="max-w-[600px] mb-5 font-light xl:text-justify leading-relaxed">
            <strong className="font-black">Reginald Sahil Chand</strong> is
            a&nbsp;
            <em className="text-brand-primary font-semibold">
              dedicated Full Stack Engineer with a strong focus on backend
              technologies.&nbsp;
            </em>
            He specializes in crafting efficient and scalable software
            solutions, emphasizing backend development,&nbsp;
            <span className="text-brand-primary">
              micro-services architecture&nbsp;
            </span>
            , and high-performance standards. Reginald&apos;s projects are known
            for their security, scalability, and seamless integration within
            complex systems.
          </p>

          <p className="max-w-[600px] mb-5 font-extralight text-[0.8rem] xl:text-justify leading-relaxed">
            Proficient in&nbsp;
            <span className="font-bold">
              HTML, CSS, JavaScript (TypeScript), React, Next.js, C++, and
              Python,&nbsp;
            </span>
            Reginald excels in backend development with Node.js, Express, and
            MongoDB. His extensive portfolio includes various backend
            microservices like the Share Posts Management System (SPMS), Comment
            Management System (CMS), Like Management System (LMS), and more,
            each designed to enhance performance, security, and efficiency.
          </p>

          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between">
            <a
              href="#"
              download
              type="button"
              className="mt-5 lg:mt-0 p-5 inline-block rounded-md border-2 border-dashed border-transparent cursor-pointer bg-brand-primary hover:bg-transparent hover:border-gray-900 active:scale-95 group transition-all duration-300 ease-linear"
            >
              <span className="inline-block font-bold lowercase group-hover:text-brand-primary transition-colors duration-300 ease-linear">
                Download Resume
              </span>
            </a>

            <div className="flex items-center justify-between">
              <div className="w-10 h-10 mr-2 flex items-center justify-center border-2 border-dashed border-gray-900 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <Link
                href="mailto:reginald-chand@outlook.com"
                className="text-sm uppercase font-bold hover:underline"
              >
                Open to work
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="flex items-center justify-center border-2 border-dashed border-gray-900 rounded-md  animate-jsGlow">
          <TbBrandJavascript className="w-1/2 h-1/2 text-yellow-500 animate-pulse" />
        </div>

        <div className="flex items-center justify-center border-2 border-dashed border-gray-900 rounded-md  animate-reactGlow">
          <IoLogoReact className="w-1/2 h-1/2 text-blue-400 animate-spin" />
        </div>

        <div className="flex items-center justify-center border-2 border-dashed border-gray-900 rounded-md animate-mongoGlow">
          <SiMongodb className="w-1/2 h-1/2 text-green-400 animate-wiggle" />
        </div>

        <div className="flex items-center justify-center border-2 border-dashed border-gray-900 rounded-md  animate-nodeGlow">
          <IoLogoNodejs className="w-1/2 h-1/2 text-green-700 animate-pulse" />
        </div>
      </div>
    </section>
  );
});

AboutHeroSection.displayName = "About Hero Section";
