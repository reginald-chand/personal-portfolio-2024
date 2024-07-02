import { ReactElement, memo } from "react";
import { propValidator } from "../utils/error/prop-validation";
import Link from "next/link";

export const Logo = memo(
  ({
    brandName,
    brandSlogan,
  }: {
    brandName: string;
    brandSlogan: string;
  }): ReactElement => {
    propValidator({ prop: brandName, propName: "brandName" });
    propValidator({ prop: brandSlogan, propName: "brandSlogan" });

    return (
      <Link href="#" title="Home" className="group">
        <div className="lg:text-xl font-black uppercase text-brand-primary group-hover:text-gray-50 group-hover:underline transition-colors duration-300 ease-linear">
          {brandName}
        </div>

        <div className="text-[0.7rem] lg:text-sm font-extralight italic group-hover:text-brand-primary transition-colors duration-300 ease-linear">
          {brandSlogan}
          <span className="animate-pulse">&nbsp;&lt;&#47;&gt;</span>
        </div>
      </Link>
    );
  }
);

Logo.displayName = "Logo";
