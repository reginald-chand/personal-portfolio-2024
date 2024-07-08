import { ReactElement, ReactNode } from "react";
import { Footer } from "../ui/footer";
import { Header } from "../ui/header";
import NextTopLoader from "nextjs-toploader";
import { Scene } from "./scene";

export const GlobalLayout = ({
  children,
}: Readonly<{ children: ReactNode }>): ReactElement => {
  return (
    <>
      <Scene />
      <Header />
      <NextTopLoader color="#3b82f6" />
      {children}
      <Footer />
    </>
  );
};
