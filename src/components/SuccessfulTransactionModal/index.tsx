import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X, ExternalLink } from "lucide-react";
import { createPortal } from 'react-dom';


export interface SuccessfulTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  transactionHash: string;
  theme?: "light" | "dark";
}

const SuccessfulTransactionModal: React.FC<SuccessfulTransactionModalProps> = ({
  isOpen,
  onClose,
  transactionHash,
  theme = "light",
}) => {
  const bgColor = theme === "light" ? "bg-white" : "bg-neutral-900";
  const textColor = theme === "light" ? "text-neutral-900" : "text-neutral-100";
  const borderColor = theme === "light" ? "border-neutral-200" : "border-neutral-700";

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
                className={`absolute top-4 right-4 p-2 rounded-full ${textColor} hover:bg-neutral-100 transition-colors`}
              >
                <X className="h-5 w-5" />
              </motion.button>
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 10, stiffness: 100 }}
                >
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </motion.div>
                <h2 className={`text-xl font-bold ${textColor} mt-4 mb-2`}>Transfer Successful</h2>
                <div className={`p-4 ${theme === "light" ? "bg-neutral-100" : "bg-neutral-800"} rounded-lg w-full`}>
                  <p className={`text-sm ${theme === "light" ? "text-neutral-600" : "text-neutral-400"} mb-1`}>
                    Transaction Hash
                  </p>
                  <p className={`font-mono text-sm ${textColor} truncate`}>{transactionHash}</p>
                </div>
                <motion.a
                  href={`https://etherscan.io/tx/${transactionHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-6 px-4 py-2 flex items-center justify-center border ${borderColor} rounded-lg transition-all duration-200 ${textColor}`}
                >
                  View on Etherscan
                  <ExternalLink className="h-4 w-4 ml-2" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default SuccessfulTransactionModal;