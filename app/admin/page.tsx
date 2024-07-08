import { ReactElement } from "react";
import { GlobalLayout } from "../components/layouts/_app";

export default function Admin(): ReactElement {
  return (
    <GlobalLayout>
      <main className="w-full 2xl:max-w-[1920px] 2xl:mx-auto">
        <h1 className="m-5 p-5 border-2 border-dashed border-gray-900 rounded-md">
          Coming Soon
        </h1>
      </main>
    </GlobalLayout>
  );
}
