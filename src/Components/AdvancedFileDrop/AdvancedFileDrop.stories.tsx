import React from "react";
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

export const WithFiles: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    // Simulate files added - we can't programmatically add files easily without input events
    // But you can modify component to accept initial files prop for this story if you want
  },
};
