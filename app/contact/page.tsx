import { ReactElement } from "react";
import { GlobalLayout } from "../components/layouts/_app";
import { ContactSection } from "../components/ui/page/contact/contact-section";

export default function Contact(): ReactElement {
  return (
    <GlobalLayout>
      <main className="w-full 2xl:max-w-[1920px] 2xl:mx-auto min-h-screen">
        <ContactSection />
      </main>
    </GlobalLayout>
  );
}
