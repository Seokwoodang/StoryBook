import React from "react";
// import "./button.css";
import styled, { css } from "styled-components";
import typography, { StyleOptionProps } from "./Foundation/Typography";
import "./font.css";

type ButtonSize = "small" | "medium" | "large";
type ButtonTheme =
  | "primary"
  | "primary_outline"
  | "primary_clear"
  | "secondary"
  | "danger_outline"
  | "inversed_outline"
  | "danger";

interface ButtonProps {
  theme?: ButtonTheme;
  backgroundColor?: string;
  size?: ButtonSize;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  theme,
  size,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <StButton
      type="button"
      {...props}
      theme={theme}
      size={size}
      backgroundColor={backgroundColor}
      label=""
    >
      {label}
    </StButton>
  );
};

const buttonThemes: StyleOptionProps = {
  primary: css`
    background-color: var(--bg_interactive_primary);
    color: var(--text_interactive_inversed);
  `,
  primary_outline: css`
    border: 1px solid var(--border_interactive_primary);
    color: var(--text_interactive_primary);
  `,
  primary_clear: css`
    color: var(--text_interactive_primary);
  `,
  secondary: css`
    color: #333;
    background-color: var(--bg_interactive_secondary);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  `,
  danger: css`
    background-color: #c83b38;
    color: var(--text_interactive_inversed);
  `,
  danger_outline: css`
    color: var(--text_danger);
  `,
};

const buttonSizes: StyleOptionProps = {
  large: css`
    width: 148px;
    height: 50px;
    padding: 8px 16px;
    ${typography.heading_desktop_sm}
  `,
  medium: css`
    width: 129px;
    height: 40px;
    padding: 8px 12px;
    ${typography.body_lg_medium}
  `,
  small: css`
    width: 123px;
    height: 36px;
    padding: 2px 12px;
    ${typography.body_md_medium}
  `,
};

const StButton = styled.button<ButtonProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  ${({ theme }) => buttonThemes[theme]};
  ${({ size }) => (size ? buttonSizes[size] : buttonSizes["large"])};
`;
