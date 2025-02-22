// Storybook configuration
import TokenSwap from "../components/TokenSwap";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TokenSwap> = {
  title: "Components/TokenSwap",
  component: TokenSwap,
  argTypes: {
    tokens: { control: "object" },
    exchangeRates: { control: "object" },
    theme: { control: "radio", options: ["light", "dark"] },
    onSwap: { action: "swap clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof TokenSwap>;

export const Default: Story = {
  args: {
    tokens: [
      { symbol: "ETH", balance: 10 },
      { symbol: "BTC", balance: 0.5 },
      { symbol: "SOL", balance: 20 },
    ],
    exchangeRates: {
      "ETH_BTC": 0.05,
      "BTC_ETH": 20,
      "ETH_SOL": 150,
      "SOL_ETH": 0.0067,
    },
    theme: "light",
  },
};

export const DarkMode: Story = {
  args: {
    tokens: [
      { symbol: "BTC", balance: 2 },
      { symbol: "ETH", balance: 40 },
      { symbol: "SOL", balance: 15 },
    ],
    exchangeRates: {
      "BTC_ETH": 20,
      "ETH_BTC": 0.05,
      "BTC_SOL": 600,
      "SOL_BTC": 0.0017,
    },
    theme: "dark",
  },
};
