import type { Meta, StoryObj } from "@storybook/react"
import CryptoCheckout from "../components/CryptoCheckout"

const meta: Meta<typeof CryptoCheckout> = {
  title: "Components/CryptoCheckout",
  component: CryptoCheckout,
  argTypes: {
    amount: { control: "text" },
    currency: { control: "text" },
    walletAddress: { control: "text" },
    network: { control: "text" },
    className: { control: "text" },
    onConfirm: { action: "confirmed" },
    theme: {
      control: "select",
      options: ["light", "dark"],
    },
    accentColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof CryptoCheckout>

export const Default: Story = {
  args: {
    amount: "0.0128",
    currency: "ETH",
    walletAddress: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t",
    network: "Ethereum",
  },
}

export const Bitcoin: Story = {
  args: {
    amount: "0.00045",
    currency: "BTC",
    walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    network: "Bitcoin",
  },
}

export const Solana: Story = {
  args: {
    amount: "2.5",
    currency: "SOL",
    walletAddress: "HN7cABqLq46Es1jh92dQQisAq662SmxELLLsHHe4YWrH",
    network: "Solana",
  },
}

export const CustomStyle: Story = {
  args: {
    ...Default.args,
    className: "max-w-sm border-2 border-indigo-200",
  },
}

export const LowTimeRemaining: Story = {
  args: {
    ...Default.args,
  },
}

export const MultipleCheckouts: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <CryptoCheckout
        amount="0.0128"
        currency="ETH"
        walletAddress="0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t"
        network="Ethereum"
      />
      <CryptoCheckout
        amount="0.00045"
        currency="BTC"
        walletAddress="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
        network="Bitcoin"
      />
    </div>
  ),
}

export const DarkTheme: Story = {
  args: {
    ...Default.args,
    theme: "dark",
  },
}

export const CustomAccentColor: Story = {
  args: {
    ...Default.args,
    accentColor: "#10b981", // Emerald color
  },
}

export const DarkWithCustomAccent: Story = {
  args: {
    ...Default.args,
    theme: "dark",
    accentColor: "#ec4899", // Pink color
  },
}

export const ThemeVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <CryptoCheckout
        amount="0.0128"
        currency="ETH"
        walletAddress="0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t"
        network="Ethereum"
        theme="light"
        accentColor="#6366f1"
      />
      <CryptoCheckout
        amount="0.0128"
        currency="ETH"
        walletAddress="0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t"
        network="Ethereum"
        theme="dark"
        accentColor="#6366f1"
      />
      <CryptoCheckout
        amount="0.00045"
        currency="BTC"
        walletAddress="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
        network="Bitcoin"
        theme="light"
        accentColor="#f59e0b"
      />
      <CryptoCheckout
        amount="0.00045"
        currency="BTC"
        walletAddress="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
        network="Bitcoin"
        theme="dark"
        accentColor="#f59e0b"
      />
    </div>
  ),
}

