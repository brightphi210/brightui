import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "../../lib/utils"

export interface RatingProps  {
  value?: number
  max?: number
  readOnly?: boolean
  size?: "sm" | "md" | "lg"
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger"
  onChange?: (value: number) => void
  className?: string;
}

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  ({ className, value = 0, max = 5, readOnly = false, size = "md", color = "default", onChange, ...props }, ref) => {
    const [hoverValue, setHoverValue] = React.useState<number | null>(null)
    const [localValue, setLocalValue] = React.useState<number>(value)

    React.useEffect(() => {
      setLocalValue(value)
    }, [value])

    const handleClick = (index: number) => {
      if (readOnly) return
      const newValue = index + 1
      setLocalValue(newValue)
      onChange?.(newValue)
    }

    const handleMouseEnter = (index: number) => {
      if (readOnly) return
      setHoverValue(index + 1)
    }

    const handleMouseLeave = () => {
      if (readOnly) return
      setHoverValue(null)
    }

    const sizeClasses = {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    }

    const colorClasses = {
      default: {
        active: "fill-primary text-primary",
        inactive: "fill-transparent text-muted-foreground text-gray-400 hover:text-primary",
      },
      primary: {
        active: "fill-blue-500 text-blue-500",
        inactive: "fill-transparent text-muted-foreground text-gray-400 hover:text-blue-500",
      },
      secondary: {
        active: "fill-purple-500 text-purple-500",
        inactive: "fill-transparent text-muted-foreground text-gray-400 hover:text-purple-500",
      },
      success: {
        active: "fill-green-500 text-green-500",
        inactive: "fill-transparent text-muted-foreground text-gray-400 hover:text-green-500",
      },
      warning: {
        active: "fill-amber-500 text-amber-500",
        inactive: "fill-transparent text-muted-foreground text-gray-400 hover:text-amber-500",
      },
      danger: {
        active: "fill-red-500 text-red-500",
        inactive: "fill-transparent text-muted-foreground text-gray-400 hover:text-red-500",
      },
    }

    const starSize = sizeClasses[size]

    return (
      <div ref={ref} className={cn("flex items-center gap-1", className)} {...props}>
        {Array.from({ length: max }).map((_, index) => {
          const isActive = (hoverValue !== null ? hoverValue : localValue) > index

          return (
            <button
              key={index}
              type="button"
              className={cn(
                "rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                readOnly ? "cursor-default" : "cursor-pointer",
              )}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              disabled={readOnly}
              aria-label={`${index + 1} star${index !== 0 ? "s" : ""}`}
            >
              <Star
                className={cn(
                  starSize,
                  "transition-colors",
                  isActive ? colorClasses[color].active : colorClasses[color].inactive,
                  readOnly && !isActive && "hover:text-muted-foreground",
                )}
              />
            </button>
          )
        })}
      </div>
    )
  },
)


export default Rating

