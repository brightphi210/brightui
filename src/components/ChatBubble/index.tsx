import type React from "react"

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

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  position = "left",
  variant = "primary",
  avatar,
  className = "",
  timestamp,
  sender,
  status,
  showTail = true,
  hasMedia = false,
  mediaUrl,
  onClick,
}) => {
  // Base container spacing and alignment
  const containerClasses = `flex w-full gap-2 ${position === "right" ? "justify-end" : "justify-start"} mb-3`;
  
  // Base bubble styling
  const baseClasses = "relative px-4 py-2.5 break-words shadow-sm";
  
  // Enhanced bubble styling with proper spacing and alignment
  const bubbleClasses = {
    left: "self-start rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-sm",
    right: "self-end rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-sm",
  };
  
  // Expanded color palette with improved contrast
  const variantClasses = {
    primary: position === "left" 
      ? "bg-gray-100 text-gray-800 border border-gray-200" 
      : "bg-blue-600 text-white",
    secondary: position === "left" 
      ? "bg-indigo-50 text-indigo-800 border border-indigo-100" 
      : "bg-indigo-600 text-white",
    accent: position === "left" 
      ? "bg-amber-50 text-amber-800 border border-amber-100" 
      : "bg-amber-500 text-white",
    neutral: position === "left" 
      ? "bg-slate-100 text-slate-800 border border-slate-200" 
      : "bg-slate-700 text-white",
    success: position === "left"
      ? "bg-green-50 text-green-800 border border-green-100"
      : "bg-green-600 text-white",
    warning: position === "left"
      ? "bg-orange-50 text-orange-800 border border-orange-100"
      : "bg-orange-500 text-white",
    error: position === "left"
      ? "bg-red-50 text-red-800 border border-red-100"
      : "bg-red-600 text-white",
  };
  
  // Text colors for timestamp based on variant
  const timestampColors = {
    primary: position === "left" ? "text-gray-500" : "text-gray-200",
    secondary: position === "left" ? "text-indigo-500" : "text-indigo-200",
    accent: position === "left" ? "text-amber-500" : "text-amber-200",
    neutral: position === "left" ? "text-slate-500" : "text-slate-300",
    success: position === "left" ? "text-green-500" : "text-green-200",
    warning: position === "left" ? "text-orange-500" : "text-orange-200",
    error: position === "left" ? "text-red-500" : "text-red-200",
  };
  
  // Status icons and colors
  const renderStatus = () => {
    if (!status) return null;
    
    // Status display with proper styling
    switch (status) {
      case "typing":
        return <span className="ml-1 text-xs italic opacity-70">typing...</span>;
      case "sent":
        return <span className="ml-1 text-xs">✓</span>;
      case "delivered":
        return <span className="ml-1 text-xs">✓✓</span>;
      case "read":
        return <span className="ml-1 text-xs text-blue-500">✓✓</span>;
      case "error":
        return <span className="ml-1 text-xs text-red-500">!</span>;
      default:
        return null;
    }
  };

  return (
    <div className={containerClasses}>
      {/* Avatar for left-positioned messages */}
      {avatar && position === "left" && (
        <div className="flex-shrink-0 self-end">
          <img 
            src={avatar} 
            alt={sender || "Avatar"} 
            className="w-8 h-8 rounded-full object-cover border border-gray-200 ring-2 ring-white" 
          />
        </div>
      )}

      <div className={`flex flex-col max-w-[75%] ${position === "right" ? "items-end" : "items-start"}`}>
        {/* Sender name */}
        {sender && position === "left" && (
          <span className="text-xs font-medium text-gray-700 mb-1 ml-1">{sender}</span>
        )}

        {/* Main bubble */}
        <div
          className={`
            ${baseClasses} 
            ${bubbleClasses[position]} 
            ${variantClasses[variant as keyof typeof variantClasses]} 
            ${className}
            ${onClick ? "cursor-pointer hover:opacity-90 transition-opacity" : ""}
          `}
          onClick={onClick}
        >
          {/* Media content if present */}
          {hasMedia && (
            <div className="mb-2 rounded overflow-hidden">
              {mediaUrl ? (
                <img 
                  src={mediaUrl} 
                  alt="Media content"
                  className="w-full max-h-48 object-cover" 
                />
              ) : (
                <div className="w-full h-32 bg-gray-200 flex items-center justify-center text-gray-400">
                  [Media content]
                </div>
              )}
            </div>
          )}
          
          {/* Message text */}
          <div className="text-sm font-normal">{message}</div>
          
          {/* Timestamp and status */}
          {timestamp && (
            <div className={`flex items-center justify-end mt-1 gap-1`}>
              <span className={`text-[10px] ${timestampColors[variant as keyof typeof timestampColors]}`}>
                {timestamp}
              </span>
              {position === "right" && renderStatus()}
            </div>
          )}
        </div>

        {/* Right-positioned sender name */}
        {sender && position === "right" && (
          <span className="text-xs font-medium text-gray-700 mt-1 mr-1">{sender}</span>
        )}
      </div>

      {/* Avatar for right-positioned messages */}
      {avatar && position === "right" && (
        <div className="flex-shrink-0 self-end">
          <img 
            src={avatar} 
            alt={sender || "Avatar"} 
            className="w-8 h-8 rounded-full object-cover border border-gray-200 ring-2 ring-white" 
          />
        </div>
      )}
    </div>
  );
};

export default ChatBubble;