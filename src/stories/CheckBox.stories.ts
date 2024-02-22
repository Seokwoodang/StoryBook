import { Meta, StoryObj } from "@storybook/react";
import CheckBox from "../components/CheckBox";
import { expect, within } from "@storybook/test";

const meta = {
  title: "component/checkbox",
  component: CheckBox,
  args: {
    checked: false,
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    checked: false,
  },

  //   args: {
  // checked: true,
  //   },
};

export const Checked: Story = {};
