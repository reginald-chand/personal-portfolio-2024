import { ReactElement, ReactNode } from "react";
import { Footer } from "../ui/footer";
import { Header } from "../ui/header";

export const GlobalLayout = ({
  children,
}: Readonly<{ children: ReactNode }>): ReactElement => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
