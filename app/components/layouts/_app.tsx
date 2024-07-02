import { ReactElement, ReactNode } from "react";
import { Footer } from "../ui/footer";

export const GlobalLayout = ({
  children,
}: Readonly<{ children: ReactNode }>): ReactElement => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};
