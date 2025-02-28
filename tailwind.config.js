// tailwind.config.js
// module.exports = {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}',
//     './.storybook/**/*.{js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}', // Include Storybook files if they are outside src
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-out-left": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(-100%)", opacity: "0" },
        },
        "slide-in-down": {
          "0%": { transform: "translateY(-100%) translateX(-50%)", opacity: "0" },
          "100%": { transform: "translateY(0) translateX(-50%)", opacity: "1" },
        },
        "slide-out-up": {
          "0%": { transform: "translateY(0) translateX(-50%)", opacity: "1" },
          "100%": { transform: "translateY(-100%) translateX(-50%)", opacity: "0" },
        },
        "slide-in-up": {
          "0%": { transform: "translateY(100%) translateX(-50%)", opacity: "0" },
          "100%": { transform: "translateY(0) translateX(-50%)", opacity: "1" },
        },
        "slide-out-down": {
          "0%": { transform: "translateY(0) translateX(-50%)", opacity: "1" },
          "100%": { transform: "translateY(100%) translateX(-50%)", opacity: "0" },
        },
      },
      animation: {
        "slide-in-right": "slide-in-right 0.3s ease-out forwards",
        "slide-out-right": "slide-out-right 0.3s ease-in forwards",
        "slide-in-left": "slide-in-left 0.3s ease-out forwards",
        "slide-out-left": "slide-out-left 0.3s ease-in forwards",
        "slide-in-down": "slide-in-down 0.3s ease-out forwards",
        "slide-out-up": "slide-out-up 0.3s ease-in forwards",
        "slide-in-up": "slide-in-up 0.3s ease-out forwards",
        "slide-out-down": "slide-out-down 0.3s ease-in forwards",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}

