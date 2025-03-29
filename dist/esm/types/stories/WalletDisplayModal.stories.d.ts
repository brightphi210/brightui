import type { Meta, StoryObj } from "@storybook/react";
import WalletModal from "../components/WalletDisplayModal";
declare const meta: Meta<typeof WalletModal>;
export default meta;
type Story = StoryObj<typeof WalletModal>;
export declare const Default: Story;
export declare const WithCustomAvatar: Story;
export declare const LongAddress: Story;
export declare const CustomStyle: Story;
