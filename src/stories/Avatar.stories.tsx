import type { Meta, StoryObj } from "@storybook/react"
import Avatar from "../components/Avatar"

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    src: { control: "text" },
    name: { control: "text" },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    badge: {
      control: { type: "select" },
      options: [undefined, "online", "offline", "away"],
    },
    className: { control: "text" },
  },
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    name: "John Doe",
    size: "md",
  },
}

export const WithInitials: Story = {
  args: {
    name: "John Doe",
    size: "md",
  },
}

export const WithBadge: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    name: "Jane Smith",
    size: "md",
    badge: "online",
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-end space-x-4">
      <Avatar {...args} size="xs" />
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
      <Avatar {...args} size="xl" />
    </div>
  ),
  args: {
    src: "https://i.pravatar.cc/300",
    name: "John Doe",
  },
}

export const GroupOfAvatars: Story = {
  render: (args) => (
    <div className="flex -space-x-4">
      <Avatar {...args} src="https://i.pravatar.cc/300?img=1" />
      <Avatar {...args} src="https://i.pravatar.cc/300?img=2" />
      <Avatar {...args} src="https://i.pravatar.cc/300?img=3" />
      <Avatar {...args} src="https://i.pravatar.cc/300?img=4" />
      <Avatar {...args} name="More" className="bg-gray-200" />
    </div>
  ),
  args: {
    size: "md",
  },
}

export const StackedAvatars: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <div className="flex -space-x-4">
        <Avatar {...args} src="https://i.pravatar.cc/300?img=1" />
        <Avatar {...args} src="https://i.pravatar.cc/300?img=2" />
        <Avatar {...args} src="https://i.pravatar.cc/300?img=3" />
      </div>
      <span className="text-sm font-medium text-gray-700">+3 others</span>
    </div>
  ),
  args: {
    size: "md",
  },
}

export const AvatarWithBadges: Story = {
  render: (args) => (
    <div className="flex space-x-4">
      <Avatar {...args} badge="online" />
      <Avatar {...args} badge="offline" />
      <Avatar {...args} badge="away" />
    </div>
  ),
  args: {
    src: "https://i.pravatar.cc/300",
    name: "John Doe",
    size: "md",
  },
}

export const CustomStyle: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    name: "John Doe",
    size: "md",
    className: "ring-2 ring-blue-500 ring-offset-2",
  },
}

