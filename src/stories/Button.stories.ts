import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    theme: "primary",
    label: "Primary",
  },
};

export const PrimaryOutline: Story = {
  args: {
    theme: "primaryOutline",
    label: "PrimaryOutline",
  },
};

export const PrimaryClear: Story = {
  args: {
    theme: "primaryClear",
    label: "PrimaryClear",
  },
};

export const Secondary: Story = {
  args: {
    theme: "secondary",
    label: "Secondary",
  },
};

export const Danger: Story = {
  args: {
    theme: "danger",
    label: "Danger",
  },
};

export const DangerOutline: Story = {
  args: {
    theme: "dangerOutline",
    label: "DangerOutline",
  },
};

export const InversedOutline: Story = {
  args: {
    theme: "inversedOutline",
    label: "InversedOutline",
  },
};
