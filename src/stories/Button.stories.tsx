import { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: 'select',
      options: ['blue', 'red', 'white', 'black', 'green', 'yellow'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    fontWeight: {
      control: 'select',
      options: ['light', 'medium', 'semibold', 'bold'],
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Click Me',
    color: "blue",
    size: 'md',
    fontWeight: 'medium',
    className: "border border-neutral-200 text-green"
  },
};

export const CustomClass: Story = {
  args: {
    ...Default.args,
    className: "shadow-lg hover:shadow-xl bg-yellow-200 text-pink-200",
  },
};

