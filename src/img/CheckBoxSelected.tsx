import { CheckBoxImgProps } from "../interfaces/ComponentInterface";

const CheckBoxSelected: React.FC<CheckBoxImgProps> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_600_25102)">
        <path
          d="M0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2Z"
          fill={props.backgroundColor}
        />
        <g clip-path="url(#clip1_600_25102)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.9746 4.13666C12.6817 3.84377 12.2069 3.84377 11.914 4.13666L6.3332 9.71744L4.08575 7.47C3.79286 7.1771 3.31798 7.1771 3.02509 7.47C2.7322 7.76289 2.7322 8.23776 3.02509 8.53066L5.80287 11.3084C6.09576 11.6013 6.57063 11.6013 6.86353 11.3084L12.9746 5.19732C13.2675 4.90443 13.2675 4.42956 12.9746 4.13666Z"
            fill={props.itemColor}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_600_25102">
          <path
            d="M0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2Z"
            fill="white"
          />
        </clipPath>
        <clipPath id="clip1_600_25102">
          <rect
            width="13.3333"
            height="13.3333"
            fill="white"
            transform="translate(1.33325 1.3335)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckBoxSelected;
