import { Meta, StoryObj } from '@storybook/react';
import Input from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: { control: 'select', options: ['text', 'password', 'email', 'number'] },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

const InputTemplate: Story = {
  render: (args) => <Input {...args} />,
};

export const Default: Story = {
  ...InputTemplate,
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  ...InputTemplate,
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const Password: Story = {
  ...InputTemplate,
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const WithError: Story = {
  ...InputTemplate,
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    error: "",
    className: "w-[50%]",
  },
};

export const Disabled: Story = {
  ...InputTemplate,
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
};


