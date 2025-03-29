'use client'

import type React from "react"
import { useState, useEffect } from "react"
import { FiLogOut } from "react-icons/fi"
import { LuCopy } from "react-icons/lu";


export interface WalletModalProps {
 
  isOpen: boolean
  onClose: () => void
  address: string
  balance: string
  currency: string
  onCopy?: () => void
  onDisconnect?: () => void
  className?: string
  avatarUrl?: string
}

const WalletDisplayModal: React.FC<WalletModalProps> = ({
  isOpen,
  onClose,
  address,
  balance,
  currency,
  onCopy,
  onDisconnect,
  className = "",
  avatarUrl = "",
}) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // Handle animation states when isOpen changes
  useEffect(() => {
    if (isOpen) {
      setShowModal(true)
      // Small delay to ensure DOM is ready before starting animation
      setTimeout(() => setIsAnimating(true), 10)
    } else {
      setIsAnimating(false)
      // Wait for animation to complete before removing from DOM
      const timer = setTimeout(() => setShowModal(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Format the address to show only first and last few characters
  const formatAddress = (addr: string) => {
    if (!addr) return ""
    if (addr.length <= 10) return addr
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`
  }

  // Handle copy address functionality
  const handleCopy = () => {
    navigator.clipboard.writeText(address)
    if (onCopy) onCopy()
  }

  // Handle disconnect functionality
  const handleDisconnect = () => {
    if (onDisconnect) onDisconnect()
    onClose()
  }

  if (!showModal) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
        isAnimating ? "bg-black/50 opacity-100" : "bg-black/0 opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-md rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 ease-in-out ${className} ${
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
        >
          <span className="sr-only">Close</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 4L4 12M4 4L12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Wallet avatar */}
        <div className="mb-4 flex justify-center">
          <div className="h-24 w-24 overflow-hidden rounded-full bg-blue-500">
            {avatarUrl ? (
              <img src={avatarUrl || "/placeholder.svg"} alt="Wallet avatar" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-white">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                    fill="currentColor"
                  />
                  <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" fill="currentColor" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Wallet address */}
        <div className="mb-2 text-center">
          <h2 className="text-2xl font-bold text-gray-800">{formatAddress(address)}</h2>
        </div>

        {/* Wallet balance */}
        <div className="mb-6 text-center">
          <span className="text-xl text-center text-gray-600">
            {balance} {currency}
          </span>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handleCopy}
            className="flex gap-2 items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 transition hover:bg-gray-50"
          >
            <LuCopy className=""/>
            Copy Address
          </button>
          <button
            onClick={handleDisconnect}
            className="flex gap-2 items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 transition hover:bg-gray-50"
          >
            <FiLogOut/>
            Disconnect
          </button>
        </div>
      </div>
    </div>
  )
}

export default WalletDisplayModal

