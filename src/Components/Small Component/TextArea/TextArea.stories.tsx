import type { Meta, StoryObj } from '@storybook/react-vite';
import TextArea from "./TextArea";


const meta = {
  title: "Component/TextArea",
  component: TextArea,
    parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args:{
    name:'name',
    value:'value',
    label:"TextArea",
    showRequired: false,
  }
}satisfies Meta<typeof TextArea>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Small:Story={
    args:{
        size:4,
    }
}
export const Medium:Story={
    args:{
        size:6,
    }
}
export const Large:Story={
    args:{
        size:10,
    }
}
export const Error: Story = {
  args: {
    size: 4,
    showRequired: true,  // assuming your TextArea accepts this prop to show error
    label: "Message",
  },
};