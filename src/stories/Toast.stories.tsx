import type { Meta, StoryObj } from "@storybook/react"
import ToastButton from "../components/ToastButton"
import { FaRocket } from "react-icons/fa"

const meta: Meta<typeof ToastButton> = {
  title: "Components/Toast",
  component: ToastButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["success", "error", "warning", "info", "loading", "custom"],
      description: "Type of toast notification",
    },
    message: {
      control: "text",
      description: "Message to display in the toast",
    },
    duration: {
      control: { type: "number", min: 0, step: 500 },
      description: "Duration in milliseconds before toast auto-dismisses (0 for no auto-dismiss)",
    },
    theme: {
      control: { type: "radio" },
      options: ["light", "dark"],
      description: "Theme of the toast",
    },
    position: {
      control: { type: "select" },
      options: ["top-right", "top-left", "bottom-right", "bottom-left", "top-center", "bottom-center"],
      description: "Position of the toast on the screen",
    },
    buttonText: {
      control: "text",
      description: "Text to display on the button",
    },
    onClose: { action: "closed" },
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-gray-100 min-h-[400px] relative">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ToastButton>

export const Success: Story = {
  args: {
    type: "success",
    message: "Operation completed successfully!",
    duration: 5000,
    theme: "light",
    position: "top-right",
    buttonText: "Show Success Toast",
  },
}

export const Error: Story = {
  args: {
    type: "error",
    message: "An error occurred. Please try again.",
    duration: 5000,
    theme: "light",
    position: "top-right",
    buttonText: "Show Error Toast",
  },
}

export const Warning: Story = {
  args: {
    type: "warning",
    message: "Warning: This action cannot be undone.",
    duration: 5000,
    theme: "light",
    position: "top-right",
    buttonText: "Show Warning Toast",
  },
}

export const Info: Story = {
  args: {
    type: "info",
    message: "The system will be under maintenance tonight.",
    duration: 5000,
    theme: "light",
    position: "top-right",
    buttonText: "Show Info Toast",
  },
}

export const Loading: Story = {
  args: {
    type: "loading",
    message: "Processing your request...",
    duration: 0, // No auto-dismiss for loading
    theme: "light",
    position: "top-right",
    buttonText: "Show Loading Toast",
  },
}

export const Custom: Story = {
  args: {
    type: "custom",
    message: "Your rocket is ready for launch!",
    duration: 5000,
    theme: "light",
    position: "top-right",
    icon: <FaRocket className="w-5 h-5" />,
    buttonText: "Launch Rocket",
  },
}

export const DarkTheme: Story = {
  args: {
    type: "success",
    message: "Dark theme toast notification",
    duration: 5000,
    theme: "dark",
    position: "top-right",
    buttonText: "Show Dark Theme Toast",
  },
}

export const BottomRight: Story = {
  args: {
    type: "info",
    message: "This toast appears in the bottom right",
    duration: 5000,
    theme: "light",
    position: "bottom-right",
    buttonText: "Show Bottom Right Toast",
  },
}

export const TopCenter: Story = {
  args: {
    type: "warning",
    message: "This toast appears at the top center",
    duration: 5000,
    theme: "light",
    position: "top-center",
    buttonText: "Show Top Center Toast",
  },
}

export const PersistentToast: Story = {
  args: {
    type: "error",
    message: "This toast will not auto-dismiss",
    duration: 0, // 0 means no auto-dismiss
    theme: "light",
    position: "top-right",
    buttonText: "Show Persistent Toast",
  },
}

export const LongDuration: Story = {
  args: {
    type: "success",
    message: "This toast has a 10-second duration with progress bar",
    duration: 10000,
    theme: "light",
    position: "top-right",
    buttonText: "Show Long Duration Toast",
  },
}

