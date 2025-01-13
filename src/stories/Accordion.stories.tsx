import { Meta, StoryObj } from '@storybook/react';
import Accordion from '../components/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['arrow', 'plus'],
    },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    title: 'Accordion Title',
    content: 'This is the content of the accordion.',
    type: 'arrow',
  },
};

export const WithPlusIcon: Story = {
  args: {
    title: 'Accordion with Plus Icon',
    content: 'This accordion uses a plus/minus icon.',
    type: 'plus',
  },
};

export const CustomStyle: Story = {
  args: {
    title: 'Custom Styled Accordion',
    content: 'This accordion has custom styling.',
    type: 'arrow',
    className: 'bg-gray-100 text-gray-800',
  },
};

export const LongContent: Story = {
  args: {
    title: 'Accordion with Long Content',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.',
    type: 'arrow',
    className: "w-1/2"
  },
};

export const MultipleAccordions: Story = {
  render: () => (
    <div className="space-y-4">
      <Accordion title="First Accordion" content="Content of the first accordion" type="arrow" />
      <Accordion title="Second Accordion" content="Content of the second accordion" type="plus" />
      <Accordion title="Third Accordion" content="Content of the third accordion" type="arrow" />
    </div>
  ),
};

