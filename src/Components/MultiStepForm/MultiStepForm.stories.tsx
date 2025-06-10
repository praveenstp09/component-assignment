import type { Meta, StoryObj } from "@storybook/react";
import MultiStepForm from "./MultiStepForm";

const meta = {
  title: "Component/MultiStepForm",
  component: MultiStepForm,

  tags: ["autodocs"],
  args: {
    initialStep: 1,
    initialValues: {},
    storybookVariant: "empty", 
  },
} satisfies Meta<typeof MultiStepForm>;

export default meta;

type Story = StoryObj<typeof meta>;


export const DefaultStep1: Story = {
  args: {
    initialStep: 1,
    initialValues: {},
    storybookVariant: "empty",
  },
};

export const PrefilledStep1: Story = {
  args: {
    initialStep: 1,
    initialValues: {
      firstName: "Akash",
      dob: "2003-01-01",
    },
    storybookVariant: "prefilled",
  },
};

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


export const CompletedStep3: Story = {
  args: {
    initialStep: 3,
    initialValues: {
      firstName: "qwert",
      dob: "2003-01-01",
      email: "qwert@example.com",
      phone: "987654321",
      message: "Hello, I'm ....",

    },
    storybookVariant: "prefilled",
  },
};

export const Step3WithError: Story = {
  args: {
    initialStep: 3,
    initialValues: {
      firstName: "qwert",
      dob: "2003-01-01",
      email: "qwert@example.com",
      phone: "1234567890",
      message: "",
    },
    storybookVariant: "error",
  },
};
