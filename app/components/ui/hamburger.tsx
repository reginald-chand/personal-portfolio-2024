import { ReactElement, ReactNode, memo } from "react";
import { propValidator } from "../utils/error/prop-validation";
import { BarsArrowUpIcon } from "@heroicons/react/24/outline";

type Props = {
  hamburgerIcon?: ReactNode;
  hamburgerFunction: () => void;
  hamburgerAccessibilityText: string;
};

export const Hamburger = memo(
  ({
    hamburgerIcon,
    hamburgerFunction,
    hamburgerAccessibilityText,
  }: Props): ReactElement => {
    propValidator({ prop: hamburgerFunction, propName: "hamburgerFunction" });
    propValidator({
      prop: hamburgerAccessibilityText,
      propName: "hamburgerAccessibilityText",
    });

    return (
      <button
        type="button"
        title={hamburgerAccessibilityText}
        aria-label={hamburgerAccessibilityText}
        onClick={hamburgerFunction}
        className="w-12 h-12 flex lg:hidden items-center justify-center border-2 border-gray-900 border-dashed rounded-full hover:border-brand-primary transition-colors duration-300 ease-linear group"
      >
        <div className="w-6 h-6 animate-pulse group-hover:animate-none">
          {hamburgerIcon || <BarsArrowUpIcon />}
        </div>
      </button>
    );
  }
);

Hamburger.displayName = "Hamburger";
