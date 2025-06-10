import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "./Input";

const meta = {
  title: "Component/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    placeholder: "Place Holder",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    value: "",
    label: "Text",
    type: "text",
    name: "",
  },
};

export const Email: Story = {
  args: {
    label: "Email",
    type: "email",
  },
};

export const Date: Story = {
  args: {
    label: "Date",
    type: "date",
  },
};


// New story showing required error indicator
export const TextWithRequired: Story = {
  args: {
    label: "First Name",
    type: "text",
    showRequired: true,  // this will show the * (required) next to label
  },
};

// New File input story
export const FileInput: Story = {
  args: {
    label: "Upload File",
    type: "file",
    name: "fileUpload",
  },
};

// New story with additional CSS classes applied
export const WithAdditionalClasses: Story = {
  args: {
    label: "Styled Input",
    type: "text",
    inputClassName: "my-custom-class another-class",  // Make sure Input accepts this prop
  },
};