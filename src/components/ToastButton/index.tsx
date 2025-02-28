import type React from "react"
import { useState } from "react"
import Toast, { type ToastProps } from "../Toast"

interface ToastButtonProps extends Omit<ToastProps, "isVisible"> {
  buttonText?: string
  buttonClassName?: string
}

const ToastButton: React.FC<ToastButtonProps> = ({
  buttonText = "Show Toast",
  buttonClassName = "",
  ...toastProps
}) => {
  const [isToastVisible, setIsToastVisible] = useState(false)

  const showToast = () => {
    setIsToastVisible(true)
  }

  const handleToastClose = () => {
    setIsToastVisible(false)
    if (toastProps.onClose) {
      toastProps.onClose()
    }
  }

  return (
    <>
      <button
        onClick={showToast}
        className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors ${buttonClassName}`}
      >
        {buttonText}
      </button>
      <Toast {...toastProps} isVisible={isToastVisible} onClose={handleToastClose} />
    </>
  )
}

export default ToastButton

