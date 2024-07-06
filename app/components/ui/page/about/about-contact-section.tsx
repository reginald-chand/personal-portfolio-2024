import Link from "next/link";
import { ReactElement, memo } from "react";

export const AboutContactSection = memo((): ReactElement => {
  return (
    <section className="w-full p-5">
      <div className="p-5 border-2 border-dashed border-gray-900 rounded-md hover:border-brand-primary transition-colors duration-300 ease-linear">
        <h2 className="mb-2 text-2xl">My Contact Information</h2>

        <div>
          <div>
            <strong>Name:&nbsp;</strong>
            <em>Reginald Sahil Chand</em>
          </div>

          <div>
            <strong>Email:&nbsp;</strong>
            <em>
              <Link
                href="mailto:reginald-chand@outlook.com"
                className="hover:underline"
              >
                reginald-chand@outlook.com
              </Link>
            </em>
          </div>

          <div>
            <strong>Phone:&nbsp;</strong>
            <em>
              <Link href="tel:+6799334253" className="hover:underline">
                +(679) 933 4253
              </Link>
            </em>
          </div>

          <div>
            <strong>City:&nbsp;</strong>
            <em>Suva</em>
          </div>

          <div>
            <strong>Country:&nbsp;</strong>
            <em>Fiji Islands</em>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutContactSection.displayName = "About Contact Section";
