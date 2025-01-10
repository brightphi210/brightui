import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal from '../components/Modal';
import Button from '../components/Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
    title: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

const ModalTemplate: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)} color="blue" size="sm" fontWeight='medium'>
          Open Modal
        </Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {args.children}
        </Modal>
      </>
    );
  },
};

export const Default: Story = {
  ...ModalTemplate,
  args: {
    title: 'Example Modal',
    children: <p>This is the content of the modal. You can put any React components or HTML here.</p>,
    className: "w-[100px]"
  },
};

export const CustomStyle: Story = {
  ...ModalTemplate,
  args: {
    title: 'Custom Styled Modal',
    className: "bg-gray-100 border-2 border-blue-500 text-4xl h-[400px]",
    children: <p>This modal has custom styling applied to it.</p>,
  },
};

export const LongContent: Story = {
  ...ModalTemplate,
  args: {
    title: 'Modal with Long Content',

    children: (
      <div>
        <p>This modal has a lot of content to demonstrate scrolling.</p>
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <p key={i}>Content line {i + 1}</p>
          ))}
      </div>
    ),

    className: "h-[15rem] overflow-y-scroll"
  },
};

