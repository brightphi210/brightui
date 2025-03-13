import { Meta, StoryObj } from '@storybook/react';
import ProgressBar from '../components/ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    max: { control: { type: 'number' } },
    min: { control: { type: 'number' } },
    isAnimated: { control: 'boolean' },
    isIndeterminate: { control: 'boolean' },
    colorScheme: {
      control: { type: 'select' },
      options: ['blue', 'green', 'yellow', 'red', 'purple', 'gray'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    hasStripe: { control: 'boolean' },
    showLabel: { control: 'boolean' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 50,
    className: "w-1/2"
  },
};

export const WithLabel: Story = {
  args: {
    value: 75,
    showLabel: true,
  },
};

export const Striped: Story = {
  args: {
    value: 60,
    hasStripe: true,
  },
};

export const Animated: Story = {
  args: {
    value: 70,
    hasStripe: true,
    isAnimated: true,
  },
};

export const Indeterminate: Story = {
  args: {
    isIndeterminate: true,
  },
};

export const CustomColors: Story = {
  args: {
    value: 80,
    colorScheme: 'green',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <ProgressBar value={60} size="xs" />
      <ProgressBar value={60} size="sm" />
      <ProgressBar value={60} size="md" />
      <ProgressBar value={60} size="lg" />
    </div>
  ),
};

export const CustomStyle: Story = {
  args: {
    value: 40,
    className: 'rounded-none',
  },
};