import React, { useEffect, useState } from "react";

interface CheckBoldProps {
  disabled: boolean;
}

const CheckBold: React.FC<CheckBoldProps> = ({ disabled }) => {
  const [checkColor, setCheckColor] = useState<string>("var(--icon_inversed)");

  useEffect(
    function checkColorPicker() {
      if (!disabled) {
        setCheckColor("var(--icon_inversed)");
      } else {
        setCheckColor("var(--icon_disabled)");
      }
    },
    [disabled]
  );

  console.log(disabled);
  console.log(checkColor);

  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_878_14599)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.4622 6.2045C19.0229 5.76517 18.3106 5.76517 17.8712 6.2045L9.50004 14.5757L6.12887 11.2045C5.68953 10.7652 4.97722 10.7652 4.53788 11.2045C4.09854 11.6438 4.09854 12.3562 4.53788 12.7955L8.70455 16.9622C9.14389 17.4015 9.8562 17.4015 10.2955 16.9622L19.4622 7.7955C19.9015 7.35616 19.9015 6.64385 19.4622 6.2045Z"
          fill={checkColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_878_14599">
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

export default CheckBold;
