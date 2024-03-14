import React from "react";
import styled, { css } from "styled-components";
import typography, { StyleOptionProps } from "./Foundation/Typography";
import "./font.css";
import Spinner_primary from "./Icons/spinner_primary";
import ArrowRight from "./Icons/chevron-right";
import ArrowLeft from "./Icons/chevron-left";

type ButtonSize = "small" | "medium" | "large";
export type ButtonTheme =
  | "primary"
  | "primary_outline"
  | "primary_clear"
  | "secondary"
  | "danger_outline"
  | "inversed_outline"
  | "danger";

type ButtonShape = "rectangular" | "oval";

interface ButtonProps {
  theme?: ButtonTheme;
  size?: ButtonSize;
  shape?: ButtonShape;
  loading?: boolean;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  theme,
  size,
  shape,
  label,
  loading,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <StButton
      type="button"
      {...props}
      theme={theme}
      size={size}
      shape={shape}
      label=""
      disabled={disabled}
    >
      {loading ? (
        <Spinner_primary theme={theme} />
      ) : (
        <>
          <ArrowLeft theme={theme} disabled={disabled} />
          {label}
          <ArrowRight theme={theme} disabled={disabled} />
        </>
      )}
    </StButton>
  );
};

const buttonThemes: StyleOptionProps = {
  primary: css`
    background-color: var(--bg_interactive_primary);
    color: var(--text_interactive_inversed);
    &:hover {
      background-color: var(--bg_interactive_primary_hover);
    }
    &:active {
      background-color: var(--bg_interactive_primary_actived);
    }
    &:focus {
      background-color: var(--bg_interactive_primary_hover);
    }
    &:disabled {
      background-color: var(--bg_interactive_disabled);
      color: var(--text_danger_disabled);
    }
  `,
  primary_outline: css`
    border: 1px solid var(--border_interactive_primary);
    background-color: transparent;
    color: var(--text_interactive_primary);
    &:hover {
      background-color: var(--bg_interactive_tertiary_hover);
    }
    &:active {
      background-color: var(--bg_interactive_tertiary_actived);
    }
    &:disabled {
      color: var(--text_danger_disabled);
    }
  `,
  primary_clear: css`
    background-color: transparent;
    color: var(--text_interactive_primary);
    &:hover {
      background-color: var(--bg_interactive_tertiary_hover);
    }
    &:active {
      background-color: var(--bg_interactive_tertiary_actived);
    }
    &:disabled {
      background-color: var(--bg_interactive_disabled);
      color: var(--text_danger_disabled);
    }
  `,
  secondary: css`
    color: var(--text_interactive_inversed);
    background-color: var(--bg_interactive_secondary);
    &:hover {
      background-color: var(--bg_interactive_secondary_hover);
    }
    &:active {
      background-color: var(--bg_interactive_secondary_actived);
    }
    &:disabled {
      background-color: var(--bg_interactive_disabled);
      color: var(--text_danger_disabled);
    }
  `,
  danger: css`
    background-color: #c83b38;
    color: var(--text_interactive_inversed);
    &:hover {
      background-color: var(--bg_interactive_delete_hover);
    }
    &:active {
      background-color: var(--bg_interactive_delete_actived);
    }
    &:disabled {
      background-color: var(--bg_interactive_disabled);
      color: var(--text_danger_disabled);
    }
  `,
  danger_outline: css`
    color: var(--text_danger);
    background-color: transparent;
    border: 1px solid var(--border_interactive_delete);
    &:hover {
      background-color: var(--bg_interactive_delete_subtle);
    }
    &:active {
      background-color: var(--bg_interactive_delete_hover_subtle);
    }
    &:disabled {
      color: var(--text_danger_disabled);
    }
  `,
  inversed_outline: css`
    background-color: transparent;
    color: var(--text_interactive_inversed);
    &:hover {
      background-color: var(--bg_interactive_inversed_hover);
    }
    &:active {
      background-color: var(--bg_interactive_inversed_actived);
    }
    &:disabled {
      color: var(--text_danger_disabled);
    }
  `,
};

const buttonSizes: StyleOptionProps = {
  large: css`
    min-width: 148px;
    min-height: 50px;
    padding: 8px 16px;
    ${typography.heading_desktop_sm}
  `,
  medium: css`
    min-width: 129px;
    min-height: 40px;
    padding: 8px 12px;
    ${typography.body_lg_medium}
  `,
  small: css`
    min-width: 123px;
    min-height: 36px;
    padding: 2px 12px;
    ${typography.body_md_medium}
  `,
};

const StButton = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: ${(props) =>
    props.shape === "rectangular" ? "4px" : "999px"};
  width: min-content;
  cursor: pointer;
  line-height: 1;
  ${({ theme }) => buttonThemes[theme]};
  ${({ size }) => (size ? buttonSizes[size] : buttonSizes["large"])};
  &:focus {
    outline: 2px solid var(--border_focusing);
    outline-offset: 1px;
  }
`;
