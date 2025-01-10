import { Meta, StoryObj } from '@storybook/react';
import Alert from '../components/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
    },
    message: { control: 'text' },
    className: { control: 'text' },
    onClose: { action: 'closed' },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    type: 'info',
    message: 'This is an informational alert.',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Operation completed successfully!',
    className: "bg-neutral-400 text-white border border-neutral-700"
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'Warning: This action cannot be undone.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'An error occurred. Please try again.',
  },
};

export const CustomStyle: Story = {
  args: {
    type: 'info',
    message: 'This alert has custom styling.',
    className: 'bg-purple-100 text-purple-800',
  },
};

export const Closable: Story = {
  args: {
    type: 'success',
    message: 'This alert can be closed.',
    onClose: () => console.log('Alert closed'),
  },
};

