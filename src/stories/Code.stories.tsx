import type { Meta, StoryObj } from "@storybook/react"
import CodeBlock from "../components/Code"

const meta: Meta<typeof CodeBlock> = {
  title: "Components/CodeBlock",
  component: CodeBlock,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#1f2937" }],
    },
  },
  argTypes: {
    showCopyButton: { control: "boolean" },
    showDots: { control: "boolean" },
    className: { control: "text" },
  },
}

export default meta

type Story = StoryObj<typeof CodeBlock>

export const Default: Story = {
  args: {
    children: `$ npm i daisyui
> installing...
✓ Done!`,
    showCopyButton: true,
    showDots: true,
  },
}

export const NpmInstall: Story = {
  args: {
    children: `$ npm install tailwindcss postcss autoprefixer
> Installing packages...
> Packages installed successfully!
✓ Done!`,
    showCopyButton: true,
    showDots: true,
  },
}

export const GitCommands: Story = {
  args: {
    children: `$ git init
Initialized empty Git repository in /path/to/repo/.git/
$ git add .
$ git commit -m "Initial commit"
[main (root-commit) 0123456] Initial commit
 10 files changed, 200 insertions(+)
✓ Done!`,
    showCopyButton: true,
    showDots: true,
  },
}

export const WithoutDots: Story = {
  args: {
    children: `$ npm i daisyui
> installing...
✓ Done!`,
    showCopyButton: true,
    showDots: false,
  },
}

export const WithoutCopyButton: Story = {
  args: {
    children: `$ npm i daisyui
> installing...
✓ Done!`,
    showCopyButton: false,
    showDots: true,
  },
}

