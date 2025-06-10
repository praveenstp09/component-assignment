import React from "react";
import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from "./Button";

const meta = {
  title: "Component/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Button",
  },
  argTypes: {
    variant: {
      options: [
        "primary",
        "secondary",
        "tertiary",
        "success",
        "info",
        "warning",
        "surface-border",
      ],
      control: { type: "radio" },
    },
  },
}satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Primary:Story={
    args:{
        variant:"primary",
        size:"small",
    }

}
export const Large:Story={
    args:{
        variant:"primary",
        size:"large",
    }
}
