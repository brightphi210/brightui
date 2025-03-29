"use client"

import type React from "react"
import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { cn } from "../../lib/utils"

export interface CodeBlockProps {
  children: string
  showCopyButton?: boolean
  className?: string
  showDots?: boolean
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, showCopyButton = true, className, showDots = true }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Process the content to add colors based on line prefixes
  const processContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      // Check for command prompt lines
      if (line.startsWith("$ ")) {
        return (
          <div key={index} className="flex">
            <span className="text-gray-400 mr-2">$</span>
            <span>{line.substring(2)}</span>
          </div>
        )
      }
      // Check for warning/installing lines
      else if (line.startsWith("> ")) {
        return (
          <div key={index} className="flex">
            <span className="text-amber-500 mr-2">{">"}</span>
            <span className="text-amber-500">{line.substring(2)}</span>
          </div>
        )
      }
      // Check for success/done lines
      else if (line.startsWith("✓ ")) {
        return (
          <div key={index} className="flex">
            <span className="text-green-500 mr-2">{"✓"}</span>
            <span className="text-green-500">{line.substring(2)}</span>
          </div>
        )
      }
      // Default line
      return <div key={index}>{line}</div>
    })
  }

  return (
    <div className={cn("rounded-lg overflow-hidden bg-[#111827] text-white font-mono text-sm", className)}>
      <div className="relative p-4">
        {showDots && (
          <div className="absolute top-4 left-4 flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-gray-500 opacity-70"></div>
            <div className="w-3 h-3 rounded-full bg-gray-500 opacity-70"></div>
            <div className="w-3 h-3 rounded-full bg-gray-500 opacity-70"></div>
          </div>
        )}

        <div className={cn("overflow-x-auto", showDots && "pt-6")}>{processContent(children)}</div>

        {showCopyButton && (
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 p-1.5 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
            aria-label="Copy code"
          >
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-gray-400" />}
          </button>
        )}
      </div>
    </div>
  )
}

export default CodeBlock

