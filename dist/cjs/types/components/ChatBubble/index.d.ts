import type React from "react";
export interface ChatBubbleProps {
    /**
     * The message text to display
     */
    message: string;
    /**
     * Position of the chat bubble
     * @default "left"
     */
    position?: "left" | "right";
    /**
     * Color variant of the bubble
     * @default "primary"
     */
    variant?: "primary" | "secondary" | "accent" | "neutral" | "success" | "warning" | "error";
    /**
     * URL for the avatar image
     */
    avatar?: string;
    /**
     * Additional CSS class names
     */
    className?: string;
    /**
     * Time the message was sent
     */
    timestamp?: string;
    /**
     * Name of the message sender
     */
    sender?: string;
    /**
     * Status of the message (typing, sent, delivered, read)
     */
    status?: "typing" | "sent" | "delivered" | "read" | "error";
    /**
     * Whether to show the tail on the bubble
     * @default true
     */
    showTail?: boolean;
    /**
     * Whether the message contains multimedia (shows a placeholder if true)
     */
    hasMedia?: boolean;
    /**
     * Optional media URL (image, etc.)
     */
    mediaUrl?: string;
    /**
     * Optional callback when the bubble is clicked
     */
    onClick?: () => void;
}
declare const ChatBubble: React.FC<ChatBubbleProps>;
export default ChatBubble;
