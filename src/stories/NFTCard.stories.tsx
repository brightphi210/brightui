import type { Meta, StoryObj } from "@storybook/react"
import NFTCard from "../components/NFTCard"

const meta: Meta<typeof NFTCard> = {
  title: "Components/NFTCard",
  component: NFTCard,
  argTypes: {
    imageSrc: { control: "text" },
    title: { control: "text" },
    creator: { control: "text" },
    price: { control: "text" },
    likes: { control: "number" },
    onBuyClick: { action: "buy clicked" },
    className: { control: "text" },
    theme: { control: "radio", options: ["light", "dark"] },
  },
}

export default meta

type Story = StoryObj<typeof NFTCard>

export const Default: Story = {
  args: {
    imageSrc: "https://res.cloudinary.com/dphb7gqus/image/upload/v1740226820/xsVxjlsDUE8ZjYAxGXPI--0--v98nx_hlam6z.jpg",
    title: "Cosmic Perspective #42",
    creator: "ArtisticMind",
    price: "0.5 ETH",
    likes: 23,
    theme: "light",
  },
}

export const PopularNFT: Story = {
  args: {
    imageSrc: "https://res.cloudinary.com/dphb7gqus/image/upload/v1740226820/P1gVQ0xvsQ43V1cQdOoL--0--7427x_tvfsnz.jpg",
    title: "Golden Opportunity",
    creator: "CryptoCreator",
    price: "2.5 ETH",
    likes: 1337,
    theme: "light",
  },
}

export const NewListing: Story = {
  args: {
    imageSrc: "https://res.cloudinary.com/dphb7gqus/image/upload/v1740226820/xsVxjlsDUE8ZjYAxGXPI--0--v98nx_hlam6z.jpg",
    title: "Digital Dreamscape",
    creator: "NFTNovice",
    price: "0.1 ETH",
    likes: 5,
    theme: "light",
  },
}

export const DarkMode: Story = {
  args: {
    imageSrc: "https://res.cloudinary.com/dphb7gqus/image/upload/v1740226821/Oh6V69milpY3lQJboxJ6--0--rzahe_fsepsi.jpg", // Updated placeholder
    title: "Neon Nights",
    creator: "CyberArtist",
    price: "1.2 ETH",
    likes: 42,
    theme: "dark",
  },
}

