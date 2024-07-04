import { useMemo } from "react";

export const useProjectList = ({
  searchPrompt,
  projectList,
}: {
  searchPrompt: string | undefined;
  projectList: Readonly<Array<object | any>>;
}) => {
  const newProjectList = useMemo(() => {
    if (searchPrompt && projectList) {
      return projectList.filter((project) =>
        project.title.toLowerCase().includes(searchPrompt.toLowerCase())
      );
    }

    return projectList;
  }, [projectList, searchPrompt]);

  return [newProjectList];
};
