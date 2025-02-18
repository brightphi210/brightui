import type React from "react"

export interface AvatarProps {
  src?: string
  name?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  badge?: "online" | "offline" | "away"
  className?: string
}

const Avatar: React.FC<AvatarProps> = ({ src, name, size = "md", badge, className = "" }) => {
  const sizeClasses = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
    xl: "w-16 h-16 text-xl",
  }

  const badgeClasses = {
    online: "bg-green-500",
    offline: "bg-gray-500",
    away: "bg-yellow-500",
  }

  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : ""

  return (
    <div className={`relative inline-flex ${sizeClasses[size]} ${className}`}>
      {src ? (
        <img
          src={src || "/placeholder.svg"}
          alt={name || "Avatar"}
          className="rounded-full object-cover w-full h-full"
        />
      ) : (
        <div className="rounded-full bg-gray-300 flex items-center justify-center w-full h-full">
          <span className="font-medium text-gray-700">{initials}</span>
        </div>
      )}
      {badge && (
        <span
          className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white ${badgeClasses[badge]}`}
        />
      )}
    </div>
  )
}

export default Avatar

