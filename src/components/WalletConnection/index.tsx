
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Wallet, Coins, CreditCard, X } from 'lucide-react'
import { createPortal } from 'react-dom';


export interface WalletConnectionModalProps {
  isOpen: boolean
  onClose: () => void
  onConnect: (walletType: string) => Promise<string>
  onDisconnect: () => void
  theme?: "light" | "dark"
  accentColor?: string
}

const walletOptions = [
  { type: "metamask", name: "MetaMask", icon: <Wallet className="h-5 w-5" /> },
  { type: "walletconnect", name: "WalletConnect", icon: <Coins className="h-5 w-5" /> },
  { type: "coinbase", name: "Coinbase Wallet", icon: <CreditCard className="h-5 w-5" /> },
]

const WalletConnection: React.FC<WalletConnectionModalProps> = ({
  isOpen,
  onClose,
  onConnect,
  onDisconnect,
  theme = "light",
}) => {
  const [address, setAddress] = useState<string>("")
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  const handleConnect = async (walletType: string) => {
    setIsConnecting(true)
    setError(null)
    try {
      const walletAddress = await onConnect(walletType)
      setAddress(walletAddress)
    } catch (err) {
      setError("Failed to connect wallet. Please try again.")
    } finally {
      setIsConnecting(false)
    }
  }

  const handleDisconnect = () => {
    onDisconnect()
    setAddress("")
  }

  const bgColor = theme === "light" ? "bg-white" : "bg-neutral-900"
  const textColor = theme === "light" ? "text-neutral-900" : "text-neutral-100"
  const borderColor = theme === "light" ? "border-neutral-200" : "border-neutral-700"
  const buttonBgColor = theme === "light" ? "bg-neutral-100 hover:bg-neutral-200" : "bg-neutral-800 hover:bg-neutral-700"

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className={`${bgColor} rounded-2xl shadow-2xl w-full max-w-md overflow-hidden`}
          >
            <div className="relative p-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className={`absolute top-4 right-4 p-2 rounded-full ${textColor} hover:bg-neutral-100 hover:text-neutral-600 transition-colors`}
              >
                <X className="h-5 w-5" />
              </motion.button>
              <h2 className={`text-xl font-bold ${textColor} mb-6`}>Connect Wallet</h2>
              {!address ? (
                <div className="space-y-4">
                  {walletOptions.map((wallet) => (
                    <motion.button
                      key={wallet.type}
                      onClick={() => handleConnect(wallet.type)}
                      disabled={isConnecting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full px-4 py-3 flex items-center justify-between ${textColor} ${borderColor} border rounded-lg transition-all duration-200 ${buttonBgColor}`}
                    >
                      <span className="flex items-center">
                        {wallet.icon}
                        <span className="ml-3 font-medium">{wallet.name}</span>
                      </span>
                      <motion.span
                        animate={{ x: isConnecting ? 10 : 0 }}
                        transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse" }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 ${theme === "light" ? "bg-neutral-100" : "bg-neutral-800"} rounded-lg`}
                  >
                    <p className={`text-sm ${theme === "light" ? "text-neutral-600" : "text-neutral-400"} mb-1`}>
                      Connected Wallet
                    </p>
                    <p className={`font-mono text-sm ${textColor}`}>{address}</p>
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDisconnect}
                    className={`w-full px-4 py-3 flex items-center justify-center ${textColor} ${borderColor} border rounded-lg transition-all duration-200 bg-red-500 hover:bg-red-600`}
                  >
                    Disconnect Wallet
                  </motion.button>
                </div>
              )}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 mt-4 text-sm"
                >
                  {error}
                </motion.p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default WalletConnection
