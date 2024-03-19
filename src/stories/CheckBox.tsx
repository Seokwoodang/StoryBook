import React from "react";
import styled, { css } from "styled-components";
import CheckIcon from "./Icons/check_bold";
import { StyleOptionProps } from "./Foundation/Typography";

type CheckBoxTheme = "primary" | "danger";

interface CheckBoxProps {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  theme: CheckBoxTheme;
  disabled: boolean;
}

interface CustomCheckBoxProps {
  theme: CheckBoxTheme;
  checked: boolean;
  disabled: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  checked,
  setChecked,
  disabled,
  theme,
}) => {
  return (
    <StCustomCheckBox
      theme={theme}
      checked={checked}
      disabled={disabled}
      onClick={() => {
        if (!disabled) {
          setChecked(!checked);
        }
      }}
    >
      {checked && <CheckIcon disabled={disabled} />}
    </StCustomCheckBox>
  );
};

const checkboxThemes: StyleOptionProps = {
  primary: css<CheckBoxProps>`
    background-color: ${(props) =>
      props.checked
        ? "var(--bg_interactive_primary)"
        : "var(--bg_interactive_tertiary)"};
    border: 1.5px solid
      ${(props) =>
        props.checked ? "none" : "var(--border_interactive_secondary)"};
    &:hover {
      background-color: ${(props) =>
        !props.disabled
          ? props.checked
            ? "var(--bg_interactive_primary_hover)"
            : "var(--bg_interactive_tertiary_hover)"
          : ""};
      border: ${(props) =>
        props.checked
          ? "none"
          : "1.5px solid var(--border_interactive_secondary_hover)"};
    }
    &:active {
      background-color: ${(props) =>
        props.checked
          ? "var(--bg_interactive_primary_actived)"
          : "var(--bg_interactive_tertiary_actived)"};
      border: ${(props) =>
        props.checked
          ? "none"
          : "1.5px solid var(--border_interactive_secondary_actived)"};
    }
  `,
  danger: css<CheckBoxProps>`
    background-color: ${(props) =>
      props.checked
        ? "var(--bg_interactive_delete)"
        : "var(--bg_interactive_tertiary)"};
    border: 1.5px solid
      ${(props) =>
        props.checked ? "none" : "var(--border_interactive_delete)"};
    &:hover {
      background-color: ${(props) =>
        props.checked
          ? "var(--bg_interactive_delete_hover)"
          : "var(--bg_interactive_tertiary_hover)"};
      border: ${(props) =>
        props.checked
          ? "none"
          : "1.5px solid var(--border_interactive_delete_hover)"};
    }
    &:active {
      background-color: ${(props) =>
        props.checked
          ? "var(--bg_interactive_delete_actived)"
          : "var(--bg_interactive_tertiary_actived)"};
      border: ${(props) =>
        props.checked
          ? "none"
          : "1.5px solid var(--border_interactive_delete_actived)"};
    }
  `,
  disabled: css<CheckBoxProps>`
    border: 1.5px solid var(--border_disabled);
    background-color: var(--bg_interactive_disabled);
    cursor: default;
  `,
};

const StCustomCheckBox = styled.div<CustomCheckBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border-radius: 2px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  ${({ theme }) => checkboxThemes[theme]};
  &:focus {
    outline: 2px solid var(--border_focusing);
    outline-offset: 1px;
    border: ${(props) =>
      props.checked ? "none" : "1px solid var(--border_secondary)"};
  }
`;

export default CheckBox;
