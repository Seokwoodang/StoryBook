import { CheckBoxImgProps } from "../interfaces/ComponentInterface";

const CheckBoxPartial: React.FC<CheckBoxImgProps> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_600_25104)">
        <path
          d="M0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2Z"
          fill={props.backgroundColor}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.11108 7.25C3.69687 7.25 3.36108 7.58579 3.36108 8C3.36108 8.41421 3.69687 8.75 4.11108 8.75H11.8889C12.3031 8.75 12.6389 8.41421 12.6389 8C12.6389 7.58579 12.3031 7.25 11.8889 7.25H4.11108Z"
          fill={props.itemColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_600_25104">
          <path
            d="M0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckBoxPartial;
