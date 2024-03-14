import { useEffect, useState } from "react";
import { ButtonTheme } from "../Button";

export interface ArrowProps {
  theme?: ButtonTheme;
  disabled?: boolean;
}

const ArrowRight: React.FC<ArrowProps> = ({ theme, disabled }) => {
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
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.9419 11.5581C15.186 11.8021 15.186 12.1979 14.9419 12.4419L9.94194 17.4419C9.69786 17.686 9.30214 17.686 9.05806 17.4419C8.81398 17.1979 8.81398 16.8021 9.05806 16.5581L13.6161 12L9.05806 7.44194C8.81398 7.19786 8.81398 6.80214 9.05806 6.55806C9.30214 6.31398 9.69786 6.31398 9.94194 6.55806L14.9419 11.5581Z"
        fill={arrowColor}
      />
    </svg>
  );
};

export default ArrowRight;
