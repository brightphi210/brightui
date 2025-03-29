import type { Meta, StoryObj } from "@storybook/react"
import Rating from "../components/Rating"

const meta: Meta<typeof Rating> = {
  title: "Components/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: { type: "number", min: 0, max: 5, step: 0.5 },
      description: "Current rating value",
    },
    max: {
      control: { type: "number", min: 1, max: 10, step: 1 },
      description: "Maximum number of stars",
    },
    readOnly: {
      control: "boolean",
      description: "Whether the rating can be changed",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the rating stars",
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
      description: "Color theme of the rating stars",
    },
    onChange: { action: "changed" },
  },
}

export default meta
type Story = StoryObj<typeof Rating>

export const Default: Story = {
  args: {
    value: 3,
    max: 5,
    readOnly: false,
    size: "md",
  },
}

export const ReadOnly: Story = {
  args: {
    value: 4,
    max: 5,
    readOnly: true,
    size: "md",
  },
}

export const Small: Story = {
  args: {
    value: 3,
    max: 5,
    readOnly: false,
    size: "sm",
  },
}

export const Large: Story = {
  args: {
    value: 3,
    max: 5,
    readOnly: false,
    size: "lg",
  },
}

export const CustomMax: Story = {
  args: {
    value: 7,
    max: 10,
    readOnly: false,
    size: "md",
  },
}

export const Empty: Story = {
  args: {
    value: 0,
    max: 5,
    readOnly: false,
    size: "md",
  },
}

export const Primary: Story = {
  args: {
    value: 3,
    max: 5,
    readOnly: false,
    size: "md",
    color: "primary",
  },
}

export const Secondary: Story = {
  args: {
    value: 3,
    max: 5,
    readOnly: false,
    size: "md",
    color: "secondary",
  },
}

export const Success: Story = {
  args: {
    value: 3,
    max: 5,
    readOnly: false,
    size: "md",
    color: "success",
  },
}

export const Warning: Story = {
  args: {
    value: 3,
    max: 5,
    readOnly: false,
    size: "md",
    color: "warning",
  },
}

export const Danger: Story = {
  args: {
    value: 3,
    max: 5,
    readOnly: false,
    size: "md",
    color: "danger",
  },
}

