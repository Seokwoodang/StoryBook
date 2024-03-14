import { useEffect, useState } from "react";
import { ButtonTheme } from "../Button";

export interface ArrowProps {
  theme?: ButtonTheme;
  disabled?: boolean;
}

const ArrowLeft: React.FC<ArrowProps> = ({ theme, disabled }) => {
  const [arrowColor, setArrowColor] = useState<string>("#20315B");

  useEffect(function arrowColorPicker() {
    if (disabled) {
      setArrowColor("var(--icon_disabled");
    } else {
      if (theme === "primaryClear" || theme === "primaryOutline") {
        setArrowColor("var(--icon_primary)");
      } else if (
        theme === "primary" ||
        theme === "secondary" ||
        theme === "danger" ||
        theme === "inversedOutline"
      ) {
        setArrowColor("var(--icon_inversed)");
      } else {
        setArrowColor("var(--icon_danger)");
      }
    }
  }, []);

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_775_13829)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.05806 12.4419C8.81398 12.1979 8.81398 11.8021 9.05806 11.5581L14.0581 6.55806C14.3021 6.31398 14.6979 6.31398 14.9419 6.55806C15.186 6.80214 15.186 7.19786 14.9419 7.44194L10.3839 12L14.9419 16.5581C15.186 16.8021 15.186 17.1979 14.9419 17.4419C14.6979 17.686 14.3021 17.686 14.0581 17.4419L9.05806 12.4419Z"
          fill={arrowColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_775_13829">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(2 2)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowLeft;
