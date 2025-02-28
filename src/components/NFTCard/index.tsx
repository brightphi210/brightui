import type React from "react"
import { User, Heart } from "lucide-react"

interface NFTCardProps {
  imageSrc: string
  title: string
  creator: string
  price: string
  likes?: number
  onBuyClick?: () => void
  className?: string
  theme?: "light" | "dark"
}

const NFTCard: React.FC<NFTCardProps> = ({
  imageSrc,
  title,
  creator,
  price,
  likes = 0,
  onBuyClick,
  className = "",
  theme = "light",
}) => {
  const bgColor = theme === "light" ? "bg-white" : "bg-gray-900"
  const textColor = theme === "light" ? "text-gray-900" : "text-white"
  const secondaryTextColor = theme === "light" ? "text-gray-600" : "text-gray-300"
  const tertiaryTextColor = theme === "light" ? "text-gray-500" : "text-gray-400"
  const heartBgColor = theme === "light" ? "bg-white" : "bg-gray-300"
  const buttonBgColor = "bg-blue-500 hover:bg-blue-600"
  const tagBgColor = theme === "light" ? "bg-gray-200" : "bg-gray-700"
  const tagTextColor = theme === "light" ? "text-gray-700" : "text-gray-300"

  return (
    <div className={`rounded-xl overflow-hidden shadow-lg ${bgColor} ${className}`}>
      <div className="relative">
        <img
          className="w-full h-64 object-cover"
          src={imageSrc || "/placeholder.svg"}
          alt={title}
        />
        <div className={`absolute top-2 right-2 ${heartBgColor} rounded-full p-2`}>
          <Heart className={`w-5 h-5 ${tertiaryTextColor}`} />
        </div>
      </div>
      <div className="px-6 py-4">
        <div className={`font-bold text-xl mb-2 ${textColor}`}>{title}</div>
        <p className={`${secondaryTextColor} text-sm mb-4 flex items-center`}>
          <User className="w-4 h-4 mr-1" />
          {creator}
        </p>
        <div className="flex justify-between items-center">
          <div>
            <p className={`${tertiaryTextColor} text-xs`}>Current price</p>
            <p className={`${textColor} font-bold`}>{price}</p>
          </div>
          <button
            onClick={onBuyClick}
            className={`${buttonBgColor} text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out`}
          >
            Buy Now
          </button>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span
          className={`inline-block ${tagBgColor} rounded-full px-3 py-1 text-sm font-semibold ${tagTextColor} mr-2 mb-2`}
        >
          {likes} {likes === 1 ? "Like" : "Likes"}
        </span>
      </div>
    </div>
  )
}

export default NFTCard

