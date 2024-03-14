import { useEffect, useState } from "react";
import styled from "styled-components";
import { ButtonTheme } from "../Button";

interface spinnerProps {
  theme?: ButtonTheme;
}

const Spinner_primary: React.FC<spinnerProps> = ({ theme }) => {
  const [spinnerColor, setSpinnerColor] = useState<string>("#20315B");

  useEffect(function spinnerColorPicker() {
    if (theme === "primaryClear" || theme === "primaryOutline") {
      setSpinnerColor("var(--icon_primary)");
    } else if (
      theme === "primary" ||
      theme === "secondary" ||
      theme === "danger" ||
      theme === "inversedOutline"
    ) {
      setSpinnerColor("var(--icon_inversed)");
    } else {
      setSpinnerColor("var(--icon_danger)");
    }
  }, []);

  return (
    <StSpinner>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_597_21496)">
          <path
            d="M9 0.9C9 0.402944 9.40395 -0.00466489 9.89852 0.0449556C11.4794 0.203569 12.996 0.778667 14.2901 1.71885C15.8277 2.836 16.9722 4.41126 17.5595 6.21885C18.1468 8.02644 18.1468 9.97356 17.5595 11.7812C17.0652 13.3024 16.1763 14.6591 14.9906 15.7166C14.6196 16.0475 14.0532 15.9552 13.7611 15.553C13.4689 15.1509 13.5627 14.5919 13.9253 14.2518C14.8075 13.4244 15.4709 12.3844 15.8476 11.2249C16.3175 9.77885 16.3175 8.22115 15.8476 6.77508C15.3777 5.32901 14.4622 4.0688 13.2321 3.17508C12.2457 2.45846 11.0978 2.00697 9.89769 1.85617C9.40451 1.7942 9 1.39706 9 0.9Z"
            fill={spinnerColor}
          />
        </g>
        <defs>
          <clipPath id="clip0_597_21496">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </StSpinner>
  );
};

const StSpinner = styled.div`
  display: flex;
  width: 18px;
  height: 18px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner_primary;
