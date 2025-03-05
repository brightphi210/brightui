import type React from "react"
import { useEffect, useState, useRef } from "react"
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaSpinner,
  FaTimes,
  FaExclamationTriangle,
} from "react-icons/fa"

export interface ToastProps {
  /**
   * Type of toast notification
   */
  type: "success" | "error" | "warning" | "info" | "loading" | "custom"
  /**
   * Message to display in the toast
   */
  message: string
  /**
   * Duration in milliseconds before toast auto-dismisses (0 for no auto-dismiss)
   */
  duration?: number
  /**
   * Theme of the toast
   */
  theme?: "light" | "dark"
  /**
   * Position of the toast on the screen
   */
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"
  /**
   * Custom icon to display (only used when type is 'custom')
   */
  icon?: React.ReactNode
  /**
   * Optional callback when toast is closed
   */
  onClose?: () => void
  /**
   * Optional additional class names
   */
  className?: string
  /**
   * Whether the toast is visible
   */
  isVisible?: boolean
}

const Toast: React.FC<ToastProps> = ({
  type,
  message,
  duration = 3000,
  theme = "light",
  position = "top-right",
  icon,
  onClose,
  className = "",
  isVisible = false,
}) => {
  const [isShowing, setIsShowing] = useState(isVisible)
  const [isExiting, setIsExiting] = useState(false)
  const [progress, setProgress] = useState(100)
  const startTimeRef = useRef<number | null>(null)
  const animationFrameRef = useRef<number | null>(null)

  // Handle visibility changes from parent
  useEffect(() => {
    if (isVisible && !isShowing) {
      setIsShowing(true)
      setIsExiting(false)
      setProgress(100)
      startTimeRef.current = Date.now() // Reset the timer when showing
    } else if (!isVisible && isShowing && !isExiting) {
      handleDismiss()
    }
  }, [isVisible]) // Only depend on isVisible prop, not internal state

  const handleDismiss = () => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null // Reset the ref
    }

    setIsExiting(true)
    // Wait for exit animation to complete
    setTimeout(() => {
      setIsShowing(false)
      startTimeRef.current = null // Reset the timer reference
      if (onClose) onClose()
    }, 300)
  }

  // Auto-dismiss and progress bar logic
  useEffect(() => {
    if (duration > 0 && isShowing && !isExiting) {
      if (startTimeRef.current === null) {
        startTimeRef.current = Date.now()
      }

      const updateProgress = () => {
        if (startTimeRef.current === null) return

        const elapsed = Date.now() - startTimeRef.current
        const remaining = Math.max(0, duration - elapsed)
        const currentProgress = (remaining / duration) * 100

        setProgress(currentProgress)

        if (currentProgress > 0) {
          animationFrameRef.current = requestAnimationFrame(updateProgress)
        } else {
          handleDismiss()
        }
      }

      animationFrameRef.current = requestAnimationFrame(updateProgress)

      return () => {
        if (animationFrameRef.current !== null) {
          cancelAnimationFrame(animationFrameRef.current)
          animationFrameRef.current = null
        }
      }
    }
  }, [duration, isShowing, isExiting, handleDismiss]) 

  if (!isShowing) {
    return null
  }

  // Icon mapping based on toast type
  const getIcon = () => {
    if (type === "custom" && icon) return icon

    const iconMap = {
      success: <FaCheckCircle className="text-base" />,
      error: <FaExclamationCircle className="text-base" />,
      warning: <FaExclamationTriangle className="text-base" />,
      info: <FaInfoCircle className="text-base" />,
      loading: <FaSpinner className="text-base animate-spin" />,
      custom: <FaInfoCircle className="text-base" />,
    }

    return iconMap[type]
  }

  // Theme and type-based styling
  const getTypeStyles = () => {
    const baseStyles = {
      success: "bg-green-600 text-white ",
      error: "bg-red-600 text-white ",
      warning: "bg-yellow-500 text-white ",
      info: "bg-blue-600 text-white",
      loading: "bg-purple-600 text-white ",
      custom: "bg-gray-600 text-white ",
    }

    const darkStyles = {
      success: "bg-green-700 text-white",
      error: "bg-red-700 text-white",
      warning: "bg-yellow-700 text-white",
      info: "bg-blue-700 text-white",
      loading: "bg-purple-700 text-white",
      custom: "bg-gray-700 text-white",
    }

    return theme === "dark" ? darkStyles[type] : baseStyles[type]
  }

  // Progress bar color based on type
  const getProgressColor = () => {
    const progressColors = {
      success: "bg-green-300",
      error: "bg-red-300",
      warning: "bg-yellow-300",
      info: "bg-blue-300",
      loading: "bg-purple-300",
      custom: "bg-gray-300",
    }

    return progressColors[type]
  }

 // Position-based styling
 const getPositionStyles = () => {
  const positionStyles = {
    "top-right": "top-4 right-4 max-sm:left-1/2 max-sm:right-auto max-sm:-translate-x-1/2 max-sm:top-4",
    "top-left": "top-4 left-4 max-sm:right-0 max-sm:left-0 max-sm:m-auto max-sm:-translate-x-1/2 max-sm:top-4",
    "bottom-right": "bottom-4 right-4 max-sm:right-0 max-sm:left-0 max-sm:m-auto max-sm:-translate-x-1/2 max-sm:top-4",
    "bottom-left": "bottom-4 left-4 max-sm:right-0 max-sm:left-0 max-sm:m-auto max-sm:-translate-x-1/2 max-sm:top-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  };


  return positionStyles[position]
}

  // Animation classes
  const getAnimationClasses = () => {
    const entranceMap = {
      "top-right": "animate-slide-in-up",
      "top-left": "animate-slide-in-left",
      "bottom-right": "animate-slide-in-right",
      "bottom-left": "animate-slide-in-left",
      "top-center": "animate-slide-in-down",
      "bottom-center": "animate-slide-in-up",
    }

    const exitMap = {
      "top-right": "animate-slide-out-down",
      "top-left": "animate-slide-out-left",
      "bottom-right": "animate-slide-out-right",
      "bottom-left": "animate-slide-out-left",
      "top-center": "animate-slide-out-up",
      "bottom-center": "animate-slide-out-down",
    }

    return isExiting ? exitMap[position] : entranceMap[position]
  }

  return (
    <div
      className={`
        fixed ${getPositionStyles()} z-50 
        ${getAnimationClasses()} 
        transition-all duration-300 ease-in-out
        ${className}
      `}
      style={{
        maxWidth: "100%",
        width: "fit-content",
        minWidth: "300px",
      }}
    >
      <div
        className={`
          flex flex-col rounded-md shadow-lg 
          ${getTypeStyles()}
          overflow-hidden max-sm:justify-center max-sm:m-auto max !max-sm:w-[99%]
        `}
      >
        <div className="flex items-center p-3">
          <div className="flex-shrink-0 mr-2">{getIcon()}</div>
          <div className="flex-grow mr-2">
            <p className="text-sm font-medium">{message}</p>
          </div>
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-1 rounded-full hover:bg-black hover:bg-opacity-10 transition-colors"
            aria-label="Close"
          >
            <FaTimes className="text-sm" />
          </button>
        </div>

        {/* Progress bar */}
        {duration > 0 && (
          <div className="h-1 w-full bg-black bg-opacity-10">
            <div
              className={`h-full ${getProgressColor()} transition-all duration-100 ease-linear`}
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

// Add animation keyframes to global styles
const toastAnimations = `
@keyframes slideInRight {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideOutRight {
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(100%); opacity: 0; }
}

@keyframes slideInLeft {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideOutLeft {
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(-100%); opacity: 0; }
}

@keyframes slideInDown {
  from { transform: translateY(-100%) translateX(-50%); opacity: 0; }
  to { transform: translateY(0) translateX(-50%); opacity: 1; }
}

@keyframes slideOutUp {
  from { transform: translateY(0) translateX(-50%); opacity: 1; }
  to { transform: translateY(-100%) translateX(-50%); opacity: 0; }
}

@keyframes slideInUp {
  from { transform: translateY(100%) translateX(-50%); opacity: 0; }
  to { transform: translateY(0) translateX(-50%); opacity: 1; }
}

@keyframes slideOutDown {
  from { transform: translateY(0) translateX(-50%); opacity: 1; }
  to { transform: translateY(100%) translateX(-50%); opacity: 0; }
}
`

// Add the animations to the style element
if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.textContent = toastAnimations
  document.head.appendChild(style)
}


export default Toast

