import type { Meta, StoryObj } from "@storybook/react";
import SuccessfulTransactionModal from "../components/SuccessfulTransactionModal";

const meta: Meta<typeof SuccessfulTransactionModal> = {
  title: "Components/SuccessfulTransactionModal",
  component: SuccessfulTransactionModal,
  argTypes: {
    isOpen: { control: "boolean" },
    onClose: { action: "closed" },
    transactionHash: { control: "text" },
    theme: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof SuccessfulTransactionModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    transactionHash: "0x1234567890abcdef",
    theme: "light",
  },
};

export const DarkMode: Story = {
  args: {
    ...Default.args,
    theme: "dark",
  },
};