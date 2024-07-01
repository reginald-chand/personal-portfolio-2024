import { ReactElement } from "react";
import { GlobalLayout } from "./components/layouts/_app";

export default function Home(): ReactElement {
  return (
    <GlobalLayout>
      <main className="w-full h-screen"></main>
    </GlobalLayout>
  );
}
