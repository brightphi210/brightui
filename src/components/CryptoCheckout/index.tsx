"use client"

import { useState } from "react"
import { Copy, Check, ArrowRight } from "lucide-react"

export interface CryptoCheckoutProps {
  amount: string
  currency: string
  walletAddress: string
  network: string
  className?: string
  onConfirm?: () => void
  theme?: "light" | "dark"
  accentColor?: string
}

const CryptoCheckout = ({
  amount = "0.0128",
  currency = "ETH",
  walletAddress = "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t",
  network = "Ethereum",
  className = "",
  onConfirm,
  theme = "light",
}: CryptoCheckoutProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const truncateAddress = (address: string) => {
    return `${address.substring(0, 8)}...${address.substring(address.length - 8)}`
  }

  // Theme-based classes
  const isDark = theme === "dark"

  const containerClasses = isDark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"

  const headerClasses = isDark ? "text-white" : "text-black"

  const dividerClasses = isDark ? "border-gray-700" : "border-gray-100"

  const labelClasses = isDark ? "text-gray-400" : "text-gray-500"

  const valueClasses = isDark ? "text-white" : "text-gray-900"

  const addressBgClasses = isDark ? "bg-gray-700" : "bg-gray-50"

  const buttonHoverClasses = isDark ? "hover:bg-opacity-80" : "hover:bg-opacity-90"

  return (
    <div
      className={`rounded-xl border shadow-sm overflow-hidden transition-all duration-300 ${containerClasses} ${className}`}
    >
      {/* Header */}
      <div className={`p-5 ${headerClasses} ${isDark ? "bg-gray-800" : "bg-gray-200"}`}>
        <div className="flex justify-between items-center">
          <h3 className="text-base font-semibold">Complete Your Payment</h3>
          <div className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm"></div>
        </div>
      </div>

      {/* Amount */}
      <div className={`p-5 border-b ${dividerClasses}`}>
        <div className="flex justify-between items-center">
          <span className={`${labelClasses} text-sm font-medium`}>Amount to pay</span>
          <div className="flex items-center gap-2">
            <span className={`font-bold text-xl ${valueClasses}`}>{amount}</span>
            <span className={`${labelClasses} font-medium`}>{currency}</span>
          </div>
        </div>
      </div>

      {/* Network */}
      <div className={`p-5 border-b ${dividerClasses}`}>
        <div className="flex justify-between items-center">
          <span className={`${labelClasses} text-sm font-medium`}>Network</span>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className={`font-medium ${valueClasses}`}>{network}</span>
          </div>
        </div>
      </div>

      {/* Wallet Address */}
      <div className={`p-5 border-b ${dividerClasses}`}>
        <div className="flex flex-col gap-3">
          <span className={`${labelClasses} text-sm font-medium`}>Send to this address</span>
          <div className={`flex items-center justify-between ${addressBgClasses} p-3.5 rounded-lg`}>
            <span className={`text-sm font-mono ${valueClasses}`}>{truncateAddress(walletAddress)}</span>
            <button
              onClick={handleCopy}
              className={`transition-all duration-300 ${isDark ? "text-white hover:text-gray-300" : "hover:text-gray-700"}`}
              style={{ color: copied ? "var(--accent-color)" : "" }}
            >
              {copied ? (
                <div className="flex items-center gap-1">
                  <Check size={16} />
                  <span className="text-xs font-medium">Copied</span>
                </div>
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="p-5">
        <button
          onClick={onConfirm}
          className={`w-full text-white font-medium py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${buttonHoverClasses}`}
          style={{ background: "var(--accent-color)" }}
        >
          <span>I've sent the payment</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default CryptoCheckout

