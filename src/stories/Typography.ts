import { css } from "styled-components";

export interface StyleOptionProps {
  [key: string]: any;
}

type TypographyKeys =
  | "heading_desktop_4xl"
  | "heading_desktop_3xl"
  | "heading_desktop_2xl"
  | "heading_desktop_1xl"
  | "heading_desktop_lg"
  | "heading_desktop_md"
  | "heading_desktop_sm"
  | "body_lg_semibold"
  | "body_lg_medium"
  | "body_lg_regular"
  | "body_lg_underline"
  | "body_lg_italic"
  | "body_md_semibold"
  | "body_md_medium"
  | "body_md_regular"
  | "body_md_underline"
  | "body_md_italic"
  | "body_sm_semibold"
  | "body_sm_medium"
  | "body_sm_regular"
  | "body_sm_underline"
  | "body_sm_italic"
  | "body_xsm_semibold"
  | "body_xsm_medium"
  | "body_xsm_regular"
  | "body_xsm_underline"
  | "body_xsm_italic"
  | "heading_mobile_4xl"
  | "heading_mobile_3xl"
  | "heading_mobile_2xl"
  | "heading_mobile_1xl"
  | "heading_mobile_lg";

const typography: Record<TypographyKeys, ReturnType<typeof css>> = {
  heading_desktop_4xl: css`
    font-size: 48px;
    font-family: "bold";
    line-height: 140%;
  `,
  heading_desktop_3xl: css`
    font-size: 40px;
    font-family: "bold";
    line-height: 140%;
  `,
  heading_desktop_2xl: css`
    font-size: 32px;
    font-family: "semibold";
    line-height: 140%;
  `,
  heading_desktop_1xl: css`
    font-size: 28px;
    font-family: "semibold";
    line-height: 140%;
  `,
  heading_desktop_lg: css`
    font-size: 24px;
    font-family: "semibold";
    line-height: 140%;
  `,
  heading_desktop_md: css`
    font-size: 20px;
    font-family: "semibold";
    line-height: 140%;
  `,
  heading_desktop_sm: css`
    font-size: 18px;
    font-family: "semibold";
    line-height: 140%;
  `,
  body_lg_semibold: css`
    font-size: 16px;
    font-family: "semibold";
    line-height: 150%;
  `,
  body_lg_medium: css`
    font-size: 16px;
    font-family: "medium";
    line-height: 150%;
  `,
  body_lg_regular: css`
    font-size: 16px;
    font-family: "regular";
    line-height: 150%;
  `,
  body_lg_underline: css`
    font-size: 16px;
    font-family: "regular";
    line-height: 150%;
    text-decoration: underline;
  `,
  body_lg_italic: css`
    font-size: 16px;
    font-family: "light";
    font-style: italic;
    line-height: 150%;
  `,
  body_md_semibold: css`
    font-size: 14px;
    font-family: "semibold";
    line-height: 150%;
  `,
  body_md_medium: css`
    font-size: 14px;
    font-family: "medium";
    line-height: 150%;
  `,
  body_md_regular: css`
    font-size: 14px;
    font-family: "regular";
    line-height: 150%;
  `,
  body_md_underline: css`
    font-size: 14px;
    font-family: "regular";
    line-height: 150%;
    text-decoration: underline;
  `,
  body_md_italic: css`
    font-size: 14px;
    font-family: "light";
    font-style: italic;
    line-height: 150%;
  `,
  body_sm_semibold: css`
    font-size: 12px;
    font-family: "semibold";
    line-height: 160%;
  `,
  body_sm_medium: css`
    font-size: 12px;
    font-family: "medium";
    line-height: 160%;
  `,
  body_sm_regular: css`
    font-size: 12px;
    font-family: "regular";
    line-height: 160%;
  `,
  body_sm_underline: css`
    font-size: 12px;
    font-family: "regular";
    line-height: 160%;
    text-decoration: underline;
  `,
  body_sm_italic: css`
    font-size: 12px;
    font-family: "light";
    font-style: italic;
    line-height: 160%;
  `,
  body_xsm_semibold: css`
    font-size: 10px;
    font-family: "semibold";
    line-height: 160%;
  `,
  body_xsm_medium: css`
    font-size: 10px;
    font-family: "medium";
    line-height: 160%;
  `,
  body_xsm_regular: css`
    font-size: 10px;
    font-family: "regular";
    line-height: 160%;
  `,
  body_xsm_underline: css`
    font-size: 10px;
    font-family: "regular";
    line-height: 160%;
    text-decoration: underline;
  `,
  body_xsm_italic: css`
    font-size: 10px;
    font-family: "light";
    font-style: italic;
    line-height: 160%;
  `,
  heading_mobile_4xl: css`
    font-size: 40px;
    font-family: "bold";
    line-height: 140%;
  `,
  heading_mobile_3xl: css`
    font-size: 32px;
    font-family: "bold";
    line-height: 140%;
  `,
  heading_mobile_2xl: css`
    font-size: 28px;
    font-family: "semibold";
    line-height: 140%;
  `,
  heading_mobile_1xl: css`
    font-size: 24px;
    font-family: "semibold";
    line-height: 140%;
  `,
  heading_mobile_lg: css`
    font-size: 20px;
    font-family: "semibold";
    line-height: 140%;
  `,
};

export default typography;
