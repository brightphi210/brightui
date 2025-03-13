import type { Meta, StoryObj } from "@storybook/react"
import ChatBubble from "../components/ChatBubble"

const meta: Meta<typeof ChatBubble> = {
  title: "Components/ChatBubble",
  component: ChatBubble,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "radio",
      options: ["left", "right"],
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "accent", "neutral"],
    },
  },
}

export default meta
type Story = StoryObj<typeof ChatBubble>

export const LeftWithoutAvatar: Story = {
  args: {
    message: "Hello! How are you doing today?",
    position: "left",
    variant: "primary",
    timestamp: "12:30 PM",
  },
}

export const RightWithoutAvatar: Story = {
  args: {
    message: "I'm doing great, thanks for asking!",
    position: "right",
    variant: "primary",
    timestamp: "12:31 PM",
  },
}

export const LeftWithAvatar: Story = {
  args: {
    message: "Can you help me with something?",
    position: "left",
    variant: "secondary",
    avatar: "https://i.pravatar.cc/300",
    sender: "John Doe",
    timestamp: "12:32 PM",
  },
}

export const RightWithAvatar: Story = {
  args: {
    message: "Sure, what do you need help with?",
    position: "right",
    variant: "secondary",
    avatar: "https://i.pravatar.cc/300",
    sender: "Jane Smith",
    timestamp: "12:33 PM",
  },
}

export const AccentVariant: Story = {
  args: {
    message: "This is an accent variant bubble!",
    position: "left",
    variant: "accent",
    timestamp: "12:34 PM",
  },
}

export const NeutralVariant: Story = {
  args: {
    message: "This is a neutral variant bubble.",
    position: "right",
    variant: "neutral",
    timestamp: "12:35 PM",
  },
}

export const LongMessage: Story = {
  args: {
    message:
      "This is a very long message that should wrap properly within the chat bubble. It demonstrates how the component handles longer content and ensures that everything looks good even with extended text.",
    position: "left",
    variant: "primary",
    timestamp: "12:36 PM",
  },
}

export const ConversationExample: Story = {
  render: () => (
    <div className="w-full max-w-md mx-auto p-4 bg-gray-50 rounded-lg">
      <ChatBubble
        message="Hey there! How's your day going?"
        position="left"
        variant="primary"
        avatar="https://i.pravatar.cc/300"
        sender="Alice"
        timestamp="10:00 AM"
      />
      <ChatBubble
        message="Pretty good, thanks for asking! Just finished a big project."
        position="right"
        variant="primary"
        avatar="https://i.pravatar.cc/300"
        sender="Bob"
        timestamp="10:02 AM"
      />
      <ChatBubble
        message="That's awesome! Was it the one you were telling me about last week?"
        position="left"
        variant="primary"
        avatar="https://i.pravatar.cc/300"
        sender="Alice"
        timestamp="10:03 AM"
      />
      <ChatBubble
        message="Yes, exactly! It was challenging but I learned a lot."
        position="right"
        variant="primary"
        avatar="https://i.pravatar.cc/300"
        sender="Bob"
        timestamp="10:05 AM"
      />
      <ChatBubble
        message="We should celebrate sometime!"
        position="left"
        variant="accent"
        avatar="https://i.pravatar.cc/300"
        sender="Alice"
        timestamp="10:06 AM"
      />
    </div>
  ),
}

