import { ReactElement, memo } from "react";

export const AboutWhyHireMe = memo((): ReactElement => {
  return (
    <section className="w-full p-5">
      <h2 className="mb-5 text-2xl">Why Hire Me</h2>

      <ul className="grid md:grid-cols-2 gap-5">
        <li className="p-5 inline-block border-2 border-dashed border-gray-900 rounded-md hover:border-brand-primary transition-colors duration-300 ease-linear">
          <h3 className="mb-2 text-sm uppercase text-brand-primary font-bold">
            Technical Proficiency
          </h3>
          <div className="max-w-[600px] leading-relaxed font-light">
            My comprehensive knowledge and hands-on experience with various
            modern technologies make me a versatile and reliable developer.
            Whether it&apos;s building a full-stack application or optimizing
            backend performance, I bring expertise to the table.
          </div>
        </li>

        <li className="p-5 inline-block border-2 border-dashed border-gray-900 rounded-md hover:border-brand-primary transition-colors duration-300 ease-linear">
          <h3 className="mb-2 text-sm uppercase text-brand-primary font-bold">
            Passion for Backend Development
          </h3>
          <div className="max-w-[600px] leading-relaxed font-light">
            I have a particular passion for backend technologies and enjoy
            solving complex problems related to server management, database
            optimization, and security.
          </div>
        </li>

        <li className="p-5 inline-block border-2 border-dashed border-gray-900 rounded-md hover:border-brand-primary transition-colors duration-300 ease-linear">
          <h3 className="mb-2 text-sm uppercase text-brand-primary font-bold">
            Microservices Expertise
          </h3>
          <div className="max-w-[600px] leading-relaxed font-light">
            I have developed several microservices that ensure efficient data
            handling, robust security, and seamless integration. My experience
            with microservices architecture allows me to design scalable and
            maintainable systems.
          </div>
        </li>

        <li className="p-5 inline-block border-2 border-dashed border-gray-900 rounded-md hover:border-brand-primary transition-colors duration-300 ease-linear">
          <h3 className="mb-2 text-sm uppercase text-brand-primary font-bold">
            Problem-Solving Skills
          </h3>
          <div className="max-w-[600px] leading-relaxed font-light">
            I thrive on challenges and enjoy finding innovative solutions to
            technical problems. My projects often involve optimizing performance
            and enhancing security, showcasing my ability to tackle complex
            issues effectively.
          </div>
        </li>

        <li className="p-5 inline-block border-2 border-dashed border-gray-900 rounded-md hover:border-brand-primary transition-colors duration-300 ease-linear">
          <h3 className="mb-2 text-sm uppercase text-brand-primary font-bold">
            Commitment to Quality
          </h3>
          <div className="max-w-[600px] leading-relaxed font-light">
            I adhere to best practices in software development, such as DRY
            (Don&apos;t Repeat Yourself) and KISS (Keep It Simple, Stupid). This
            ensures that my code is clean, efficient, and easy to maintain.
          </div>
        </li>

        <li className="p-5 inline-block border-2 border-dashed border-gray-900 rounded-md hover:border-brand-primary transition-colors duration-300 ease-linear">
          <h3 className="mb-2 text-sm uppercase text-brand-primary font-bold">
            Continuous Learning
          </h3>
          <div className="max-w-[600px] leading-relaxed font-light">
            I am always eager to learn and stay updated with the latest trends
            and technologies in the industry. This commitment to continuous
            improvement helps me deliver cutting-edge solutions.
          </div>
        </li>
      </ul>
    </section>
  );
});

AboutWhyHireMe.displayName = "About Why Hire Me";
