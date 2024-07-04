import { ReactElement } from "react";

export const ProjectsSearch = ({
  handleSearchPrompt,
}: {
  handleSearchPrompt: (event: any) => void;
}): ReactElement => {
  return (
    <div className="md:col-span-2 border-2 border-dashed border-gray-900 rounded-md">
      <input
        type="text"
        name="projectSearch"
        id="projectSearch"
        title="Search Projects"
        placeholder="Search Projects"
        onChange={handleSearchPrompt}
        className="w-full h-full p-5 outline-2 outline-dashed outline-transparent rounded-md bg-transparent hover:outline-brand-primary focus:outline-blue-800 transition-all duration-300 ease-linear"
      />
    </div>
  );
};
