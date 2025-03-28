import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from '../components/ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'Components/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isConnected: {
      control: 'boolean',
      description: 'Connection status',
      defaultValue: true,
    },
    name: {
      control: 'text',
      description: 'User name',
    },
    walletAddress: {
      control: 'text',
      description: 'Wallet address',
    },
    profileImageUrl: {
      control: 'text',
      description: 'URL for the profile image',
    },
    badgeImageUrl: {
      control: 'text',
      description: 'URL for the badge image (optional)',
    },
    onDisconnect: {
      action: 'disconnected',
      description: 'Function called when disconnect button is clicked',
    },
    onCopyAddress: {
      action: 'address copied',
      description: 'Function called when copy address icon is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    isConnected: true,
    name: 'Ivar Jenner',
    walletAddress: 'Ais8s4j2k3l5m6n7is22',
    profileImageUrl: '/placeholder.svg?height=128&width=128',
    badgeImageUrl: '/placeholder.svg?height=32&width=32',
  },
};

export const WithoutBadge: Story = {
  args: {
    isConnected: true,
    name: 'Ivar Jenner',
    walletAddress: 'Ais8s4j2k3l5m6n7is22',
    profileImageUrl: '/placeholder.svg?height=128&width=128',
  },
};

export const Disconnected: Story = {
  args: {
    isConnected: false,
    name: 'Ivar Jenner',
    walletAddress: 'Ais8s4j2k3l5m6n7is22',
    profileImageUrl: '/placeholder.svg?height=128&width=128',
    badgeImageUrl: '/placeholder.svg?height=32&width=32',
  },
};

export const LongName: Story = {
  args: {
    isConnected: true,
    name: 'Alexander Christopher Jenner-Smith',
    walletAddress: 'Ais8s4j2k3l5m6n7is22',
    profileImageUrl: '/placeholder.svg?height=128&width=128',
    badgeImageUrl: '/placeholder.svg?height=32&width=32',
  },
};

export const Mobile: Story = {
  args: {
    isConnected: true,
    name: 'Ivar Jenner',
    walletAddress: 'Ais8s4j2k3l5m6n7is22',
    profileImageUrl: '/placeholder.svg?height=128&width=128',
    badgeImageUrl: '/placeholder.svg?height=32&width=32',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
