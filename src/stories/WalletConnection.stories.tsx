import type React from "react"
import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import WalletConnection from "../components/WalletConnection"

const meta: Meta<typeof WalletConnection> = {
  title: "Components/WalletConnection",
  component: WalletConnection,
  argTypes: {
    onConnect: { action: "onConnect" },
    onDisconnect: { action: "onDisconnect" },
    theme: {
      control: "select",
      options: ["light", "dark"],
    },
    accentColor: {
      control: "select",
      options: ["indigo", "blue", "green", "red", "purple"],
    },
  },
}

export default meta

type Story = StoryObj<typeof WalletConnection>

const ModalWrapper: React.FC<Partial<React.ComponentProps<typeof WalletConnection>>> = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  const mockOnConnect = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
  }

  return (
    <div className="p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Open Wallet Connection Modal
      </button>
      <WalletConnection
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConnect={mockOnConnect}
        onDisconnect={() => {}}
        {...args}
      />
    </div>
  )
}

export const Default: Story = {
  render: (args) => <ModalWrapper {...args} />,
}

export const DarkTheme: Story = {
  render: (args) => <ModalWrapper {...args} theme="dark" />,
}

export const CustomAccentColor: Story = {
  render: (args) => <ModalWrapper {...args} accentColor="purple" />,
}

export const ConnectError: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      onConnect={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        throw new Error("Connection failed")
      }}
    />
  ),
}

