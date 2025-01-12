import { Meta, StoryObj } from '@storybook/react';
import Select from '../components/Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    options: { control: 'object' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
    placeholder: { control: 'text' },
    className: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select an option',
  },
};

export const WithValue: Story = {
  args: {
    options: defaultOptions,
    value: 'option2',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Choose wisely...',
  },
};

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    disabled: true,
  },
};

export const CustomStyle: Story = {
  args: {
    options: defaultOptions,
    className: 'w-64 text-purple-700',
  },
};

export const LongOptions: Story = {
  args: {
    options: [
      { value: 'option1', label: 'This is a very long option that might wrap' },
      { value: 'option2', label: 'Another long option for testing purposes' },
      { value: 'option3', label: 'Short option' },
    ],
  },
};

export const ManyOptions: Story = {
  args: {
    options: Array.from({ length: 20 }, (_, i) => ({
      value: `option${i + 1}`,
      label: `Option ${i + 1}`,
    })),
  },
};

export const CustomColors: Story = {
  args: {
    options: defaultOptions,
    className: 'bg-green-100 border-green-300 text-green-800 hover:bg-green-200',
  },
};

