import { Meta, StoryObj } from '@storybook/react';
import Loading from '../components/Loading';

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['spinner', 'dots', 'bar', 'pulse', 'ring'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    color: { control: 'color' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Spinner: Story = {
  args: {
    type: 'spinner',
    size: 'md',
    color: 'text-blue-500',
  },
};

export const Dots: Story = {
  args: {
    type: "dots",
    size: "md",
    color: "#35c423",
  },
};

export const Bar: Story = {
  args: {
    type: 'bar',
    size: 'md',
    color: 'bg-red-500',
  },
};

export const Pulse: Story = {
  args: {
    type: 'pulse',
    size: 'md',
    color: 'bg-purple-500',
  },
};

export const Ring: Story = {
  args: {
    type: 'ring',
    size: 'md',
    color: "border-green-500",
  },
};

export const CustomSize: Story = {
  args: {
    type: 'spinner',
    size: 'lg',
    color: 'text-indigo-500',
  },
};

export const CustomStyle: Story = {
  args: {
    type: 'dots',
    size: 'md',
    color: 'bg-pink-500',
    className: 'p-4 bg-gray-100 rounded-lg shadow-md',
  },
};

