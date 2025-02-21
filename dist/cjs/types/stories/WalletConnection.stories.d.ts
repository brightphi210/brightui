import type { Meta, StoryObj } from "@storybook/react";
import WalletConnection from "../components/WalletConnection";
declare const meta: Meta<typeof WalletConnection>;
export default meta;
type Story = StoryObj<typeof WalletConnection>;
export declare const Default: Story;
export declare const DarkTheme: Story;
export declare const CustomAccentColor: Story;
export declare const ConnectError: Story;
