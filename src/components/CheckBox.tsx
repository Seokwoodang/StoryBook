import React, { useState } from "react";
import styled from "styled-components";
// import CheckBoxPartial from "../img/CheckBoxPartial";
import CheckBoxSelected from "../img/CheckBoxSelected";
import { CheckBoxProps } from "../interfaces/ComponentInterface";

const CheckBox: React.FC<CheckBoxProps> = ({ onClick, checked }) => {
  return (
    <StCheckBox
      onClick={() => {
        // setChecked(!checked);
        onClick();
      }}
    >
      {checked ? (
        <CheckBoxSelected
          width={16}
          height={16}
          backgroundColor="#2276DC"
          itemColor="white"
        />
      ) : (
        <div className="checkBoxEmpty" />
      )}
    </StCheckBox>
  );
};

const StCheckBox = styled.div`
  width: 16px;
  height: 16px;
  cursor: pointer;
  .checkBoxEmpty {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    border: 2px solid #d7d7d7;
    box-sizing: border-box;
  }
`;

export default CheckBox;
