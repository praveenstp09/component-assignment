import type { Meta, StoryObj } from "@storybook/react";
import AdvancedFileUpload from "./AdvancedFileDrop";

const meta: Meta<typeof AdvancedFileUpload> = {
  title: "Component/AdvancedFileUpload",
  component: AdvancedFileUpload,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AdvancedFileUpload>;

export const Empty: Story = {
  args: {},
};

