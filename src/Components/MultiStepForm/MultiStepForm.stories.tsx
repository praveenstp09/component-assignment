import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MultiStepForm from "./MultiStepForm";

const meta = {
  title: "Component/MultiStepForm",
  component: MultiStepForm,
//   parameters: {
//     layout: "centered",
//   },
  tags: ["autodocs"],
  args: {
    initialStep: 1,
    initialValues: {},
    storybookVariant: "empty", // 👈 default variant
  },
} satisfies Meta<typeof MultiStepForm>;

export default meta;

type Story = StoryObj<typeof meta>;

// 🟢 Step 1 - Empty Form
export const DefaultStep1: Story = {
  args: {
    initialStep: 1,
    initialValues: {},
    storybookVariant: "empty",
  },
};

// 🟢 Step 1 - Prefilled Form
export const PrefilledStep1: Story = {
  args: {
    initialStep: 1,
    initialValues: {
      firstName: "John",
      dob: "2000-05-10",
    },
    storybookVariant: "prefilled",
  },
};

// 🔴 Step 1 - With Errors
export const Step1WithErrors: Story = {
  args: {
    initialStep: 1,
    initialValues: {
      firstName: "",
      dob: "",
    },
    storybookVariant: "error",
  },
};

// 🟢 Step 2 - Prefilled Form
export const PrefilledStep2: Story = {
  args: {
    initialStep: 2,
    initialValues: {
      email: "jane@example.com",
      phone: "9876543210",
    },
    storybookVariant: "prefilled",
  },
};

// 🔴 Step 2 - With Errors
export const Step2WithErrors: Story = {
  args: {
    initialStep: 2,
    initialValues: {
      email: "",
      phone: "",
    },
    storybookVariant: "error",
  },
};

// 🟢 Step 3 - Fully Filled
export const CompletedStep3: Story = {
  args: {
    initialStep: 3,
    initialValues: {
      firstName: "Mark",
      dob: "1992-09-09",
      email: "mark@example.com",
      phone: "1234567890",
      message: "Hello, I'm Mark.",

    },
    storybookVariant: "prefilled",
  },
};

// 🔴 Step 3 - With Errors (missing message)
export const Step3WithError: Story = {
  args: {
    initialStep: 3,
    initialValues: {
      firstName: "Mark",
      dob: "1992-09-09",
      email: "mark@example.com",
      phone: "1234567890",
      message: "",
    },
    storybookVariant: "error",
  },
};
