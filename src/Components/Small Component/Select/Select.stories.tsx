import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Select from "./Select";

const options = ["Male", "Female", "Other"];

const meta: Meta<typeof Select> = {
  title: "Component/Select",
  component: Select,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    label: "Select Gender",
    name: "gender",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WithPlaceholder: Story = {
  args: {},
  render: (args) => {
    const [value, setValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(e.target.value);
    };

    return (
      <Select
        {...args}
        value={value}
        onChange={handleChange}
        placeholder="Choose gender"
        options={options}
      />
    );
  },
};

export const WithDefaultValue: Story = {
  args: {},
  render: (args) => {
    const [value, setValue] = useState("Female");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(e.target.value);
    };

    return (
      <Select
        {...args}
        value={value}
        onChange={handleChange}
        options={options}
      />
    );
  },
};
