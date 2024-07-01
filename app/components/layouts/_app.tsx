import { ReactElement, ReactNode } from "react";

export const GlobalLayout = ({
  children,
}: Readonly<{ children: ReactNode }>): ReactElement => {
  return <>{children}</>;
};
