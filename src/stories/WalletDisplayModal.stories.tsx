import type React from "react"
import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import WalletModal from "../components/WalletDisplayModal"

const meta: Meta<typeof WalletModal> = {
  title: "Components/WalletDisplayModal",
  component: WalletModal,
  argTypes: {
    isOpen: { control: "boolean" },
    onClose: { action: "closed" },
    address: { control: "text" },
    balance: { control: "text" },
    currency: { control: "text" },
    onCopy: { action: "copied" },
    onDisconnect: { action: "disconnected" },
    className: { control: "text" },
    avatarUrl: { control: "text" },
  },
}

export default meta

type Story = StoryObj<typeof WalletModal>

// Custom button component for opening the modal
const Button = ({
  onClick,
  children,
  color = "blue",
  size = "md",
  fontWeight = "medium",
}: {
  onClick: () => void
  children: React.ReactNode
  color?: "blue" | "gray" | "green"
  size?: "sm" | "md" | "lg"
  fontWeight?: "normal" | "medium" | "bold"
}) => {
  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-600 text-white",
    gray: "bg-gray-500 hover:bg-gray-600 text-white",
    green: "bg-green-500 hover:bg-green-600 text-white",
  }

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-5 py-2.5 text-lg",
  }

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
  }

  return (
    <button
      onClick={onClick}
      className={`rounded-md ${colorClasses[color]} ${sizeClasses[size]} ${weightClasses[fontWeight]} transition-colors`}
    >
      {children}
    </button>
  )
}

const WalletModalTemplate: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setIsOpen(true)} color="blue" size="sm" fontWeight="medium">
          Connect Wallet
        </Button>
        <WalletModal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onCopy={() => console.log("Address copied!")}
          onDisconnect={() => {
            console.log("Wallet disconnected!")
            setIsOpen(false)
          }}
        />
      </>
    )
  },
}

export const Default: Story = {
  ...WalletModalTemplate,
  args: {
    address: "0x22...6405",
    balance: "0",
    currency: "ETH",
  },
}

export const WithCustomAvatar: Story = {
  ...WalletModalTemplate,
  args: {
    address: "0x22...6405",
    balance: "0.5",
    currency: "ETH",
  },
}

export const LongAddress: Story = {
  ...WalletModalTemplate,
  args: {
    address: "0x22a7d8a25c9ad405d3bd66858a46f8c7fc93f6405",
    balance: "1.337",
    currency: "BTC",
  },
}

export const CustomStyle: Story = {
  ...WalletModalTemplate,
  args: {
    address: "0x22...6405",
    balance: "42",
    currency: "DOGE",
    className: "bg-gray-900 text-white border-2 border-blue-500",
  },
}

